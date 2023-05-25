import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="bg-gray-900">
            <ul className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <li>
                    <Link href="/">
                        <Image
                        src="/logo.svg"
                        width={80}
                        height={80}
                        alt=""
                        />
                    </Link>
                </li>
                <li className="bg-green-500 rounded-full px-7 py-2">
                    <Link href="/meus-numeros" className="flex items-center gap-4 text-slate-50">
                        <Image
                        src="/search.svg"
                        width={15}
                        height={15}
                        alt="lupa"
                        />
                        MEUS NÚMEROS
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;