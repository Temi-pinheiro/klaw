const SITE_NAME = 'Klaw';
const SITE_URL = 'https://klaw.build';
const DEFAULT_AUTHOR = 'Klaw';
const DEFAULT_IMAGE =
  'https://res.cloudinary.com/dwvxxjgfm/image/upload/v1788223088/klaw__cxxaom.png';
const DEFAULT_ICON =
  'https://res.cloudinary.com/dwvxxjgfm/image/upload/v1788223038/logo_fussdu.png';
const TWITTER_CREATOR = '@ndmhjt';

type SeoOptions = {
  title: string;
  description: string;
  path?: string;
  image?: string;
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
  imageWidth = 800,
  imageHeight = 600,
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
      { property: 'og:image:width', content: String(imageWidth) },
      { property: 'og:image:height', content: String(imageHeight) },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:type', content: type },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: twitterTitle },
      { name: 'twitter:description', content: twitterDescription },
      { name: 'twitter:image', content: image },
      { name: 'twitter:creator', content: TWITTER_CREATOR },
    ],
    links: [
      { rel: 'canonical', href: url },
      { rel: 'icon', href: DEFAULT_ICON },
      { rel: 'shortcut icon', href: DEFAULT_ICON },
    ],
  };
}
