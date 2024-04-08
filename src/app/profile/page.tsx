import { Navbar } from "@/components/navbar";

export const metadata = {
    title: "Profile",
    description: "Profile page to see accounts details",
};

export default function Profile() {
    return (
        <>  
            <Navbar />
            <h1>My Profile</h1>
        </>
    );
}