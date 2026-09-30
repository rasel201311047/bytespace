import CourseSidebar from "@/src/components/course/CourseSidebar";
import CourseTabs from "@/src/components/course/CourseTabs";
import VideoPlayer from "@/src/components/course/VideoPlayer";
import PageHero from "@/src/components/PageHero";
import { baseCourses } from "@/src/lib/data";
import { BarChart3, Share2, Star, Users } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
type Props = {
  params: Promise<{ slug: string }>;
};
export function generateStaticParams() {
  return baseCourses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = baseCourses.find((x) => x.slug === slug);
  return {
    title: c ? `${c.title} – ByteSpace` : "Course – ByteSpace",
  };
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  const course = baseCourses.find((c) => c.slug === slug);
  if (!course) notFound();

  const title =
    course.slug === "build-digital-asset"
      ? "Build Digital Asset: A Comprehensive Guide"
      : course.title;
  return (
    <main className="min-h-screen bg-white">
      <PageHero className="pb-12 sm:pb-16 lg:pb-[130px]">
        <div className="wrap relative pt-[110px] sm:pt-[140px] lg:pt-[160px]">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 sm:gap-6 animate-rise">
            <div className="min-w-0">
              <h1 className="text-[26px] sm:text-[36px] lg:text-[44px] font-semibold leading-[1.2] text-white">
                {title}
              </h1>
              <p className="mt-2 text-base sm:text-lg lg:text-[21px] font-medium text-white/95">
                Unlock the Power of Digital Creation with Expert Guidance
              </p>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white">
                by{" "}
                <Link
                  href="/creators/purepearl-studio"
                  className="text-lime font-medium hover:underline"
                >
                  {course.author}
                </Link>
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5 sm:gap-3">
                <span className="chip-white text-xs sm:text-sm">
                  <BarChart3
                    size={16}
                    className="text-brand"
                    strokeWidth={2.6}
                  />
                  Intermediate
                </span>
                <span className="chip-white text-xs sm:text-sm">
                  <Star size={16} className="fill-brand text-brand" />
                  4.8 (172 reviews)
                </span>
                <span className="chip-white text-xs sm:text-sm">
                  <Users size={16} className="text-brand" />
                  199 Students
                </span>
              </div>
            </div>
            <button
              type="button"
              className="btn-lime gap-2 !px-5 sm:!px-6 !py-2.5 cursor-pointer self-start shadow-md"
            >
              <Share2 size={16} />
              <span>Share</span>
            </button>
          </div>
          <div className="mt-8 sm:mt-10 grid gap-10 lg:grid-cols-[minmax(0,720px)_412px] lg:justify-between">
            <div className="animate-pop">
              <VideoPlayer />
            </div>
            <div className="hidden lg:block" />
          </div>
        </div>
      </PageHero>

      <div className="wrap relative">
        <div className="lg:hidden mt-8">
          <CourseSidebar price={course.price} />
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,720px)_412px] lg:justify-between">
          <div className="pb-16 sm:pb-24 pt-10 sm:pt-14 lg:pt-[90px]">
            <CourseTabs />
          </div>

          <div className="hidden lg:block lg:-mt-[510px] xl:-mt-[570px] lg:self-start">
            <div className="animate-rise [animation-delay:.2s]">
              <CourseSidebar price={course.price} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
