import BackButton from '@/components/common/back-button';
import Footer from '@/components/common/footer';

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="mx-auto w-full max-w-5xl py-10">
        <BackButton />
      </div>
      <div className="overflow-x-hidden">{children}</div>
      <div className="mx-auto w-full max-w-5xl">
        <Footer />
      </div>
    </div>
  );
}
