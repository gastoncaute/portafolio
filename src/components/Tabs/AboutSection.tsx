"use client";
import { About } from "@/types/components.types";
import { PortableText } from "@portabletext/react";
import React, { useState, useEffect } from "react";

export default function AboutSection({
  selectedLanguage,
}: {
  selectedLanguage: any;
}) {
  const [aboutData, setAboutData] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://ouy7dg4a.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27about%27%5D"
        );
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        const data = await response.json();
        setAboutData(data.result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const filteredAboutData = aboutData?.filter(
    (item: About) => item.language === selectedLanguage
  );
  const getTitlesText =
    selectedLanguage === "Spanish"
      ? ["Bienvenido a Mi Portafolio", "Educación"]
      : ["Welcome", "Education"];

  return (
    <>
      {aboutData && (
        <section className="tabs-sections">
          {filteredAboutData.map((item: About) => (
            <article key={item._id} className="about-article">
              <h1>
                {getTitlesText[0]}
                <p className="about-article-p">
                  <PortableText value={item.description} />
                </p>
              </h1>
              <h2>
                {getTitlesText[1]}
                <p className="about-article-p">
                  <PortableText value={item.education} />
                </p>
              </h2>
            </article>
          ))}
        </section>
      )}
    </>
  );
}
