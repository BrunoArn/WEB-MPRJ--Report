export default function NavBar() {
    return (
        <nav className="px-8 py-4">
            <ul className="flex gap-8">
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
        </nav>
    );
}