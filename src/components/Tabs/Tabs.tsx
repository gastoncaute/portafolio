"use client";
import React, { useState } from "react";
import ResumeSection from "./ResumeSection";
import AboutSection from "./AboutSection";
import ProjectSection from "./ProjectSection";
import ContactSecion from "./ContactSecion";

export default function Tabs({ selectedLanguage }: { selectedLanguage: any }) {
  const [visibleComponent, setVisibleComponent] = useState("resume");
  return (
    <nav className="tab-nav">
      <ul>
        <li>
          <button onClick={() => setVisibleComponent("resume")}>Resume</button>
        </li>
        <li>
          <button onClick={() => setVisibleComponent("about")}>About</button>
        </li>
        <li>
          <button onClick={() => setVisibleComponent("projects")}>
            Projects
          </button>
        </li>
        <li>
          <button onClick={() => setVisibleComponent("contact")}>
            Contact
          </button>
        </li>
      </ul>
      <h1>{selectedLanguage}</h1>
      {visibleComponent === "resume" && <ResumeSection />}
      {visibleComponent === "about" && <AboutSection />}
      {visibleComponent === "projects" && <ProjectSection />}
      {visibleComponent === "contact" && <ContactSecion />}
    </nav>
  );
}
