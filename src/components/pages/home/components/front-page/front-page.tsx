import React from "react";
import Button from "@/components/ui/button/button";

export default function FrontPage() {
  return (
    <div className="h-screen flex justify-between">
      <div className="pt-[30vh] pl-8">
        <p className="font-lateef text-orange-300 text-5xl z-20 leading-none ml-2">
          creative
        </p>
        <p className="font-bigShouldersText text-[250px] text-white z-20 relative font-600 leading-none tracking-[-8px]">
          Designer
          <span className="font-bigShouldersText text-4xl text-yellow-100 relative font-600 z-60">
            &
          </span>
        </p>
        <p className="font-bigShouldersText text-[250px] text-white z-20 relative font-600 leading-tight tracking-[-8px]">
          Developer
        </p>
      </div>
      <div className="w-[35%] pt-[10vh] pr-8 flex flex-col gap-4 items-end">
        <div className="flex gap-4 items-center mb-[200px] mr-[100px]">
          <p className="font-lateef text-white text-[300px] leading-none">02</p>
          <div>
            <p className="font-bigShouldersText text-white text-4xl">march</p>
            <p className="font-lexend font-normal text-lg text-white leading-none">
              available
              <br />
              for work
            </p>
          </div>
        </div>
        <p className="text-white font-lexend font-normal text-3xl">
          I AM A WEB DEVELOPER BASED IN NEPAL. I HAVE MANY YEARS OF EXPERIENCE
          IN CREATING WEBSITES/WEB APPLICATIONS. I LOVE NATURE, BUGGERS AND ART.
        </p>
        <Button>Contact Me</Button>
      </div>
    </div>
  );
}
