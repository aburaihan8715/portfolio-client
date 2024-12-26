import Footer from "@/components/common/footer";
import Header from "@/components/common/header";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
