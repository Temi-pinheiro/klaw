import { HeadContent, Outlet, createRootRoute } from '@tanstack/react-router';
import Lenis from 'lenis';

import '../styles.css';
import 'lenis/dist/lenis.css';
import { Footer } from '#/components/Footer';
import { useEffect } from 'react';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true });
    return () => lenis.destroy();
  }, []);
  return (
    <>
      <HeadContent />
      <Outlet />
      <Footer />
    </>
  );
}
