import type { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { css } from "styled-system/css";
import { ShareButton } from "@/components/ShareButton";
import { Profile } from "@/components/Profile";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { frontmatter } = await getPostBySlug(slug);
  return {
    title: frontmatter.title,
    description: frontmatter.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      url: `/blog/${slug}`,
      title: frontmatter.title,
      description: frontmatter.description,
      publishedTime: frontmatter.publishedAt,
      modifiedTime: frontmatter.updatedAt ?? frontmatter.publishedAt,
      tags: frontmatter.tags,
      images: ["/opengraph-image"],
    },
  };
}

const prose = css({
  "& h2": {
    fontSize: "lg",
    fontWeight: "bold",
    lineHeight: "heading",
    marginTop: "10",
    marginBottom: "4",
  },
  "& h3": { fontSize: "md", fontWeight: "bold", marginTop: "8", marginBottom: "3" },
  "& p": { fontSize: "md", lineHeight: "body" },
  "& p + p": { marginTop: "4" },
  "& ul": { listStyle: "disc", paddingLeft: "6", marginTop: "4" },
  "& ol": { listStyle: "decimal", paddingLeft: "6", marginTop: "4" },
  "& li": { fontSize: "md", lineHeight: "body" },
  "& a": { color: "link", textDecoration: "underline" },
  "& code": {
    fontFamily: "mono",
    fontSize: "sm",
    backgroundColor: "border",
    paddingInline: "1",
    borderRadius: "md",
  },
  "& pre": {
    fontFamily: "mono",
    fontSize: "sm",
    lineHeight: "1.7",
    backgroundColor: "border",
    padding: "4",
    borderRadius: "md",
    overflowX: "auto",
    marginTop: "4",
  },
  "& pre code": { backgroundColor: "transparent", padding: "0" },
});

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { frontmatter, content } = await getPostBySlug(slug);

  return (
    <main
      className={css({
        maxWidth: "content",
        marginInline: "auto",
        paddingInline: "4",
        marginBottom: "120px",
      })}
    >
      <article>
        <h1
          className={css({
            marginTop: "60px",
            fontSize: "xl",
            fontWeight: "bold",
            lineHeight: "heading",
            color: "text.primary",
            textWrap: "wrap",
          })}
        >
          {frontmatter.title}
        </h1>

        <time
          className={css({ display: "block", marginTop: "6", fontSize: "sm", color: "text.muted" })}
        >
          {frontmatter.publishedAt.replace(/-/g, ".")}
        </time>

        <div className={`${prose} ${css({ marginTop: "60px", color: "text.primary" })}`}>
          <MDXRemote source={content} />
        </div>

        {frontmatter.tags.length > 0 && (
          <div
            className={css({
              display: "flex",
              flexWrap: "wrap",
              gap: "3",
              marginTop: "20",
              fontSize: "sm",
              color: "text.muted",
            })}
          >
            {frontmatter.tags.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>
        )}

        <div className={css({ marginTop: "6" })}>
          <ShareButton title={frontmatter.title} url={`${siteConfig.url}/blog/${slug}`} />
        </div>

        <div className={css({ marginTop: "20" })}>
          <Profile />
        </div>

        <Link
          href="/"
          className={css({
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "2",
            marginTop: "10",
            paddingBlock: "8",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "border",
            borderRadius: "md",
            fontSize: "xs",
            color: "text.muted",
          })}
        >
          <img
            src="/icons/arrow-left.svg"
            alt=""
            width={16}
            height={16}
            className={css({ _dark: { filter: "invert(1)" } })}
          />
          All Writings
        </Link>
      </article>
    </main>
  );
}
