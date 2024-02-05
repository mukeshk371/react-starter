import React from "react";
import Gallery from "./components/Gallery";
import ConditionallyReturningList from "./components/ConditionallyReturningJSX";

export default function Home() {
  return (
    <>
      <Gallery />
      <ConditionallyReturningList/>
    </>
  );
}
