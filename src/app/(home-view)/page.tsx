import AboutMe from '@/components/home-view/about-me';
import Hero from '@/components/home-view/hero';
import Skills from '@/components/home-view/skills';
import FeaturedBlogs from '@/components/home-view/featured-blogs';
import Projects from '@/components/home-view/projects';
import FunFacts from '@/components/home-view/fun-facts';
import Why from '@/components/home-view/why';
import Contact from '@/components/home-view/contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <FunFacts />
      <FeaturedBlogs />
      <Why />
      <Contact />
    </main>
  );
}
