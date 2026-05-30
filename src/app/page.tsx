import { css } from "styled-system/css";
import { FvGraphic } from "@/components/FvGraphic";
import { PostListItem } from "@/components/PostListItem";
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

      <div
        className={css({
          marginTop: "10",
          borderTopWidth: "0.5px",
          borderTopStyle: "solid",
          borderTopColor: "border",
        })}
      />

      <ul className={css({ listStyle: "none", marginBottom: "120px" })}>
        {posts.map((post) => (
          <PostListItem key={post.slug} post={post} />
        ))}
      </ul>
    </main>
  );
}
