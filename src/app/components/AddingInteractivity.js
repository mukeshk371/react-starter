import React from "react";

const ServerButton = () => {
  return (
    <div>
      <button>Click Me!</button>
    </div>
  );
};

const AddingInteractivity = () => {
  const handleClick = () => {
    console.log("Button Clicked");
  };

  return (
    <ServerButton>
      <button onClick={handleClick}>Click Me!</button>
    </ServerButton>
  );
};

export default AddingInteractivity;
