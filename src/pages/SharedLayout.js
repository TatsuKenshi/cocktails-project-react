import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const SharedLayout = () => {
  return (
    <div className="bg-amber-400/20 text-center min-h-screen font-sans">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
