import Tech from "./ui/tech";
import Languages from "./languages";
import Education from "./education";
import Socials from "./socials";

export default function About() {
  return (
    <div className="py-4">
      <p className="">
        My work varies from developing my startup ideas, building websites for
        freelance clients, or creating fun side projects. I&apos;m always
        looking for new opportunities to learn and grow.
      </p>
      <div className="my-8 gap-2 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5">
        <Tech icon="/next.svg" url="https://nextjs.org/" />
        <Tech icon="/supabase.svg" url="https://supabase.com/" />
        <Tech icon="/vercel.svg" url="https://vercel.com/dashboard" />
        <Tech icon="/reactjs.svg" url="https://react.dev/" />
        <Tech icon="/sanity.svg" url="https://www.sanity.io/" />
        <Tech icon="/sveltekit.svg" url="https://kit.svelte.dev/" />
        <Tech icon="/firebase.svg" url="https://firebase.google.com/" />
        <Tech icon="/typescript.svg" url="https://www.typescriptlang.org/" />
        <Tech icon="/tailwindcss.svg" url="https://tailwindcss.com/" />
        <Tech icon="/expo.svg" url="https://expo.dev/" />
      </div>
      <div className="space-y-3">
        <p>
          My journey into technology began with a degree in Application and
          Media Development at mboRijnland in my hometown Zoetermeer.
        </p>
        <p>
          Inspired by the possibilities of software development, I pursued
          further studies at The Hague University of Applied Sciences,
          specializing in Software Engineering.
        </p>
      </div>
      <Languages />
      <Education />
      <Socials />
    </div>
  );
}
