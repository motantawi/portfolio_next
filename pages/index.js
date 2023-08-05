import Head from "next/head";
import Main from "../components/Main";
import Particles from "react-particles";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mustafa | Front-End Developer</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Main />
    </div>
  );
}
