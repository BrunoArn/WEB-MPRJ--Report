import NavLink from "./NavLink";

export default function NavBar() {
    return (
        <nav className="bg-primary-red border-b-3 border-accent h-20">
            <div className="flex h-full items-center justify-between px-8 text-background">
                {/* Left Side */}
                <h1 className="text-xl font-bold">
                    <NavLink href="/">
                        DEDIT
                    </NavLink>
                </h1>

                {/* Right Side */}
                <ul className="flex gap-8">
                    <li className="ml-auto">
                        <NavLink href="/sobre">
                            Sobre
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href="/contato">
                            Contato
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}