import Discover from "../components/home/Discover";
import Hero from "../components/home/Hero";
import Partners from "../components/home/Partners";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Partners />
      <Discover />
    </main>
  );
}
