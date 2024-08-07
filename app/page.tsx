import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-10 md:gap-20 px-4 md:px-8 lg:px-16">
        <About />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}
