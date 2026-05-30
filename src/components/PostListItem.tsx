import Link from "next/link";
import { css } from "styled-system/css";
import type { PostMeta } from "@/lib/blog";

export function PostListItem({ post }: { post: PostMeta }) {
  return (
    <li
      className={css({
        paddingBlock: "10",
        borderTopWidth: "0.5px",
        borderTopStyle: "solid",
        borderTopColor: "border",
        _first: { borderTopWidth: 0 },
      })}
    >
      <Link href={`/blog/${post.slug}`} className={css({ display: "block" })}>
        <h2
          className={css({
            fontSize: "lg",
            fontWeight: "bold",
            lineHeight: "heading",
            color: "text.primary",
          })}
        >
          {post.title}
        </h2>

        <div
          className={css({
            display: "flex",
            alignItems: "center",
            gap: "6",
            marginTop: "2",
            fontSize: "xs",
            color: "text.muted",
          })}
        >
          <time>{post.publishedAt.replace(/-/g, ".")}</time>
          {post.tags.length > 0 && (
            <div className={css({ display: "flex", gap: "2" })}>
              {post.tags.map((tag) => (
                <span key={tag}>#{tag}</span>
              ))}
            </div>
          )}
        </div>

        <p
          className={css({
            marginTop: "4",
            fontSize: "sm",
            color: "text.primary",
            lineClamp: "3",
          })}
        >
          {post.excerpt}
        </p>

        <div
          className={css({
            display: "inline-flex",
            alignItems: "center",
            gap: "2",
            marginTop: "4",
            fontSize: "xs",
            color: "text.muted",
          })}
        >
          Read more
          <img
            src="/icons/arrow-right.svg"
            alt=""
            width={16}
            height={16}
            className={css({ _dark: { filter: "invert(1)" } })}
          />
        </div>
      </Link>
    </li>
  );
}
