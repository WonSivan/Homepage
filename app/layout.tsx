import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://shiwen-wang.iiesyssec.chatgpt.site'),
  title: '王诗文 | Shiwen Wang',
  description: '王诗文的学术个人主页。研究方向包括虚拟化和智能系统安全、机密计算。',
  icons: { icon: '/shiwen-wang.png', apple: '/shiwen-wang.png' },
  openGraph: {
    title: '王诗文 | Shiwen Wang',
    description: 'Ph.D. Candidate researching virtualization, AI systems security, and confidential computing.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: '王诗文 | Shiwen Wang' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '王诗文 | Shiwen Wang',
    description: 'Ph.D. Candidate researching virtualization, AI systems security, and confidential computing.',
    images: ['/og.png'],
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
