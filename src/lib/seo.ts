const SITE_NAME = 'Klaw';
const SITE_URL = 'https://klaw.build';
const DEFAULT_AUTHOR = 'Klaw';

// The source asset is a 1184x329 wordmark, which is far too wide for a social
// card (X drops back to a small summary card outside ~2:1). These Cloudinary
// transforms letterbox it onto a 1200x630 canvas in the site's cream, which is
// the size Facebook, X and LinkedIn all expect.
const DEFAULT_IMAGE =
  'https://res.cloudinary.com/dwvxxjgfm/image/upload/c_scale,w_820/c_lpad,w_1200,h_630,b_rgb:FFFCF0/v1788223088/klaw__cxxaom.png';
const DEFAULT_IMAGE_WIDTH = 1200;
const DEFAULT_IMAGE_HEIGHT = 630;

const DEFAULT_ICON =
  'https://res.cloudinary.com/dwvxxjgfm/image/upload/v1788223038/logo_fussdu.png';

/** Site-wide <link> tags. Emitted once, by the root route. */
export const iconLinks = [
  { rel: 'icon', href: DEFAULT_ICON },
  { rel: 'shortcut icon', href: DEFAULT_ICON },
];
const TWITTER_CREATOR = '@ndmhjt';

type SeoOptions = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  type?: 'website' | 'article';
  twitterTitle?: string;
  twitterDescription?: string;
};

export function seo({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  imageAlt = `${SITE_NAME} — ${title}`,
  imageWidth = DEFAULT_IMAGE_WIDTH,
  imageHeight = DEFAULT_IMAGE_HEIGHT,
  type = 'website',
  twitterTitle = title,
  twitterDescription = description,
}: SeoOptions) {
  const url = new URL(path, SITE_URL).toString();

  return {
    meta: [
      { title },
      { name: 'description', content: description },
      { name: 'author', content: DEFAULT_AUTHOR },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:site_name', content: SITE_NAME },
      { property: 'og:image', content: image },
      { property: 'og:image:secure_url', content: image },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:image:width', content: String(imageWidth) },
      { property: 'og:image:height', content: String(imageHeight) },
      { property: 'og:image:alt', content: imageAlt },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:type', content: type },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: twitterTitle },
      { name: 'twitter:description', content: twitterDescription },
      { name: 'twitter:image', content: image },
      { name: 'twitter:image:alt', content: imageAlt },
      { name: 'twitter:creator', content: TWITTER_CREATOR },
      { name: 'twitter:site', content: TWITTER_CREATOR },
    ],
    // Canonical only. TanStack dedupes `meta` by name/property but NOT
    // `links`, so anything site-wide emitted here would stack up a duplicate
    // tag on every page — the site-wide icons live on the root route instead.
    links: [{ rel: 'canonical', href: url }],
  };
}
