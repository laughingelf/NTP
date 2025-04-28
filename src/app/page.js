import Image from "next/image";
import Navbar from "./components/navbar";
import Layout from "./components/Layout";
import HeroSection from "./components/HeroMain";
import OurServices from "./components/OurServices";
import WhyChooseUs from "./components/Why";
import ContactSection from "./components/Contact";

export default function Home() {
  return (
    <Layout>
      <HeroSection/>
      <OurServices/>
      <WhyChooseUs/>
      <ContactSection/>
    </Layout>
   
  );
}
