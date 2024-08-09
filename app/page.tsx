import About from "@/components/About";
import Projects from "@/components/Projects";
import MySkills from "@/components/MySkills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-10 md:gap-20 px-4 md:px-8 lg:px-16">
        <About />
        <MySkills />
        <Projects />
      </div>
    </main>
  );
}
