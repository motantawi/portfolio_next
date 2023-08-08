import React from "react";
import aiImg from "../public/assets/projects/ai-sumz.png";
import AmazonImg from "../public/assets/projects/amazon.png";
import movixImg from "../public/assets/projects/movix.png";
import gymImg from "../public/assets/projects/gym-app.png";
import ProjectItem from "../components/ProjectItem";
import weatherImg from "../public/assets/projects/weather.png";
import youtubeImg from "../public/assets/projects/youtube.png";
import recipeImg from "../public/assets/projects/recipe.png";
import dashImg from "../public/assets/projects/dashboard.png";
import linkedImg from "../public/assets/projects/linkedin.png";
import Head from "next/head";

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
          <h2 className="py-4">What I&apos;ve Built</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectItem
              title="Amazon Clone"
              backgroundImg={AmazonImg}
              projectUrl="/amazon"
              tech="Next JS"
            />
            <ProjectItem
              title="Gym Website"
              backgroundImg={gymImg}
              projectUrl="/gym"
              tech="React JS"
            />
            <ProjectItem
              title="Admin Dashboard"
              backgroundImg={dashImg}
              projectUrl="/dashboard"
              tech="React JS"
            />
            <ProjectItem
              title="LinkedIn Clone"
              backgroundImg={linkedImg}
              projectUrl="/linkedin"
              tech="React JS"
            />
            <ProjectItem
              title="Movix"
              backgroundImg={movixImg}
              projectUrl="/movie"
              tech="React JS"
            />

            <ProjectItem
              title="YouTube Clone"
              backgroundImg={youtubeImg}
              projectUrl="/youtube"
              tech="React JS"
            />

            <ProjectItem
              title="Ai Summarizer"
              backgroundImg={aiImg}
              projectUrl="/summarizer"
              tech="React JS"
            />
            <ProjectItem
              title="Recipe App"
              backgroundImg={recipeImg}
              projectUrl="/recipe"
              tech="React JS"
            />
            <ProjectItem
              title="Weather Website"
              backgroundImg={weatherImg}
              projectUrl="/weather"
              tech="React JS"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default projects;
