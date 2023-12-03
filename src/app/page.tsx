"use client";
import Header from "@/components/Header";
import Tabs from "@/components/Tabs/Tabs";
import { useState } from "react";

export default function Home() {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };
  const handleOptionClick = (option: any) => {
    setShowDropdown(false);
  };

  return (
    <main className="main">
      <div className="main-border-top"></div>
      <div className="dropdown">
        <button onClick={handleDropdownToggle}>Language</button>
        {showDropdown && (
          <ul className="dropdown-content">
            <li>
              <button onClick={() => handleOptionClick("spanish")}>
                Spanish
              </button>
            </li>
            <li>
              <button onClick={() => handleOptionClick("english")}>
                English
              </button>
            </li>
          </ul>
        )}
      </div>
      <Header />
      <Tabs />
      <div className="main-border-bottom"></div>
    </main>
  );
}
