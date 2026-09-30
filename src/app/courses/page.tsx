import SearchBrowser from "@/src/components/courses/SearchBrowser";
import Footer from "@/src/components/Footer";
import PageHero from "@/src/components/PageHero";
import { Suspense } from "react";

export default function page() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero className="h-[310px] sm:h-[370px] lg:h-[410px]">
        <div className="wrap flex h-full flex-col items-center pt-[110px] sm:pt-[140px] lg:pt-[160px] text-center">
          <h1 className="animate-rise text-[28px] sm:text-[36px] lg:text-[40px] font-semibold text-white">
            Find Your Next Course
          </h1>
        </div>
      </PageHero>

      <Suspense
        fallback={
          <div className="wrap py-24 text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-brand border-t-transparent" />
            <p className="mt-4 text-base text-[#666]">Loading courses...</p>
          </div>
        }
      >
        <SearchBrowser />
      </Suspense>
      <Footer />
    </main>
  );
}
