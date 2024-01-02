import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import AboutImg from "../public/assets/about.png";

const about = () => {
  return (
    <>
      <Head>
        <title>Mustafa | About</title>
        <link rel="icon" href="/fav.png" />
      </Head>
      <div
        id="about"
        className="w-full md:h-screen p-2 flex items-center py-16"
      >
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <p
              className="uppercase text-xl tracking-widest text-[#5651e5]"
              style={{ marginTop: "30px" }}
            >
              About
            </p>
            <h2 className="py-4">Who I Am</h2>
            <p className="py-2 text-gray-600">
              Driven and adaptable React Frontend Developer with hands-on
              expertise in HTML5, CSS3, React, Redux, TypeScript, Next.js,
              JavaScript, Node.js, Express, MongoDB, and more. Skilled in Agile
              methodologies, I bring a strong foundation in frontend
              technologies and a keen understanding of client requirements to
              deliver impactful projects.
            </p>
            <p className="py-2 text-gray-600">
              Noteworthy experience includes roles as a Front-End Developer
              Intern at Code Alpha, where I honed my skills in crafting web
              pages using HTML, CSS, and JavaScript. Additionally, my tenure as
              a Software Engineering Intern at ALX Africa broadened my knowledge
              across diverse software engineering topics, reinforcing my
              capabilities in programming, algorithms, web development, and
              project management.
            </p>
            <p className="py-2 text-gray-600">
              As a dedicated Freelance Front-End Developer, I ensured seamless
              and mobile-responsive UI layouts, excelling in troubleshooting
              issues, configuring operational plugins, and implementing design
              changes. Eager to contribute and grow further in the ever-evolving
              realm of frontend development.
            </p>
            <Link href="/projects">
              <p className="py-2 text-gray-600 underline cursor-pointer">
                Check out some of my latest projects.
              </p>
            </Link>
          </div>
          <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-3 hover:scale-105 ease-in duration-300">
            <Image src={AboutImg} className="rounded-xl" alt="/" />
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
