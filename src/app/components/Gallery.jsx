import React from "react";
import Card from "./Card";

export const Gallery = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-[20px] p-[20px]">
        <Card />
      </div>
    </>
  );
};

export default Gallery;
