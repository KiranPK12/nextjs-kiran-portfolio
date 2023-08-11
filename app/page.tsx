import About from "./component/About";
import Intro from "./component/Intro";
import Projects from "./component/Project/Projects";
import SectionDivider from "./component/Section/SectionDivider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider/>
      <About/>
      {/* <SectionDivider/> */}
      <Projects/>
    </main>
  );
}
