import { getCollection } from 'astro:content';

/** Fetch all posts sorted by date (newest first) */
export async function getSortedPosts() {
  const posts = await getCollection('posts');
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** Word count for reading time: ~200 wpm */
export function getReadingTimeMinutes(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

/** Slug for topic URLs: lowercase, spaces to hyphens, strip non-alphanumeric */
export function slugifyTopic(topic: string): string {
  return topic
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

/** All topics with display names and counts, sorted by name */
export async function getAllTopics(): Promise<{ name: string; slug: string; count: number }[]> {
  const posts = await getCollection('posts');
  const countMap = new Map<string, number>();
  const nameMap = new Map<string, string>();
  for (const p of posts) {
    for (const t of p.data.topics ?? []) {
      const s = slugifyTopic(t);
      if (!s) continue;
      countMap.set(s, (countMap.get(s) ?? 0) + 1);
      if (!nameMap.has(s)) nameMap.set(s, t);
    }
  }
  return Array.from(countMap.entries())
    .map(([slug, count]) => ({ name: nameMap.get(slug) ?? slug, slug, count }))
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));
}

/** Posts that have a topic whose slug matches, newest first */
export async function getPostsByTopicSlug(slug: string) {
  const posts = await getCollection('posts');
  return posts
    .filter((p) => (p.data.topics ?? []).some((t) => slugifyTopic(t) === slug))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** Group posts by year, newest year first */
export function groupPostsByYear<T extends { data: { date: Date } }>(posts: T[]) {
  return posts.reduce((acc, post) => {
    const year = post.data.date.getFullYear();
    const existing = acc.find((group) => group.year === year);
    if (existing) {
      existing.posts.push(post);
    } else {
      acc.push({ year, posts: [post] });
    }
    return acc;
  }, [] as Array<{ year: number; posts: T[] }>);
}
