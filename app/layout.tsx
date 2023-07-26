import Footer from "@/components/layout/footer";
import Nav from "@/components/layout/nav";
import cx from "classnames";
import { Suspense } from "react";
import { inter, sfPro } from "./fonts";
import "./globals.css";
import Provider from "./provider";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: ['100', '300', '400', '500', '700', '900'], subsets: ["latin"] });

export const metadata = {
  title:
    "Human Resource Analytics Simulation: The Case of Mr. Macky's Cajun Cuisine Restaurants",
  description: "Currently in developmental-progress",
  metadataBase: new URL("https://simulation.sturman.org"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`min-w-screen min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-100 ${cx(
          sfPro.variable,
          inter.variable,
        )}`}
      >
        <Provider>
          <Suspense fallback="...">
            {/* @ts-expect-error Server Component */}
            <Nav />
          </Suspense>
          <main className={`${roboto.className} flex min-h-screen w-full justify-center py-32`}>
            <div className="flex w-[80%] flex-col items-center">{children}</div>
          </main>
          <Footer />
          <div id="modal-root" />
        </Provider>
      </body>
    </html>
  );
}
