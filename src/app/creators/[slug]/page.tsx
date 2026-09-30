import CourseCard from "@/src/components/CourseCard";
import CreatorHeader from "@/src/components/creator/CreatorHeader";
import Footer from "@/src/components/Footer";
import PageHero from "@/src/components/PageHero";
import Reveal from "@/src/components/Reveal";
import { baseCourses } from "@/src/lib/data";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};
export const metadata: Metadata = {
  title: "PurePearl Studio – ByteSpace Creator",
  description:
    "Explore courses, workshops, and learning resources by PurePearl Studio on ByteSpace.",
};

export function generateStaticParams() {
  return [{ slug: "purepearl-studio" }];
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (slug !== "purepearl-studio") notFound();
  return (
    <main className="min-h-screen bg-white">
      <PageHero>
        <CreatorHeader />
      </PageHero>

      <section className="wrap py-12 sm:py-16 lg:py-[80px]">
        <h2 className="text-[24px] sm:text-[30px] lg:text-[34px] font-semibold text-ink">
          Courses by PurePearl Studio
        </h2>
        <div className="mt-8 sm:mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[42px]">
          {baseCourses.slice(0, 3).map((c, i) => (
            <Reveal key={c.id} delay={i * 90}>
              <CourseCard course={c} />
            </Reveal>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
