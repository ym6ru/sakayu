import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { z } from "zod";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

const dateString = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "publishedAt/updatedAt は YYYY-MM-DD 形式で指定してください");

const frontmatterSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  publishedAt: dateString,
  updatedAt: dateString.optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
});

export type PostFrontmatter = z.infer<typeof frontmatterSchema>;
export type PostMeta = PostFrontmatter & { slug: string };
export type Post = { slug: string; frontmatter: PostFrontmatter; content: string };

async function readPost(fileName: string): Promise<Post> {
  const slug = fileName.replace(/\.mdx$/, "");
  const raw = await fs.readFile(path.join(BLOG_DIR, fileName), "utf8");
  const { data, content } = matter(raw);
  const parsed = frontmatterSchema.safeParse(data);
  if (!parsed.success) {
    throw new Error(`記事の frontmatter が不正です（${fileName}）: ${parsed.error.message}`);
  }
  return { slug, frontmatter: parsed.data, content };
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const files = await fs.readdir(BLOG_DIR);
  const posts = await Promise.all(
    files.filter((file) => file.endsWith(".mdx")).map((file) => readPost(file)),
  );
  return posts
    .filter((post) => !post.frontmatter.draft)
    .map((post) => ({ slug: post.slug, ...post.frontmatter }))
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post> {
  return readPost(`${slug}.mdx`);
}
