"use client";
import Header from "@/components/Header";
import Tabs from "@/components/Tabs/Tabs";
import { useState } from "react";

export default function Home() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Spanish");

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };
  const handleOptionClick = (option: any) => {
    setShowDropdown(false);
    setSelectedLanguage(option);
  };

  return (
    <main className="main">
      <div className="main-border-top"></div>
      <div className="dropdown">
        <button onClick={handleDropdownToggle}>Language</button>
        {showDropdown && (
          <ul className="dropdown-content">
            <li>
              <button onClick={() => handleOptionClick("Spanish")}>
                Spanish
              </button>
            </li>
            <li>
              <button onClick={() => handleOptionClick("English")}>
                English
              </button>
            </li>
          </ul>
        )}
      </div>
      <Header />
      <Tabs selectedLanguage={selectedLanguage} />
      <div className="main-border-bottom"></div>
    </main>
  );
}
