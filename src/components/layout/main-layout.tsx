import type { ReactNode } from 'react';
import { Header } from './header';
import { Footer } from './footer';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen" suppressHydrationWarning={true}>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8" suppressHydrationWarning={true}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
