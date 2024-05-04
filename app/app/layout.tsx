import { TopNav } from "@/components/top-nav";

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      <TopNav />
      <main className="container pt-4">{children}</main>
    </>
  );
}
