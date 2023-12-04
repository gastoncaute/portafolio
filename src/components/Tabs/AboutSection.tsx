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
        setAboutData(data.result); // Assuming there is only one result
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <h1>About Section</h1>
      {aboutData && (
        <>
          <h2>{selectedLanguage}</h2>
          {aboutData.map((item: About) => (
            <section key={item._id}>
              <h1>{item.lenguage}</h1>
              <h1>
                <PortableText value={item.description} />
              </h1>
              <h2>
                <PortableText value={item.skills} />
              </h2>
              <h3>
                <PortableText value={item.education} />
              </h3>
            </section>
          ))}
        </>
      )}
    </section>
  );
}
