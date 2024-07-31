import React from "react";
import Link from "next/link";
import Head from "next/head";
import { experiences } from "../../utils/constants";

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
            An experienced React Frontend Developer with more than a year and half of hands-on work, I specialize in turning complex requirements into smooth and engaging digital experiences. My skills encompass a wide range of modern web technologies, and I have a strong understanding of Agile methods. I focus on adaptability and collaboration to take projects from start to finish.

My career in technology is driven by a constant desire to learn and improve, giving me a deep understanding of software engineering principles. This background helps me handle the detailed aspects of front-end development, from creating responsive designs to boosting user engagement with careful attention to design and functionality.

Let’s connect to discuss how I can bring innovative solutions and a deep commitment to quality to your team. I am eager to leverage my skills and experience to produce outstanding results for your projects.
          </p>
          <p className="py-2 text-gray-700">
            <strong className="text-gray-800">Professional Experience:</strong>
            <br />
            {experiences.map((ex) => (
              <>
                <strong className="text-gray-900" key={ex.id}>
                  {ex.id}. {ex.title}:
                </strong>{" "}
                {ex.description}
                <br />
                <br />
              </>
            ))}
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
