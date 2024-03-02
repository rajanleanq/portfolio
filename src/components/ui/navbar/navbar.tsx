import React from "react";

export const NavItems = ({ name }: { name: string }) => {
  return (
    <p className="font-lexend text-white cursor-pointer hover:underline hover:duration-300 hover:ease-in-out hover:transition-all">
      {name}
    </p>
  );
};
export default function Navbar({ navState }: { navState: boolean }) {
  return (
    <div
      className={
        !navState
          ? "fixed w-[100%]   z-50 top-0 flex items-center justify-between p-6 border-b border-white backdrop-blur-lg px-16 left-1/2 transform -translate-x-1/2 "
          : "fixed top-0 w-[95%] flex items-center justify-between p-6 border-b border-white left-1/2 transform -translate-x-1/2 "
      }
    >
      <div className="flex items-center gap-4">
        <p className="text-xl font-lateef  text-white font-semibold cursor-pointer">
          Rajan Raj Shah
        </p>
        <p className="text-lg font-lexend text-white">
          Frontend Developer, Backend Developer
        </p>
      </div>
      <div className="flex items-center gap-4">
        <NavItems name="work" />
        <NavItems name="contact" />
      </div>
    </div>
  );
}
