import BlogHeader from '@/components/blog-view/blog-header';
import Footer from '@/components/common/footer';

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <BlogHeader />
      <div className="overflow-x-hidden">{children}</div>
      <div className="mx-auto w-full max-w-5xl">
        <Footer />
      </div>
    </div>
  );
}
