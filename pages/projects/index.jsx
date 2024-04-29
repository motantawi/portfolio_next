import React from "react";
import Head from "next/head";
import { Projects } from "../../utils/constants";
import ProjectItem from "../../components/ProjectItem";

const projects = () => {
  return (
    <>
      <Head>
        <title>Mustafa | Projects</title>
        <link rel="icon" href="/fav.png" />
      </Head>
      <div id="projects" className="w-full" style={{ paddingTop: "50px" }}>
        <div className="max-w-[1240px] mx-auto px-2 py-16">
          <p className="text-xl tracking-widest uppercase text-[#5651e5]">
            Projects
          </p>
          <h2 className="py-4">Some Of What I&apos;ve Built</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Projects.map((pro) => (
              <ProjectItem
                key={pro.title}
                title={pro.title}
                backgroundImg={pro.img}
                projectUrl={pro.url}
                tech={pro.tech}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default projects;
