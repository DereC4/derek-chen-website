import { useRouter } from "next/router"

export default function hello() {
    const router = useRouter();
    return (
        <>
            <main className="">
                <div className="wrapper">
                    <div className="intro-block">
                        <div className="default-margins text-left">
                            <h1>Derek Chen</h1>
                            <p>Computer Science Student at UT Austin</p>
                            <p>This page is a heavy work in progress!</p>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                        </div>
                        
                    </div>
                </div>
            </main>
        </>
    )
}