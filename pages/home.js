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
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}