import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="navbar mx-auto pt-8 pb-10">
            <ul className="flex flex-row justify-between gap-5 default-margins">
                <Link href="/home" className="navbar-link">Home</Link>
                <Link href="/projects" className="navbar-link">Projects</Link>
                <p className="navbar-link">TempTemp</p>
            </ul>
        </nav>
    );
}
 
export default Navbar;