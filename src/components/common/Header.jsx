import React from "react";
import { Topbar } from "./Topbar";
import { Midbar } from "./Midbar";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-white shadow-sm">
      
      {/* Topbar */}
      <Topbar />

      {/* Middle Bar */}
      <Midbar />

      {/* Navbar */}
      <Navbar />

    </header>
  );
};