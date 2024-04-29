import Image from "next/image";
import React from "react";
import Head from "next/head";
import { skillsData } from "../../utils/constants.js";

const index = () => {
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
            {skillsData.map((skill) => (
              <div
                key={skill.name}
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

export default index;
