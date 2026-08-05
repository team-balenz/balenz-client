import Footer from '@/shared/components/footer/Footer';
import Header from '@/shared/components/header/Header';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div id="top" />
      <Header />
      {children}
      <Footer />
    </>
  );
}
