export default function NavBar() {
    return (
        <nav className="bg-primary-red border-b-3 border-accent h-20">
            <div className="flex h-full items-center justify-between px-8 text-background">
                {/* Left Side */}
                <h1 className="text-xl font-bold">
                    DEDIT
                </h1>

                {/* Right Side */}
                <ul className="flex gap-8">
                    <li className="ml-auto">
                        Sobre
                    </li>
                    <li>
                        Contato
                    </li>
                </ul>
            </div>
        </nav>
    );
}