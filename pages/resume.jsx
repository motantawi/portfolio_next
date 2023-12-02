import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Mustafa | Resume</title>
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2
            className="text-center"
            style={{ color: "rgb(86 81 229 / var(--tw-text-opacity))" }}
          >
            Mustafa Tantawy
          </h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/mustafa-tantawy/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/motantawi/"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Web Development <span className="px-1">|</span> Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p className="py-2">Web Development</p>
            <p>Problem Solving</p>
          </div>
        </div>
        <p>
          React Frontend Developer with extensive skills in HTML5, CSS3,
          React, Redux, TypeScript, and more. Experience includes Front-End
          Developer Intern at Code Alpha, where I demonstrated proficiency in
          creating web pages using frontend technologies and understanding
          client requirements. As a Software Engineering Intern at ALX Africa
          and as a dedicated Freelancer, I honed my expertise in responsive UI
          layouts, issue troubleshooting, and plugin configurations. Eager to
          leverage skills and adaptability to contribute effectively in the
          dynamic world of frontend development.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2 skills">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">-{">"}</span> HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>JS
            <span className="px-2">|</span>TS
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Next
            <span className="px-2">|</span>SASS
            <span className="px-2">|</span>Bootstrap
            <span className="px-2">|</span>Redux
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span>Node
            <span className="px-2">|</span>Express
            <span className="px-2">|</span>MongoDB
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Code Alpha</span>
            <span className="px-2">|</span>Lucknow , IN
          </p>
          <p className="py-1 italic">
            Front-End Web Developer Intern ( 9/2023 -{">"} 11/2023 )
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Creating web pages using frontend technologies (HTML CSS and
              JavaScript etc.)
            </li>
            <li>
              Sharp understanding of client’s requirement and which technologies
              will be used in his project.
            </li>
          </ul>
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">ALX Africa</span>
          </p>
          <p className="py-1 italic">Software Engineer (Present) (July 2023)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Software Engineering topics include: computer programming,
              algorithms, data structures, human-computer interaction, web
              development, software project management, architecture and
              operating systems, security and usability, social responsibility
              and ethics, etc. Software engineers usually work in teams.
            </li>
          </ul>
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">BRAVO TECH</span>
            <span className="px-2">|</span>Zagazig, EG
          </p>
          <p className="py-1 italic">
            Front End Web Developer Freelancing (Five Monthes)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>
              Worked directly with a diverse client base to understand and
              implement multiple technologies and programs.
            </li>
          </ul>
        </div>
        <div className="flex justify-center mb-7">
          <button className="p-3 cv_btn">
            <a href="https://drive.google.com/file/d/13JhM84YyRx5NgjmUz4Md3rmXENFOrWBC/view">
              Download CV
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default resume;
