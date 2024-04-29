import React from "react";
import Link from "next/link";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>Mustafa | About</title>
        <link rel="icon" href="/fav.png" />
      </Head>
      <div
        id="about"
        className="w-full md:h-screen p-5 flex items-center py-16"
      >
        <div className="max-w-[1240px] m-auto">
          <p
            className="uppercase text-xl tracking-widest text-[#5651e5]"
            style={{ marginTop: "30px" }}
          >
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-700">
            As a dynamic React Frontend Developer, I specialize in a
            comprehensive suite of technologies including HTML5, CSS3,
            JavaScript, React, Redux, TypeScript, Next.js, Node.js, Express,
            MongoDB, Mongoose, AJAX, Sass, Tailwind CSS, Bootstrap, MUI, Mantine
            UI, and React Query. My foundation in Agile methodologies, combined
            with a deep understanding of frontend development principles,
            enables me to deliver projects that meet and exceed client
            expectations.
          </p>
          <p className="py-2 text-gray-700">
            <strong className="text-gray-800">Professional Experience:</strong>
            <br />
            <strong className="text-gray-900">
              Frontend Developer at Ajwaab:
            </strong>{" "}
            In my current role at this pioneering educational platform, I apply
            my front-end development expertise to craft responsive, intuitive
            interfaces. My work supports Ajwaab's mission to merge technology
            with education, enhancing the online learning experience for users
            worldwide.
            <br />
            <strong className="text-gray-900">
              Front-End Developer Intern at Code Alpha:
            </strong>{" "}
            This position sharpened my proficiency in web development, focusing
            on HTML, CSS, and JavaScript. My contributions here involved
            creating visually appealing, efficient web pages.
            <br />
            <strong className="text-gray-900">
              Software Engineering Intern at ALX Africa:
            </strong>{" "}
            My tenure expanded my knowledge in software engineering, covering a
            broad spectrum of subjects including programming, algorithms, web
            development, and project management. This role was instrumental in
            reinforcing my technical skills and industry knowledge.
            <br />
            <strong className="text-gray-900">
              Freelance Front-End Developer:
            </strong>{" "}
            I have excelled in creating seamless, mobile-responsive UI layouts.
            My freelance projects highlight my ability to troubleshoot,
            implement design adjustments, and enhance web functionality through
            operational plugins.
          </p>
          <Link href="/projects" className="mr-auto">
            <p className="py-2 text-gray-600 underline cursor-pointer w-fit">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default index;
