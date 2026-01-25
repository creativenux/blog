import rss from '@astrojs/rss';
import { getSortedPosts } from '../lib/posts';
import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL } from '../consts';

export async function GET(context: { site: string | undefined }) {
  const posts = await getSortedPosts();

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site ?? SITE_URL,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description ?? post.data.title,
      pubDate: post.data.date,
      link: `/posts/${post.slug}/`,
    })),
  });
}
