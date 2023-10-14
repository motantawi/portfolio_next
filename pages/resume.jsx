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
        <h5 className="text-center underline text-[18px] py-6">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-4">
          <p className="italic">
            <span className="font-bold italic">Code Alpha</span>
            <span className="px-2">|</span>Lucknow , IN
          </p>
          <p className="py-1 italic">
            Front-End Web Developer Intern (Present)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Creating web pages using frontend technologies (HTML CSS and
              JavaScript etc.)
            </li>
            <li>
              Sharp understanding of client's requirement and which technologies
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
            <a href="https://drive.google.com/file/d/1_VdWnJ497URUbexInYprtor7HJ6tDOc3/view">
              Download CV
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default resume;
