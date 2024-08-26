"use client";

import Link from "next/link";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import { ModeToggle } from "@/components/mode-toggle";
import { usePathname } from "next/navigation";

export default function ClientRootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="max-w-2xl mx-auto py-10 px-4">
        <header>
          <div className="flex items-center justify-between">
            <ModeToggle />
            <nav className="ml-auto text-lg font-medium space-x-6">
              <Link href="/" className={`${pathname === "/" ? "text-black dark:text-white" : "text-gray-400 dark:text-gray-400"} hover:text-black dark:hover:text-white transition-colors`}>
                Home
              </Link>
              <Link href="/about" className={`${pathname === "/about" ? "text-black dark:text-white" : "text-gray-400 dark:text-gray-400"} hover:text-black dark:hover:text-white transition-colors`}>
                About
              </Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <Analytics />
      </div>
    </ThemeProvider>
  );
}
