import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://wonsivan.github.io/Homepage/'),
  title: 'Shiwen Wang | 王诗文',
  description: 'Academic homepage of Shiwen Wang, a Ph.D. candidate researching virtualization security, AI systems security, and confidential computing.',
  icons: {
    icon: 'https://wonsivan.github.io/Homepage/shiwen-wang.png',
    apple: 'https://wonsivan.github.io/Homepage/shiwen-wang.png',
  },
  openGraph: {
    title: 'Shiwen Wang | 王诗文',
    description: 'Ph.D. Candidate researching virtualization, AI systems security, and confidential computing.',
    type: 'website',
    url: 'https://wonsivan.github.io/Homepage/',
    images: [{ url: 'https://wonsivan.github.io/Homepage/og.png', width: 1200, height: 630, alt: 'Shiwen Wang | 王诗文' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shiwen Wang | 王诗文',
    description: 'Ph.D. Candidate researching virtualization, AI systems security, and confidential computing.',
    images: ['https://wonsivan.github.io/Homepage/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
