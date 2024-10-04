import "./globals.css";
import cx from "classnames";
import { sfPro, inter, argentCF } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense, ReactNode } from "react";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import ClientSessionProvider from "@/components/ClientSessionProvider";
import { getServerSession } from "next-auth/next";

export const metadata = {
  title: "OfferApp - Send real estate offers quick and easy",
  description:
    "Offer app is a completely self-powered real-estate offer writing platform. Save thousands and get your real-estate offer sent quickly and easily.",
  metadataBase: new URL("https://offerapp.vercel.app"),
};

interface RootLayoutProps {
  children: ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable, argentCF.variable)}>
        <ClientSessionProvider session={session}>
          <Suspense fallback="...">
            <Nav />
          </Suspense>
          <main className="flex w-full flex-col items-center justify-center pt-24">
            {children}
          </main>
          <Footer />
          <VercelAnalytics />
        </ClientSessionProvider>
      </body>
    </html>
  );
}