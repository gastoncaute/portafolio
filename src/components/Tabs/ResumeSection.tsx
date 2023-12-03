import React from "react";

export default function ResumeSection({
  selectedLanguage,
}: {
  selectedLanguage: any;
}) {
  return (
    <section>
      <h1>Resume Section</h1>
      <h2>{selectedLanguage}</h2>
    </section>
  );
}
