import Link from "next/link";

const Navbar = () => {
    return (
        <>
            <div className="default-margins flex flex-row justify-between">
                <div className="py-4 flex flex-row gap-4">
                    <Link href="/home" className="navbar-link">Home</Link>
                    <Link href="/projects" className="navbar-link">Projects</Link>
                    <Link href="/about" className="navbar-link">About</Link>
                </div>
                <p className="self-center">Icon Here</p>
            </div>

        </>
    );
}
 
export default Navbar;