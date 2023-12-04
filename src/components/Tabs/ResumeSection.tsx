"use client";
import { About } from "@/types/components.types";
import { PortableText } from "@portabletext/react";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { modifyImageUrl } from "@/utils/modifyImageUrl";

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

  return (
    <section>
      <h1>Resume Section</h1>
      {aboutData && (
        <>
          {filteredAboutData.map((item: About) => (
            <section key={item._id}>
              <h2>Lenuguaje seleccionado: {selectedLanguage}</h2>
              <h1>Lenuguaje: {item.language}</h1>
              <h2>
                <PortableText value={item.resume.resume_link} />
                <Image
                  src={modifyImageUrl(item.resume.resume_image.asset._ref)}
                  alt="Resume"
                  height={1000}
                  width={500}
                />
              </h2>
            </section>
          ))}
        </>
      )}
    </section>
  );
}
