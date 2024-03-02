"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/ui/navbar/navbar";
import Footer from "./components/footer/footer";
import FrontPage from "./components/front-page/front-page";

export default function HomePage() {
  const [navState, setNavState] = useState<boolean>(false);
  const scrollHandler = () => {
    const position: any = window.pageYOffset;
    setNavState(true);
    if (parseInt(position) > 95) {
      setNavState(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, { passive: true });
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <div className="w-screen h-max bg-hero-image bg-cover bg-center overflow-y-scroll">
      <Navbar navState={navState} />
      <FrontPage />
      <Footer />
    </div>
  );
}
