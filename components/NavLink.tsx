"use client";

import { link } from "fs/promises";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
    children: React.ReactNode;
    href: string;
    prefetch?: boolean;
}

export default function NavLink({ children, href, prefetch = true }: NavLinkProps) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link href={href}
            prefetch={prefetch}
            className={`
                hover:underline
                ${isActive ? "font-bold text-accent" : ""}
                `}
        >
            {children}
        </Link>
    );

}