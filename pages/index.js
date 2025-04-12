import Head from "next/head";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Footer from "../components/Footer"; // Import the new Footer

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Akash's Portfolio</title>
        <meta
          name="description"
          content="Akash Devmare's professional portfolio"
        />
      </Head>
      <Navbar />
      <main className="bg-black">
        <HeroSection />
        <Experience />
        <Skills />
        {/* Your other sections */}
      </main>
      <Footer /> {/* Add the Footer here */}
    </div>
  );
}
