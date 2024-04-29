// Projects
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
