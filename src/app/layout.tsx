import Footer from "@/components/layout/Footer";
import { Providers } from "./providers";
import Navbar from "@/components/layout/Navbar";
import NextAuthProvider from "@/libs/NextAuthProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <NextAuthProvider>
        <body>
          <Providers>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </Providers>
        </body>
      </NextAuthProvider>
    </html>
  );
}
