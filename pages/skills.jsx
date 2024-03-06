import Image from "next/image";
import React from "react";
import Head from "next/head";

// Import images
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

const skillsData = [
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

const Skills = () => {
  return (
    <>
      <Head>
        <title>Mustafa | Skills</title>
        <link rel="icon" href="/fav.png" />
      </Head>
      <div id="skills" className="w-full lg:h-screen p-2">
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
          <p
            className="text-2xl tracking-widest uppercase text-[#5651e5] mb-5"
            style={{ marginTop: "90px" }}
          >
            Skills
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
              >
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image
                      src={skill.img}
                      width="64px"
                      height="64px"
                      alt={skill.name}
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>{skill.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
