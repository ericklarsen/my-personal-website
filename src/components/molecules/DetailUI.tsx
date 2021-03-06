import React from "react";
import Image from "next/image";
import { allData } from "../../styles/_variables";

interface Props {
  show: boolean;
  onShow: () => void;
  contentId: number;
}

const DetailUI: React.FC<Props> = ({ show, onShow, contentId }) => {
  const data = allData.filter((item) => item.id === contentId)[0];

  return (
    <div
      className={`w-screen h-screen fixed z-100 px-5 left-0 top-0 animate-fade overflow-y-auto flex flex-col items-center py-20 md:py-32 ${
        !show ? "hidden" : "block"
      }`}
      style={{ background: "rgba(41, 41, 41, 0.85)" }}
    >
      <div
        className="w-5 h-5 fixed object-contain top-8 right-5 cursor-pointer md:top-16 md:right-16 md:w-10 md:h-10 transition-all transform hover:scale-125 hover:rotate-180"
        onClick={onShow}
      >
        <Image src="/img/close.svg" alt="close" width={40} height={40} />
      </div>

      <div className="w-full max-w-5xl flex flex-col items-center">
        {data?.allImages?.map((item, i) => (
          <img key={i} src={item} alt="image" className="mb-10 max-w-full" />
        ))}
      </div>
    </div>
  );
};

export default DetailUI;
