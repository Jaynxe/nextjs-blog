"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/mode-toggle";

export default function Navigation() {
    const pathname = usePathname();

    return (
        <div className="flex items-center justify-between">
            <ModeToggle />
            <nav className="ml-auto text-lg font-medium space-x-6">
                <Link
                    href="/"
                    className={`${pathname === "/" ? "text-black dark:text-white" : "text-gray-400 dark:text-gray-400"
                        } hover:text-black dark:hover:text-white transition-colors`}
                >
                    Home
                </Link>
                <Link
                    href="/about"
                    className={`${pathname === "/about" ? "text-black dark:text-white" : "text-gray-400 dark:text-gray-400"
                        } hover:text-black dark:hover:text-white transition-colors`}
                >
                    About
                </Link>
            </nav>
        </div>
    );
}
