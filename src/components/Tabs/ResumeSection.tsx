"use client";
import { About } from "@/types/components.types";
import Link from "next/link";
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
    <>
      {aboutData && (
        <section className="tabs-sections">
          {filteredAboutData.map((item: About) => (
            <article key={item._id}>
              <Link href={item.resume.resume_link} target="#">
                <Image
                  src={modifyImageUrl(item.resume.resume_image.asset._ref)}
                  alt="Resume"
                  height={1000}
                  width={350}
                />
              </Link>
            </article>
          ))}
        </section>
      )}
    </>
  );
}
