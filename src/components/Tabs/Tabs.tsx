"use client";
import React, { useState } from "react";
import ResumeSection from "./ResumeSection";
import AboutSection from "./AboutSection";
import ProjectSection from "./ProjectSection";
import ContactSecion from "./ContactSecion";

export default function Tabs({ selectedLanguage }: { selectedLanguage: any }) {
  const [visibleComponent, setVisibleComponent] = useState("about");
  const setActiveSection = (section: string) => {
    setVisibleComponent(section);
  };
  const getButtonText = (component: string) => {
    switch (component) {
      case "about":
        return selectedLanguage === "Spanish" ? "Sobre mí" : "About";
      case "projects":
        return selectedLanguage === "Spanish" ? "Proyectos" : "Projects";
      case "contact":
        return selectedLanguage === "Spanish" ? "Contacto" : "Contact";
      case "resume":
        return selectedLanguage === "Spanish" ? "Currículum" : "Resume";
      default:
        return "";
    }
  };
  return (
    <>
      <nav className="tab-nav">
        <ul>
          <li>
            <button
              className={visibleComponent === "about" ? "active" : ""}
              onClick={() => setActiveSection("about")}
            >
              {getButtonText("about")}
            </button>
          </li>
          <li>
            <button
              className={visibleComponent === "projects" ? "active" : ""}
              onClick={() => setActiveSection("projects")}
            >
              {getButtonText("projects")}
            </button>
          </li>
          <li>
            <button
              className={visibleComponent === "resume" ? "active" : ""}
              onClick={() => setActiveSection("resume")}
            >
              {getButtonText("resume")}
            </button>
          </li>
          <li>
            <button
              className={visibleComponent === "contact" ? "active" : ""}
              onClick={() => setActiveSection("contact")}
            >
              {getButtonText("contact")}
            </button>
          </li>
        </ul>
      </nav>
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
    </>
  );
}
