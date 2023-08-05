import Intro from "./component/Intro";
import SectionDivider from "./component/SectionDivider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider/>
    </main>
  );
}
