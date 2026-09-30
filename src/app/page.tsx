import Discover from "../components/home/Discover";
import Hero from "../components/home/Hero";
import LearningPaths from "../components/home/LearningPaths";
import Partners from "../components/home/Partners";
import PathSection from "../components/home/PathSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Partners />
      <Discover />
      <LearningPaths />
      <PathSection />
    </main>
  );
}
