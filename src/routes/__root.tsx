import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router';
import Lenis from 'lenis';
import { useEffect } from 'react';

import '../styles.css';
import 'lenis/dist/lenis.css';
import { Footer } from '#/components/Footer';
import { iconLinks, seo } from '#/lib/seo';

const defaults = seo({
  title: 'Build with Klaw',
  description:
    'We’re a global strategic creative studio. We partner with early stage founders to bring their ideas to life.',
});

export const Route = createRootRoute({
  // Site-wide defaults. Any route can override an individual tag by emitting
  // one with the same name/property — TanStack dedupes child over parent.
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      ...defaults.meta,
    ],
    // Deliberately not `defaults.links` — that carries a canonical for "/",
    // which would collide with each route's own canonical.
    links: iconLinks,
  }),
  component: RootComponent,
});

function RootComponent() {
  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true });
    return () => lenis.destroy();
  }, []);

  // Under SSR the root route renders the entire document — there is no longer
  // an index.html. `HeadContent` writes the resolved head into the served
  // markup, which is the whole point of the migration.
  return (
    <html lang="en" className="w-full h-full" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="w-full h-full">
        <div id="app" className="w-full h-full flex flex-col">
          <Outlet />
          <Footer />
        </div>
        <Scripts />
      </body>
    </html>
  );
}
