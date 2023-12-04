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
    <>
      {contactData && (
        <section className="tabs-sections">
          {filteredContactData.map((item: Contact) => (
            <article key={item._id} className="contact-article">
              <h2>{item.social_network}</h2>
              <Image
                src={modifyImageUrl(item.social_image.asset._ref)}
                alt={item.social_network}
                height={1000}
                width={350}
              />{" "}
            </article>
          ))}
        </section>
      )}
    </>
  );
}
