import { ogImage } from "@/lib/og";
import { siteConfig } from "@/lib/site";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { frontmatter } = await getPostBySlug(slug);
  return ogImage(frontmatter.title, siteConfig.name);
}
