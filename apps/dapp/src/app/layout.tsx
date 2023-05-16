import "@bera/ui/styles.css";
import "../styles/globals.css";
import { cn } from "@bera/ui";
import { Button } from "@bera/ui/button";
import { Icons } from "@bera/ui/icons";
import { Toaster } from "@bera/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import { IBM_Plex_Sans } from "next/font/google";
import { headers } from "next/headers";
import Link from "next/link";
import { SiteFooter } from "~/components/footer";
import { MainNav } from "~/components/main-nav";
import { MobileDropdown } from "~/components/mobile-nav";
import { TailwindIndicator } from "~/components/tailwind-indicator";
import { ThemeProvider } from "~/components/theme-provider";

const fontSans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  subsets: ["latin"],
});

export default function RootLayout(props: { children: React.ReactNode }) {
  const headersList = headers();
  // read the custom x-pathname header
  const pathname = headersList.get("x-pathname") || "";

  return (
    <>
      <html lang="en" className="bg-background">
        <body
          className={cn(
            "min-h-screen font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex flex-col min-h-screen">
              <div className="flex-1">
                <nav className="fixed left-0 right-0 z-50 border-b bg-background">
                  <div className="flex items-center h-16 max-w-4xl px-4 mx-auto justify-between">
                    <div className="items-center hidden mr-8 md:flex">
                      <span className="text-lg font-bold tracking-tight">
                        <Link href={"/"}>
                          <Icons.logo className="w-12 h-12" />
                        </Link>
                      </span>
                    </div>
                    <MobileDropdown />
                    <MainNav pathname={pathname} />
                    <Button>Connect wallet</Button>
                  </div>
                </nav>
                <main className="container w-full pt-40">{props.children}</main>
              </div>
              <SiteFooter />
            </div>
            <TailwindIndicator />
          </ThemeProvider>
          <Analytics />
          <Toaster />
        </body>
      </html>
    </>
  );
}
