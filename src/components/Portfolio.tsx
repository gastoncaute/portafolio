import { Portfolio } from "@/types/components.types";
import { getPortfolio } from "@/utils/getPortfolio";
import { PortableText } from "@portabletext/react";
import React from "react";

export default async function Portfolio() {
  const portfolio = await getPortfolio();
  return (
    <>
      {portfolio.map((item: Portfolio, index: number) => (
        <section key={index} className="text-white">
          <h1>
            <PortableText value={item.title} />
          </h1>
        </section>
      ))}
    </>
  );
}
