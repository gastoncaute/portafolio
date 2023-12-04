"use client";
import { Project } from "@/types/components.types";
import { PortableText } from "@portabletext/react";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { modifyImageUrl } from "@/utils/modifyImageUrl";

export default function AboutSection({
  selectedLanguage,
}: {
  selectedLanguage: any;
}) {
  const [projectData, setProjectData] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://ouy7dg4a.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27projects%27%5D"
        );
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        const data = await response.json();
        setProjectData(data.result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const filteredProjectData = projectData?.filter(
    (item: Project) => item.language === selectedLanguage
  );

  return (
    <>
      {projectData && (
        <section className="tabs-sections">
          {filteredProjectData.map((item: Project) => (
            <article key={item._id} className="projects-article">
              <h1>
                <PortableText value={item.title} />
              </h1>
              <Link href={item.page_link} target="#">
                <Image
                  src={modifyImageUrl(item.main_image.image.asset._ref)}
                  alt={item.main_image.epigraph}
                  height={1000}
                  width={500}
                />
              </Link>
              <h2>
                <PortableText value={item.description} />
              </h2>
            </article>
          ))}
        </section>
      )}
    </>
  );
}
