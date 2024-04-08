import { Navbar } from "@/components/navbar";
import Link from "next/link";

export const metadata = {
    title: "Projects",
    description: "Page to show various projects that I have done",
};

export default function Projects() {
    return (
        <>
            <Navbar />
            <h1>Projects</h1>
            <h2><Link href="/projects/1">Hello World</Link></h2>
            <h2><Link href="/projects/2">Digital Website</Link></h2>
        </> 
    );
}
