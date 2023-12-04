"use client";
import { Contact } from "@/types/components.types";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { modifyImageUrl } from "@/utils/modifyImageUrl";

export default function AboutSection({
  selectedLanguage,
}: {
  selectedLanguage: any;
}) {
  const [contactData, setContactData] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://ouy7dg4a.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27contact%27%5D"
        );
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        const data = await response.json();
        setContactData(data.result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const filteredContactData = contactData?.filter(
    (item: Contact) => item.language === selectedLanguage
  );

  return (
    <section>
      <h1>Contact Section</h1>
      {contactData && (
        <>
          {filteredContactData.map((item: Contact) => (
            <section key={item._id}>
              <h2>Lenuguaje seleccionado: {selectedLanguage}</h2>
              <h1>Lenuguaje: {item.language}</h1>
              <h2>
                {item.social_network}
                {item.social_link}
                <Image
                  src={modifyImageUrl(item.social_image.asset._ref)}
                  alt={item.social_network}
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
