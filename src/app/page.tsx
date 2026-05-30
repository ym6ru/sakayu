import { css } from "styled-system/css";
import { Hero } from "@/components/Hero";
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
      <Hero title="blog" subtitle="作ったもの、考えたことを記録しています。" />

      <ul className={css({ listStyle: "none", marginBottom: "120px" })}>
        {posts.map((post) => (
          <PostListItem key={post.slug} post={post} />
        ))}
      </ul>
    </main>
  );
}
