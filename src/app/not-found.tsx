import Link from "next/link";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

export default function NotFound() {
  return (
    <main>
      <PageHero className="min-h-[560px] sm:min-h-[720px] lg:min-h-[900px] overflow-hidden">
        <div className="relative mx-auto flex max-w-[1440px] flex-col items-center px-5 pb-20 pt-[120px] sm:pt-[150px] lg:pt-[190px] text-center">
          <p
            aria-hidden
            className="animate-pop select-none bg-clip-text font-heading text-[clamp(110px,26vw,420px)] font-semibold leading-[.85] text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(180deg,#CCFF00 25%,rgba(204,255,0,.55) 60%,rgba(204,255,0,0) 100%)",
            }}
          >
            404
          </p>
          <h1 className="relative -mt-[clamp(24px,5vw,90px)] max-w-[900px] animate-rise text-[26px] sm:text-[42px] lg:text-[60px] font-semibold leading-[1.2] text-white">
            The page you are looking for doesn&apos;t exist
          </h1>
          <p className="mt-5 sm:mt-8 max-w-[600px] animate-rise text-sm sm:text-base lg:text-lg font-light text-white/90 [animation-delay:.12s]">
            Try to use a correct URL or return to the homepage to continue
            exploring.
          </p>
          <Link
            href="/"
            className="btn-lime mt-8 sm:mt-10 animate-rise [animation-delay:.24s] shadow-xl"
          >
            Back to Home
          </Link>
        </div>
      </PageHero>
      <Footer />
    </main>
  );
}
