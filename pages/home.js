import { useRouter } from "next/router"
import Image from "next/image";

export default function hello() {
    const router = useRouter();
    return (
        <>
            <main className="">
                <div className="wrapper">
                    <div className="intro-block blue-block">
                        <div className="default-margins">
                            <div className="flex flex-row">
                                <div className="text-left flex flex-col pad-l gap-y-4">
                                    <h1 className="">Derek Chen</h1>
                                    <h2>Computer Science Student at UT Austin</h2>
                                    <p>
                                        Hello! Welcome to a humble website under construction.
                                        I am currently a sophomore at the University of Texas at Austin pursuing a degree in Computer Science, with interests lying in Software Development.
                                    </p>
                                    <p>
                                        (Convergent project stuff)
                                    </p>
                                    <p>
                                        My passion lies in Full Stack Development and Software Engineering. I actively aim to improve my skills in these fields and am eager to learn! I am currently looking for SWE internships to gain more experience.
                                    </p>
                                </div>
                                <p className="m-28">TEMP IMAGE</p>
                            </div>


                        </div>

                    </div>
                </div>
            </main>
        </>
    )
}