import Image from "next/image";
import React from "react";

const CardRenderingWithArray = ({ theme, name, imgSrc, imgAlt, detail1, detail2, detail3 }) => {
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
      <ul className="pl-[26px] list-outside list-image-[url(/icons/arrow-right.svg)] font-semibold text-[18px]">
        <li>{detail1}</li>
        <li>{detail2}</li>
        <li>{detail3}</li>
      </ul>
    </div>
  );
};

export default CardRenderingWithArray;
