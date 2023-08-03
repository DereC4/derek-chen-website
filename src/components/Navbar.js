import Link from "next/link";

const Navbar = () => {
    return (
            <div className="py-8 default-margins grid gap-x-2 grid-cols-6">
                <div>
                    <Link href="/home" className="navbar-link">Home</Link>
                </div>
                <div>
                    <Link href="/projects" className="navbar-link">Projects</Link>
                </div>
                <div>
                    <Link href="/about" className="navbar-link">About</Link>
                </div>
                <div className="col-span-2"/>
                <div>
                    <p className="navbar-link">Icon</p>
                </div>
            </div>
    );
}
 
export default Navbar;