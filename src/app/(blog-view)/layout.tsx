import BlogHeader from '@/components/blog-view/blog-header';
import Footer from '@/components/common/footer';

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <BlogHeader />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
