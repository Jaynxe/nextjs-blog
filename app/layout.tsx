import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import { Inter } from "next/font/google";
import "./globals.css";
import RuntimeDisplay from "@/components/runtime-display";
import Navigation from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jaynxe",
  description: "Record my wonderful life",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-2xl mx-auto py-10 px-4">
            <header>
              <Navigation />
            </header>
            <main>{children}</main>
            <footer className="mt-10 text-center text-gray-500">
              <RuntimeDisplay />
              <div className="mt-2 text-sm">
                <p>&copy; {new Date().getFullYear()} <span className="font-bold">Jaynxe</span>. All rights reserved.</p>
              </div>
            </footer>
            <Analytics />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
