import Image from "next/image";

const person = {
  name: "Dr. Homi Jehangir Bhabha",
  imgSrc:
    "https://www.robolab.in/wp-content/uploads/2017/12/Homi-J.-Bhabha.gif",
  imgAlt: "Homi J Bhabha",
  imgWidth: 180,
  imgHeight: 150,
  theme: {
    backgroundColor: "#fff",
    padding: "20px",
    color: "#000",
    borderRadius: "16px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
  }
};

export default function Card() {
  return (
    <div style={person.theme} className="flex flex-col items-center">
      <h1 className="font-extrabold text-[30px]">{person.name}</h1>
      <Image
        src={person.imgSrc}
        alt={person.imgAlt}
        width={person.imgWidth}
        height={person.imgHeight}
        className="rounded-[16px] my-[20px]"
      />
      <ul className="pl-[26px] list-outside list-image-[url(../../public/icons/arrow-right.svg)] font-semibold text-[18px]">
        <li>Indian nuclear physicist </li>
        <li>Who is widely credited as the "father of the Indian nuclear programme". </li>
        <li>Compton scattering, R-process, and the advancement of nuclear physics.</li>
      </ul>
    </div>
  );
}
