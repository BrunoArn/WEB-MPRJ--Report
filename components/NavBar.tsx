export default function NavBar() {
    return (
        <nav className="bg-primary-red border-b-3 border-accent h-20">
            <div className="flex h-full items-center justify-between px-8 text-background">
                <ul className="flex gap-8 w-full">
                    <li className="font-bold">
                        Home
                    </li>

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