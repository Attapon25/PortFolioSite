"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML / CSS / JavaScript</li>
        <li>React.Js</li>
        <li>Next.js</li>
        <li>MongoDB</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>Laravel</li>
        <li>Firebase</li>
        <li>SQL</li>
        <li>Figma</li>
        <li>Adobe XD</li>
        <li>Adobe Photoshop</li>
        <li>Adobe PremierePro</li>
        <li>Office 365</li>
        <li>Google Work space</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <ul className="list-disc pl-2">
          <p className="text-x font-extrabold">Bachelor&apos;s Degree in</p>
          <li>Suan Sunandha Rajabhat University</li>
          <li>Computer Engineering ∙ GPA 3.60</li>
        </ul>

        <ul className="list-disc pl-2">
          <p className="text-x font-extrabold">High School Degree in</p>
          <li>Suwannaramwittayakom School</li>
          <li>Science - Math ∙ GPA 2.60</li>
        </ul>

        <ul className="list-disc pl-2">
          <p className="text-x font-extrabold">Junior High School in</p>
          <li>Chinorot Wittayalai School</li>
        </ul>
      </ul>
    ),
  },
  {
    title: "Working Experience",
    id: "workingExperience",
    content: (
      <ul className="list-disc pl-2">
        <ul className="list-disc pl-2">
          <p className="text-x font-extrabold">Internship program 3 months</p>
          <li>Phuket Innovative Development | Fullstack Web Developer</li>
          <p className="text-x font-extrabold">Stack</p>
          <p className="text-xs font-normal">React JS | Node JS | express | Firebase | MYSQL</p>
        </ul>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li> JavaScript (Building 20 Projects) by Kong Ruksiam on Udemy</li>
        <li>The Web Developer Bootcamp 2023 by Colt Steele on Udemy</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          className="transition-all duration-300 rounded-lg blur-sm hover:blur-none"
          src="/images/profile.jpg"
          alt="Profile Picture"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I&apos;m in the early stages of learning HTML, CSS, JavaScript, and
            back-end technologies like MongoDB and frameworks such as Bootstrap.
            I&apos;m eager to develop my skills further and gain practical
            experience from an organization. I am prepared to dedicate myself to
            continuous learning, both within the organization and independently.
          </p>

          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("workingExperience")}
              active={tab === "workingExperience"}
            >
              Working Experience
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>

          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
