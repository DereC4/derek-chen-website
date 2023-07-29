import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <Link href="/" className="navbar-link">Home</Link>
                <Link href="/projects" className="navbar-link">Projects</Link>
            </ul>
        </nav>
    );
}
 
export default Navbar;