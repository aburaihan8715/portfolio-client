import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import ScrollTop from "@/components/common/scroll-to-top";
import { Toaster } from "sonner";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="">
        <Header />
        <div>{children}</div>
        <Footer />
      </div>

      <ScrollTop />
      <Toaster />
    </>
  );
}
