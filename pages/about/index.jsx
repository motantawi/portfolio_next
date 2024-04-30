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
