import About from "./components/about";
import Greeting from "./components/greeting";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import Navbar from "./components/navbar";
import Socials from "./components/socials";
import Work from "./components/work";

export default function Home() {
  return (
    <main className="">
      {/* navbar */}
      <MaxWidthWrapper>
        <Navbar />
        <Greeting />
        <Work />
        <About />
        <Socials />
      </MaxWidthWrapper>
    </main>
  );
}
