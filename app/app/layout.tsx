import { TopNav } from '@/components/top-nav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopNav />
      <main className="p-4">{children}</main>
    </>
  );
}
