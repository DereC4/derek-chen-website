import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const [hamburger, setBurger] = useState(false);
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

                <div className="max-w-sm w-16 nav-container">
                    <input className="checkbox" type="checkbox" name="" id="" onClick={() => { setBurger(!hamburger) }} />
                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                    <div className="burger-menu">
                        <ul className="menu-items">
                            <li>Home</li>
                            <li>Home</li>
                            <li>Home</li>
                            <li>Home</li>
                            <li>Home</li>
                        </ul>
                    </div>

                </div>
            </div>

        </>
    );
}

export default Navbar;