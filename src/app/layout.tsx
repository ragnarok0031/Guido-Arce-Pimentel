import './globals.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/jetbrains-mono/400.css';
import '@fontsource/jetbrains-mono/500.css';

import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'U.E. Guido Arce Pimentel - ArceConnect',
  description: 'Plataforma educativa para la comunidad de la U.E. Guido Arce Pimentel',
  keywords: ['educación', 'colegio', 'secundaria', 'estudiantes', 'aprendizaje', 'plataforma educativa'],
  authors: [{ name: 'U.E. Guido Arce Pimentel' }],
  creator: 'U.E. Guido Arce Pimentel',
  icons: {
    icon: '/Logogap.png',
    shortcut: '/Logogap.png',
    apple: '/Logogap.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={cn('min-h-screen font-sans antialiased')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
