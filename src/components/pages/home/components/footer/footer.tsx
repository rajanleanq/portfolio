import Button from "@/components/ui/button/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const interested_about: Array<string> = [
    "frontend Development",
    "backend Development",
    "New technologies",
    "crypto",
    "Startups",
    "new businesses",
    "Burgers",
  ];
  return (
    <div className="h-screen relative">
      <div className="absolute bottom-4 left-8 flex items-end">
        <div>
          <p className="font-bigShouldersText text-[250px] text-white z-20 relative font-600 leading-none tracking-[-8px]">
            Let's
          </p>
          <p className="font-bigShouldersText text-[250px] text-white z-20 relative font-600 leading-tight tracking-[-8px]">
            Connect
          </p>
        </div>
        <div className="m-12 flex flex-col gap-24">
          <div className="flex flex-col gap-4">
            <p className="font-lexend text-2xl text-white">
              I'M ALWAYS INTERESTED ABOUT
            </p>
            <div className="flex flex-wrap gap-4">
              {interested_about.map((item: string) => (
                <Button key={item}>{item}</Button>
              ))}
            </div>
          </div>
          <div>
            <div className="border-b border-white flex flex-row w-full items-center gap-4 py-6">
              <p className="uppercase text-white text-2xl font-lexend">
                ARE YOU MINDING A PROJECT?
              </p>
              <Button>Contact Me</Button>
            </div>
            <div className="mt-6 flex justify-between">
              <div className="flex flex-row gap-4 ">
                <Link
                  className="uppercase text-white text-xl font-lexend"
                  href={"https://www.linkedin.com/in/rajan-raj-shah-23b2ab17a/"}
                  target="_blank"
                >
                  LinkdIn
                </Link>
                <Link
                  className="uppercase text-white text-xl font-lexend"
                  href="https://www.facebook.com/Rajanshah8"
                  target="_blank"
                >
                  Facebook
                </Link>
                <Link
                  className="uppercase text-white text-xl font-lexend"
                  href={"https://www.instagram.com/rajan_raj_shah/"}
                  target="_blank"
                >
                  Instagram
                </Link>
                <Link
                  className="uppercase text-white text-xl font-lexend"
                  href={"https://github.com/rajan2023"}
                  target="_blank"
                >
                  Github
                </Link>
              </div>
              <p className="text-white text-sm font-semibold">@2024 Copyright Rajan Raj Shah</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
