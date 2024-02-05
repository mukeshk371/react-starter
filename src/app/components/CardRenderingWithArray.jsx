import Image from "next/image";
import React from "react";

const CardRenderingWithArray = ({ theme, name, imgSrc, imgAlt }) => {
  return (
    <div className="flex flex-col items-center" style={theme}>
      <h1 className="font-extrabold text-[30px]">{name}</h1>
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={180}
        height={150}
        className="rounded-[16px] my-[20px]"
      />
    </div>
  );
};

export default CardRenderingWithArray;
