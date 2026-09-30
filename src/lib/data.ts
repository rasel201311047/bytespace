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

export const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/images/avatar-sarah.png",
    text: '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/images/avatar-james.png",
    text: '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/images/avatar-alex.png",
    text: '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];
export const footerCols = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];

// datof  cource
export const searchCategories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];
export const sidebarLessons = [
  { n: "01", title: "Introduction to Digital Assets", time: "12 mins" },
  { n: "02", title: "Design Principles for Impacts", time: "21 mins" },
  {
    n: "03",
    title: "Advanced Techniques in Digital Creation",
    time: "16 mins",
  },
];

export const keyPoints = [
  "Foundational Concepts",
  "Design Principles Mastery",
  "Advanced Techniques in Digital Creation",
  "Project Showcase and Critique",
  "Optimizing for Various Platforms",
  "Digital Asset Management Best Practices",
  "Monetization Strategies",
  "Capstone Project: Building Your Portfolio",
];
export const modules = [
  {
    title: "Module 1: Introduction to Digital Assets",
    text: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
  },
  {
    title: "Module 2: Design Principles for Impact",
    text: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
  },
  {
    title: "Module 3: Advanced Techniques in Digital Creation",
    text: "Push your craft further with 'Layering and Compositing' and 'Motion Basics.' Build polished assets that stand out.",
  },
  {
    title: "Module 4: User-Centric Design Strategies",
    text: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
  },
  {
    title: "Module 5: Interactive Media and Engagement",
    text: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
  },
  {
    title: "Module 6: Project Showcase and Critique",
    text: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
  },
  {
    title: "Module 7: Optimizing Digital Assets for Various Platforms",
    text: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
  },
];

export const reviews = [
  {
    id: 1,
    name: "PurePearl Studio",
    role: "UI/UX Designer",
    avatar: "/images/avatar-rev1.png",
    rating: 5,
    when: "a year ago",
    text: '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
  },
  {
    id: 2,
    name: "Albert Flores",
    role: "UI/UX Designer",
    avatar: "/images/avatar-rev2.png",
    rating: 5,
    when: "a year ago",
    text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
  },
  {
    id: 3,
    name: "Cody Fisher",
    role: "UI/UX Designer",
    avatar: "/images/avatar-rev3.png",
    rating: 5,
    when: "a year ago",
    text: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
  },
  {
    id: 4,
    name: "Brooklyn Simmons",
    role: "UI/UX Designer",
    avatar: "/images/avatar-rev4.png",
    rating: 5,
    when: "a year ago",
    text: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
  },
];

export const ratingBreakdown = [
  { stars: 5, count: 720 },
  { stars: 4, count: 120 },
  { stars: 3, count: 21 },
  { stars: 2, count: 12 },
  { stars: 1, count: 16 },
];
