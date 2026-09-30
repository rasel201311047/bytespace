export const partnerLogos = [1, 2, 3, 4, 5];
export const homeCategories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];
export type Course = {
  id: string;
  slug: string;
  title: string;
  author: string;
  authorSlug: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  rating: number;
  price: number;
  lessons: number;
  duration: string;
  comments: number;
  image: string;
  categories: string[];
};
const AUTHOR = { author: "purepearl studio", authorSlug: "purepearl-studio" };
const META = {
  level: "Beginner" as const,
  rating: 4.5,
  price: 25,
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
};

export const baseCourses: Course[] = [
  {
    id: "figma",
    slug: "learn-figma-from-basic",
    title: "Learn Figma from Basic",
    image: "/images/course-figma.png",
    categories: ["UI/UX Design", "Creative Marketing"],
    ...AUTHOR,
    ...META,
  },
  {
    id: "digital-asset",
    slug: "build-digital-asset",
    title: "Build Digital Asset",
    image: "/images/course-digital-asset.png",
    categories: ["Drawing & Painting", "Music", "Animation"],
    ...AUTHOR,
    ...META,
  },
  {
    id: "big-data",
    slug: "the-power-of-big-data",
    title: "the Power of Big Data",
    image: "/images/course-big-data.png",
    categories: ["Marketing", "Social Media"],
    ...AUTHOR,
    ...META,
  },
  {
    id: "productivity",
    slug: "balancing-productivity-and-wellbeing",
    title: "Balancing Productivity and Wellbeing",
    image: "/images/course-productivity.png",
    categories: ["Cooking", "Creative Marketing"],
    ...AUTHOR,
    ...META,
  },
  {
    id: "money",
    slug: "mastering-money-management",
    title: "Mastering Money Management",
    image: "/images/course-money.png",
    categories: ["Marketing", "Social Media"],
    ...AUTHOR,
    ...META,
  },
  {
    id: "startup",
    slug: "from-idea-to-startup-success",
    title: "From Idea to Startup Success",
    image: "/images/course-startup.png",
    categories: ["Marketing", "Creative Marketing", "UI/UX Design"],
    ...AUTHOR,
    ...META,
  },
];
export const catalogue: Course[] = Array.from({ length: 90 }, (_, i) => {
  const c = baseCourses[i % baseCourses.length];
  return { ...c, id: `${c.id}-${i}` };
});
export const featuredCourses = baseCourses;

export const learningPaths = [
  "Design",
  "Development",
  "IT & Software",
  "Business",
  "Marketing",
  "Photography",
] as const;
