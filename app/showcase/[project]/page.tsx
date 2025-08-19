import AnimatedMockup from "@/app/components/AnimatedMockup";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import Navbar from "@/app/components/navbar";
import Socials from "@/app/components/socials";
import { projects } from "@/lib/projects";
import { Image } from "@nextui-org/react";
import React from "react";

function getProject(projectID: string) {
  return projects[0];
}

export default function Page() {
  const project = getProject("e-ride-rentals");

  return (
    <MaxWidthWrapper>
      <div className="space-y-16 pb-20">
        <Navbar />
        <div className="space-y-2 pb-12">
          <h1 className="text-3xl font-bold">{project.title}</h1>
          <p className="text-xl ">{project.description}</p>
        </div>

        {/* <AnimatedMockup src={project.mainMockupImage} /> */}
        <Image src={project.mainMockupImage} alt="" />

        <div className="space-y-2">
          <p className="text-xl font-semibold">Opdrachtgever</p>
          <p className="text-md">{project.clientDescription}</p>
        </div>

        <Image src={project.secondMockupImage} alt="" />

        <div className="space-y-2">
          <p className="text-xl font-semibold">Uitdaging</p>
          <p className="text-md">{project.challengeDescription}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex-1 space-y-2">
            <p className="text-xl font-semibold">Diensten</p>
            <ul className="list-disc list-inside">
              {project.services.map((service, index) => (
                <li key={index} className="text-md">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 space-y-2">
            <p className="text-xl font-semibold">Tech Stack</p>
            <ul className="list-disc list-inside">
              {project.techStack.map((tech, index) => (
                <li key={index} className="text-md">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Socials />
    </MaxWidthWrapper>
  );
}
