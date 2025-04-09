import HeroSection from "../components/HeroSection";
import Experience from "../components/Experience";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Experience />
      <Skills />
      {/* We'll add other sections later */}
    </main>
  );
}
