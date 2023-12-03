import React from "react";

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
