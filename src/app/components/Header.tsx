/* eslint-disable @next/next/no-img-element */
import React from "react";

type Props = {
  title: string;
  instructor: string;
};

const Header = ({ title, instructor }: Props) => {
  return (
    <div className="h-[35vh] bg-gray-400 bg-[url('https://www.templepurohit.com/wp-content/uploads/2013/08/Lord-Kirshna_compressed_compressed.jpg')] bg-cover">
      <div className="bg-[#0000007b] w-full h-full flex flex-col justify-end items-start p-5 pb-8">
        <h2 className="text-white font-medium mb-1">{instructor}</h2>
        <h1 className="text-white text-4xl font-medium w-[65%] leading-2">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Header;
