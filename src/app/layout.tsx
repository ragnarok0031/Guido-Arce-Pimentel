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
import { Breadcrumb } from '@/components/ui/breadcrumb';
import { usePathname } from 'next/navigation';

export const metadata: Metadata = {
  title: 'U.E. Guido Arce Pimentel - ArceConnect',
  description: 'Plataforma educativa integral para la comunidad de la U.E. Guido Arce Pimentel. Ofrecemos educación técnico humanística de calidad en Los Negros, Bolivia.',
  keywords: ['educación', 'colegio', 'secundaria', 'primaria', 'técnico humanístico', 'Los Negros', 'Bolivia', 'Santa Cruz', 'Guido Arce Pimentel'],
  authors: [{ name: 'U.E. Guido Arce Pimentel' }],
  creator: 'U.E. Guido Arce Pimentel',
  publisher: 'U.E. Guido Arce Pimentel',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://arceconnect.netlify.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'U.E. Guido Arce Pimentel - ArceConnect',
    description: 'Plataforma educativa integral para la comunidad de la U.E. Guido Arce Pimentel. Ofrecemos educación técnico humanística de calidad en Los Negros, Bolivia.',
    url: 'https://arceconnect.netlify.app',
    siteName: 'ArceConnect - U.E. Guido Arce Pimentel',
    images: [
      {
        url: 'https://arceconnect.netlify.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'U.E. Guido Arce Pimentel - Educación técnico humanística en Los Negros, Bolivia',
      }
    ],
    locale: 'es_BO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'U.E. Guido Arce Pimentel - ArceConnect',
    description: 'Plataforma educativa integral para la comunidad de la U.E. Guido Arce Pimentel. Ofrecemos educación técnico humanística de calidad en Los Negros, Bolivia.',
    images: ['https://arceconnect.netlify.app/og-image.jpg'],
    creator: '@UEGuidoArce',
    site: '@UEGuidoArce',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/Logogap.png',
    shortcut: '/Logogap.png',
    apple: '/Logogap.png',
  },
};

function BreadcrumbWrapper() {
  "use client";
  const pathname = usePathname();
  // No mostrar breadcrumbs en la página principal
  if (pathname === '/') return null;
  return <div className="container mx-auto px-4"><Breadcrumb /></div>;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>
      <body className={cn('min-h-screen font-sans antialiased')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <BreadcrumbWrapper />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
