import Image from "next/image";
import React from "react";

const newScientist = {
  theme: {
    backgroundColor: "#fff",
    padding: "20px",
    color: "#000",
    borderRadius: "16px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
};

const CardWithProps = (props) => {
  return (
    <div className="flex flex-col items-center" style={newScientist.theme}>
      <h1 className="font-extrabold text-[30px]">{props.name}</h1>
      <Image
        src={props.imgSrc}
        alt={props.imgAlt}
        width={180}
        height={150}
        className="rounded-[16px] my-[20px]"
      />
      <ul className="pl-[26px] list-outside list-image-[url(/icons/arrow-right.svg)] font-semibold text-[18px]">
        <li>{props.details_1}</li>
        <li>{props.details_2}</li>
        <li>{props.details_3}</li>
      </ul>
    </div>
  );
};

export default CardWithProps;
