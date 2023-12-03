import React from "react";
// import { client } from "@/utils/configSanity";
// import { About } from "@/types/components.types";
// import { PortableText } from "@portabletext/react";

// async function getAboutData() {
//   const query = `*[_type == 'about']`;
//   const data = await client.fetch(query);
//   return data as About[];
// }

// const aboutSection = async ({
//   selectedLanguage,
// }: {
//   selectedLanguage: any;
// }) => {
//   const data = (await getAboutData()) as About[];
//   return (
//     <section>
//       {data?.map((item) => (
//         <section key={item._id}>
//           <h1>
//             <PortableText value={item.description} />
//           </h1>
//           <h2>
//             <PortableText value={item.education} />
//           </h2>
//         </section>
//       ))}
//     </section>
//   );
// };

// export default aboutSection;

export default function AboutSection({
  selectedLanguage,
}: {
  selectedLanguage: any;
}) {
  return (
    <section>
      <h1>About Section</h1>
      <h2>{selectedLanguage}</h2>
    </section>
  );
}
