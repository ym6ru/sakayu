export interface Ogp {
  title?: string;
  description?: string;
  image?: string;
}

const cache = new Map<string, Promise<Ogp>>();

function decode(text: string) {
  return text
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

function readMeta(html: string, key: string) {
  for (const tag of html.match(/<meta\s[^>]*>/gi) ?? []) {
    const name = tag.match(/(?:property|name)=["']([^"']+)["']/i)?.[1];
    if (name?.toLowerCase() !== key) continue;
    const content = tag.match(/content=["']([^"']*)["']/i)?.[1];
    if (content) return decode(content);
  }
}

async function load(url: string): Promise<Ogp> {
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(5000) });
    if (!response.ok) return {};
    const html = await response.text();
    const image = readMeta(html, "og:image");
    return {
      title: readMeta(html, "og:title") ?? html.match(/<title>([^<]*)<\/title>/i)?.[1],
      description: readMeta(html, "og:description") ?? readMeta(html, "description"),
      image: image && new URL(image, url).href,
    };
  } catch {
    return {};
  }
}

export function getOgp(url: string) {
  if (!cache.has(url)) cache.set(url, load(url));
  return cache.get(url)!;
}
