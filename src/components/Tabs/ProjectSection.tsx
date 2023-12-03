import React from "react";

export default function ProjectSection({
  selectedLanguage,
}: {
  selectedLanguage: any;
}) {
  return (
    <section>
      <h1>Projects Section</h1>
      <h2>{selectedLanguage}</h2>
    </section>
  );
}

// import { Portfolio } from "@/types/components.types";
// import { getPortfolio } from "@/utils/getPortfolio";
// import { PortableText } from "@portabletext/react";
// import React from "react";

// export default async function Portfolio() {
//   const portfolio = await getPortfolio();
//   return (
//     <>
//       {portfolio.map((item: Portfolio, index: number) => (
//         <section key={index} className="text-white">
//           <h1>
//             <PortableText value={item.title} />
//           </h1>
//         </section>
//       ))}
//     </>
//   );
// }
