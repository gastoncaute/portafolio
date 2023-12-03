"use client";
import React, { useState } from "react";
import ResumeSection from "./ResumeSection";
import AboutSection from "./AboutSection";
import ProjectSection from "./ProjectSection";
import ContactSecion from "./ContactSecion";

export default function Tabs({ selectedLanguage }: { selectedLanguage: any }) {
  const [visibleComponent, setVisibleComponent] = useState("resume");
  const getButtonText = (component: string) => {
    switch (component) {
      case "resume":
        return selectedLanguage === "spanish" ? "Resumen" : "Resume";
      case "about":
        return selectedLanguage === "spanish" ? "Sobre mí" : "About";
      case "projects":
        return selectedLanguage === "spanish" ? "Proyectos" : "Projects";
      case "contact":
        return selectedLanguage === "spanish" ? "Contacto" : "Contact";
      default:
        return "";
    }
  };
  return (
    <nav className="tab-nav">
      <ul>
        <li>
          <button onClick={() => setVisibleComponent("resume")}>
            {getButtonText("resume")}
          </button>
        </li>
        <li>
          <button onClick={() => setVisibleComponent("about")}>
            {getButtonText("about")}
          </button>
        </li>
        <li>
          <button onClick={() => setVisibleComponent("projects")}>
            {getButtonText("projects")}
          </button>
        </li>
        <li>
          <button onClick={() => setVisibleComponent("contact")}>
            {getButtonText("contact")}
          </button>
        </li>
      </ul>
      {visibleComponent === "resume" && (
        <ResumeSection selectedLanguage={selectedLanguage} />
      )}
      {visibleComponent === "about" && (
        <AboutSection selectedLanguage={selectedLanguage} />
      )}
      {visibleComponent === "projects" && (
        <ProjectSection selectedLanguage={selectedLanguage} />
      )}
      {visibleComponent === "contact" && (
        <ContactSecion selectedLanguage={selectedLanguage} />
      )}
    </nav>
  );
}
