import type { Metadata } from 'next';
import '@/styles/global.css.ts';

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
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
