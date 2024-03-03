import Header from "@/components/layout/header.tsx";
import Footer from "@/components/layout/footer.tsx";
import Console from "@/components/layout/console";
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
      <Console />
    </html>
  );
}
