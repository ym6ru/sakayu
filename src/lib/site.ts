const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://sakayu.dev").replace(/\/+$/, "");

export const siteConfig = {
  name: "sakayu.dev",
  description:
    "さかゆのブログ。普段作ったものや気づいたこと、考えたことを残しています。インターフェースデザインが好きです。",
  url: siteUrl,
};
