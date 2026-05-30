import { css } from "styled-system/css";
import Link from "next/link";
import { FvGraphic } from "@/components/FvGraphic";
import { getAllPosts } from "@/lib/blog";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <main
      className={css({
        display: "flex",
        flexDirection: "column",
        maxWidth: "content",
        marginInline: "auto",
        paddingInline: "4",
      })}
    >
      <section
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: "4",
          marginBlock: "10",
        })}
      >
        <h1
          className={css({
            fontSize: "xl",
            fontWeight: "bold",
            lineHeight: "heading",
            color: "text.primary",
          })}
        >
          blog
        </h1>
        <p className={css({ fontSize: "md", color: "text.muted" })}>
          作ったもの、考えたことを記録しています。
        </p>
      </section>

      <FvGraphic />

      <ul
        className={css({
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: "8",
          marginBlock: "10",
        })}
      >
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className={css({ display: "flex", flexDirection: "column", gap: "2" })}
            >
              <time className={css({ fontSize: "xs", color: "text.muted" })}>
                {post.publishedAt.replace(/-/g, ".")}
              </time>
              <h2 className={css({ fontSize: "md", fontWeight: "bold", color: "text.primary" })}>
                {post.title}
              </h2>
              <p className={css({ fontSize: "sm", color: "text.muted" })}>{post.description}</p>
              {post.tags.length > 0 && (
                <div
                  className={css({
                    display: "flex",
                    gap: "3",
                    fontSize: "xs",
                    color: "text.muted",
                  })}
                >
                  {post.tags.map((tag) => (
                    <span key={tag}>#{tag}</span>
                  ))}
                </div>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
