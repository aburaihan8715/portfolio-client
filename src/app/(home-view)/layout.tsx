import Footer from "@/components/common/footer";
import Header from "@/components/common/header";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
