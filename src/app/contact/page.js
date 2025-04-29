import ContactSection from "../components/Contact";
import ContactInfo from "../components/ContactInfo";
import HeroContact from "../components/HeroContact";
import Layout from "../components/Layout";



export default function Contact() {
    return (
        <Layout>
            <HeroContact/>
            <ContactInfo/>
            <ContactSection/>
        </Layout>
    )
};