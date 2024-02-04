import Image from "next/image";
import React from "react";

export const Profile = () => {
  return (
    <>
      <div>
        <Image
          src="https://www.robolab.in/wp-content/uploads/2017/12/Homi-J.-Bhabha.gif"
          alt="Homi J Bhabha"
          width={500}
          height={300}
        />
      </div>
    </>
  );
};

export default Profile;
