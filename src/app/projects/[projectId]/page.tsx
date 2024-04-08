import { Navbar } from "@/components/navbar";
import { Metadata } from "next";

type Props =  {
    params: { 
        projectId: string 
    };
};

export const generateMetadata = ({ params }: Props): Metadata => {
    return {
        title: `Project ${params.projectId}`,
    };
};

export default function ProjectDetails({ params }: Props) {
    return (
        <>
            <Navbar />
            <h1>Details about project: {params.projectId}</h1>
        </>
    );
}