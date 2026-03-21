import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/styles/global.css.ts';

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '100 900',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: 'balenz',
  description: '하나의 이슈를 다양한 관점으로 나란히 비교해주는 시각 확장 뉴스 플랫폼',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body>{children}</body>
    </html>
  );
}
