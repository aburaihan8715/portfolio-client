import ScrollTop from '@/components/common/scroll-to-top';
import Footer from '@/components/common/footer';
import Header from '@/components/common/header';

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="">
        <Header />
        <div className="">{children}</div>
        <Footer />
      </div>
      <ScrollTop />
    </>
  );
}
