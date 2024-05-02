// Projects
import todoImg from "../public/assets/projects/todoList.png";
import blogImg from "../public/assets/projects/blogApp.png";
import aiImg from "../public/assets/projects/ai-sumz.png";
import amazonImg from "../public/assets/projects/amazon.png";
import movixImg from "../public/assets/projects/movix.png";
import gymImg from "../public/assets/projects/gym-app.png";
import weatherImg from "../public/assets/projects/weather.png";
import youtubeImg from "../public/assets/projects/youtube.png";
import recipeImg from "../public/assets/projects/recipe.png";
import dashImg from "../public/assets/projects/dashboard.png";
import linkedImg from "../public/assets/projects/linkedin.png";
import financeImg from "../public/assets/projects/finance.png";
import travelImg from "../public/assets/projects/travel.png";
// Skills
import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import SASS from "../public/assets/skills/sass.png";
import NextJS from "../public/assets/skills/nextjs.png";
import Typescript from "../public/assets/skills/typescript.png";
import Bootstrap from "../public/assets/skills/bootstrap.png";
import Node from "../public/assets/skills/node.png";
import Express from "../public/assets/skills/express.png";
import Mongo from "../public/assets/skills/mongo.png";
import Redux from "../public/assets/skills/redux.jpg";
import MUI from "../public/assets/skills/mui.jpeg";
import MantineUI from "../public/assets/skills/mantineui.png";
import ReactQuery from "../public/assets/skills/reactquery.png";

export const Projects = [
  {
    title: "Todo-List",
    img: todoImg,
    url: "/projects/todolist",
    tech: "React Js",
  },
  {
    title: "MERN Blog",
    img: blogImg,
    url: "/projects/blog",
    tech: "React Js",
  },
  {
    title: "Amazon",
    img: amazonImg,
    url: "/projects/amazon",
    tech: "Next Js",
  },
  {
    title: "Gym",
    img: gymImg,
    url: "/projects/gym",
    tech: "Next Js",
  },
  {
    title: "Admin",
    img: dashImg,
    url: "/projects/dashboard",
    tech: "React JS",
  },
  {
    title: "LinkedIn",
    img: linkedImg,
    url: "/projects/linkedin",
    tech: "React Js",
  },
  {
    title: "Movix",
    img: movixImg,
    url: "/projects/movie",
    tech: "React Js",
  },
  {
    title: "YouTube",
    img: youtubeImg,
    url: "/projects/youtube",
    tech: "React Js",
  },
  {
    title: "Summarizer",
    img: aiImg,
    url: "/projects/summarizer",
    tech: "React Js",
  },
  {
    title: "Recipe",
    img: recipeImg,
    url: "/projects/recipe",
    tech: "React Js",
  },
  {
    title: "Weather",
    img: weatherImg,
    url: "/projects/weather",
    tech: "React Js",
  },
  {
    title: "Finance",
    img: financeImg,
    url: "/projects/finance",
    tech: "React Js",
  },
  {
    title: "Travel",
    img: travelImg,
    url: "/projects/travel",
    tech: "React Js",
  },
];

export const skillsData = [
  { name: "HTML5", img: Html },
  { name: "CSS3", img: Css },
  { name: "JavaScript", img: Javascript },
  { name: "React", img: ReactImg },
  { name: "Redux", img: Redux },
  { name: "Express", img: Express },
  { name: "MongoDB", img: Mongo },
  { name: "Node.js", img: Node },
  { name: "TypeScript", img: Typescript },
  { name: "Next.js", img: NextJS },
  { name: "Sass", img: SASS },
  { name: "Tailwind CSS", img: Tailwind },
  { name: "Bootstrap", img: Bootstrap },
  { name: "Matrial UI", img: MUI },
  { name: "Mantine UI", img: MantineUI },
  { name: "React Query", img: ReactQuery },
];

export const navLinks = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "About",
    href: "/about",
  },
  {
    id: 3,
    title: "Skills",
    href: "/skills",
  },
  {
    id: 4,
    title: "Projects",
    href: "/projects",
  },
  {
    id: 5,
    title: "Contact",
    href: "/contact",
  },
];

export const experiences = [
  {
    id: 1,
    title: "Frontend Developer at Ajwaab",
    description:
      "In my current role at this pioneering educational platform, I apply my front-end development expertise to craft responsive, intuitive interfaces. My work supports Ajwaab's mission to merge technology with education, enhancing the online learning experience for users worldwide.",
  },
  {
    id: 2,
    title: "Front-End Developer Intern at Code Alpha",
    description:
      "This position sharpened my proficiency in web development, focusing on HTML, CSS, and JavaScript. My contributions here involved creating visually appealing, efficient web pages.",
  },
  {
    id: 3,
    title: "Software Engineering Intern at ALX Africa",
    description:
      "My tenure expanded my knowledge in software engineering, covering a broad spectrum of subjects including programming, algorithms, web development, and project management. This role was instrumental in reinforcing my technical skills and industry knowledge.",
  },
  {
    id: 4,
    title: "Freelance Front-End Developer",
    description:
      "I have excelled in creating seamless, mobile-responsive UI layouts. My freelance projects highlight my ability to troubleshoot, implement design adjustments, and enhance web functionality through operational plugins.",
  },
];
