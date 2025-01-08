import AboutMe from "@/components/home-view/about-me";
// import Experiences from "@/components/home-view/experiences";
import Hero from "@/components/home-view/hero";

import Skills from "@/components/home-view/skills";

// import Achievements from "@/components/home-view/achievements";
import Blogs from "@/components/home-view/bolos";
import Projects from "@/components/home-view/projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      {/* <Experiences /> */}
      <Skills />
      <Projects />
      <Blogs />
      {/* <Achievements /> */}
    </main>
  );
}
