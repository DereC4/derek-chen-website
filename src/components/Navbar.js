import Link from "next/link";

const Navbar = () => {
    return (
        <>
            <div className="default-margins flex flex-row justify-between items-center mx-28 drop-shadow-md overflow-hidden">
                <div className="self-start py-4">Derek Chen</div>
                <div className="navbar-option flex flex-row gap-4 py-4">
                    <Link href="/" className="navbar-link">Home</Link>
                    <Link href="/about" className="navbar-link">About</Link>
                    <Link href="/projects" className="navbar-link">Projects</Link>
                    <Link href="/experience" className="navbar-link">Experience</Link>
                    <p className="self-center">Icon Here</p>
                </div>

                <nav role="navigation" className="hamburger-menu">
                    <div id="menuToggle">
                        <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul id="menu">
                            <a href="#"><li>Home</li></a>
                            <a href="#"><li>About</li></a>
                            <a href="#"><li>Info</li></a>
                            <a href="#"><li>Contact</li></a>
                        </ul>
                    </div>
                </nav>
            </div>

        </>
    );
}

export default Navbar;