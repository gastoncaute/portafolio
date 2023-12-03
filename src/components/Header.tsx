"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };
  const handleOptionClick = (option: any) => {
    setShowDropdown(false);
  };

  return (
    <>
      <div className="main-border-top"></div>
      <div className="dropdown">
        <button onClick={handleDropdownToggle}>Language</button>
        {showDropdown && (
          <ul className="dropdown-content">
            <li>
              <button onClick={() => handleOptionClick("Option 1")}>
                Option 1
              </button>
            </li>
            <li>
              <button onClick={() => handleOptionClick("Option 2")}>
                Option 2
              </button>
            </li>
          </ul>
        )}
      </div>
      <header className="header">
        <nav>
          <ul>
            <li className="home-li">
              <Link href={"/"}>
                <svg
                  className="header-svg"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                  <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                href={"https://www.linkedin.com/in/gaston-cauteruccio/"}
                target="#"
              >
                <svg
                  className="header-svg"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                  <path d="M8 11l0 5" />
                  <path d="M8 8l0 .01" />
                  <path d="M12 16l0 -5" />
                  <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                </svg>
              </Link>
            </li>
            <li>
              <Link href={"https://github.com/gastoncaute"} target="#">
                <svg
                  className="header-svg"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
              </Link>
            </li>
            <li>
              <Link href={"mailto:gastoncaute@gmail.com"} target="#">
                <svg
                  className="header-svg"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                  <path d="M3 7l9 6l9 -6" />
                </svg>
              </Link>
            </li>
          </ul>
        </nav>
        {/* <style jsx>{`
        header {
          background: black;
          width: 100%;
          height: 5rem;
        }

        header nav {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
        }

        header nav ul {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: end;
          list-style: none;
          margin-left: 1rem;
          margin-right: 2rem;
        }

        .home-li {
          margin-right: auto;
        }

        header nav ul li {
          margin: 1rem;
        }
      `}</style> */}
      </header>
      <div className="main-border-bottom"></div>
    </>
  );
}
