import { Inter } from "next/font/google";
import "./globals.css";
import ClientRootLayout from "@/components/clientRootLayout"; // 引入客户端组件

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Xie An",
  description: "Record my wonderful life",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}>
        <ClientRootLayout>
          {children}
        </ClientRootLayout>
      </body>
    </html>
  );
}
