import About from "./components/about";
import Greeting from "./components/greeting";
import Navbar from "./components/navbar";
import Work from "./components/work";

export default function Home() {
  return (
    <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
      {/* navbar */}
      <Navbar />
      <Greeting />
      <Work />
      <About />
    </main>
  );
}
