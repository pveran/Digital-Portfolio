import { Navbar } from "@/components/navbar"
import { describe } from "node:test";

export const metadata = {
    title: "About me",
    description: "Page to describe who I am",
};

export default function About() {
    return (
        <>
            <Navbar />
            <h1>About me</h1>
        </>
    )
}