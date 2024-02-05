import React from "react";
import Card from "./Card";
import CardWithProps from "./CardWithProps";
import { scientistsList } from "@/utils/data";
import CardRenderingWithArray from "./CardRenderingWithArray";

const CardList = ({ data }) => (
  <>
    {data.map((item, index) => (
      <CardRenderingWithArray
        key={index}
        name={item.name}
        theme={item.theme}
        imgSrc={item.imgSrc}
        imgAlt={item.imgAlt}
      />
    ))}
  </>
);

export const Gallery = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-[20px] p-[20px]">
        <Card />
        <CardWithProps
          name="Dr. Vikram Sarabhai"
          imgSrc="https://cdn.britannica.com/98/239498-050-C61D39D6/Vikram-Sarabhai-Indian-physicist-and-industrialist.jpg"
          imgAlt="Vikram Sarabhai"
          details_1="Indian physicist and astronomer"
          details_2="father of the Indian Space programme"
          details_3="Who initiated space research and helped to develop nuclear power in India"
        />
        <CardList data={scientistsList} />
      </div>
    </>
  );
};

export default Gallery;
