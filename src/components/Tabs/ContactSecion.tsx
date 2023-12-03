import React from "react";

export default function ContactSecion({
  selectedLanguage,
}: {
  selectedLanguage: any;
}) {
  return (
    <section>
      <h1>Contact Section</h1>
      <h2>{selectedLanguage}</h2>
    </section>
  );
}
