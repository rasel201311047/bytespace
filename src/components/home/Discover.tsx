"use client";

import { useState } from "react";
import { featuredCourses, homeCategories } from "@/src/lib/data";
import CategoryChips from "../CategoryChips";
import Reveal from "../Reveal";
import CourseCard from "../CourseCard";

export default function Discover() {
  const [category, setCategory] = useState(homeCategories[0]);

  const courses =
    category === "Featured"
      ? featuredCourses
      : featuredCourses.filter((c) => c.categories.includes(category));

  return (
    <section className="bg-white py-14 sm:py-20 lg:py-[90px]">
      <div className="wrap">
        <Reveal className="text-center">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-semibold leading-[1.25] text-black">
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>
          <p className="mx-auto mt-4 sm:mt-5 max-w-[860px] text-sm sm:text-base lg:text-lg font-light leading-relaxed text-[#777]">
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </p>
          <CategoryChips
            items={homeCategories}
            extra="+ More"
            onChange={setCategory}
            className="mx-auto mt-8 sm:mt-10 max-w-[1000px] justify-center"
          />
        </Reveal>

        <div className="mt-12 sm:mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-[42px] lg:gap-y-8">
          {courses.map((c, i) => (
            <Reveal key={c.id} delay={(i % 3) * 90} className="min-w-0">
              <CourseCard course={c} />
            </Reveal>
          ))}
        </div>

        {courses.length === 0 && (
          <p className="mt-12 text-center text-[#777]">
            No courses found in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
