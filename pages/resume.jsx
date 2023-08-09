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
              href="https://www.linkedin.com/in/mustafa-tantawi12/"
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
          An enthusiastic and detail-oriented Front-End Developer specialize in
          building mobile responsive front-end UI applications that connect with
          API’s and other backend technologies. I’m passionate about learning
          new technologies and understand there is more than one way to
          accomplish a task. Though I am most proficient in building front-end
          applications using HTML, CSS, Javascript, and React, I am a quick
          learner and can pick up new tech stacks as needed. I believe that
          being a great developer is not using one specific language, but
          choosing the best tool for the job.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2 skills">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Front-End Web Developer
            <span className="px-2">|</span> HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>Typescript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>SASS
            <span className="px-2">|</span>Bootstrap
            <span className="px-2">|</span>Redux
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span>RESTAPIs
            <span className="px-2">|</span>PHP
            <span className="px-2">|</span>MySQL
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">BRAVO TECH</span>
            <span className="px-2">|</span>Zagazig, EG
          </p>
          <p className="py-1 italic">
            Front End Web Developer Freelancing (Current) (Four Monthes)
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
      </div>
    </>
  );
};

export default resume;
