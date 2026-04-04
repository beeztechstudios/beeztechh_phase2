import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";

export default function WebsiteLayout({ children }) {
    return (
        <>
            <PageBackground />
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
}
