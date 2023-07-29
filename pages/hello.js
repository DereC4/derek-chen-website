import { useRouter } from "next/router"
import Head from "next/head";
import Navbar from "@/src/components/Navbar";
import Header from "@/src/components/Header";

export default function hello() {
    const router = useRouter();
    return (<>
        <Header/>
        <Navbar/>
        <div className="wrapper">
            <div className="intro-block">
                <h1>Derek Chen</h1>
                <p>Computer Science Student at UT Austin</p>
                <p>This page is a heavy work in progress!</p>
            </div>
            <footer id="foot">
                <a href="https://github.com/DereC4">
                    <i className="fa fa-github" style={{ fontSize: 36 }} />
                </a>
                <a href="https://www.linkedin.com/in/derekyujirchen/">
                    <i className="fa fa-linkedin-square" style={{ fontSize: 36 }} />
                </a>
            </footer>
        </div>
    </>
    )
}