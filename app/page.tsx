import About from "@/components/About";
import { Features } from "@/components/Features";
import MyProjects from "@/components/MyProjects";
import MySkills from "@/components/MySkills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-10 md:gap-20 px-4 md:px-8 lg:px-16">
        <About />
        <MySkills />
        <MyProjects />
        <Features />
      </div>
    </main>
  );
}
