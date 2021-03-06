import * as React from "react";
import Image from "next/image";

interface Props {
  children: React.ReactNode;
  show: boolean;
  onShow: () => void;
}

const BottomSheet: React.FC<Props> = ({ children, show, onShow }) => {
  const [triggerShow, setTriggerShow] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (show) {
      setTriggerShow(true);
    } else {
      setTimeout(() => {
        setTriggerShow(false);
      }, 510);
    }
  }, [show]);

  if (triggerShow) {
    return (
      <>
        <div
          className={`md:hidden w-screen h-screen fixed z-50 left-0 top-0 ${
            show ? "animate-fade" : "animate-fade-out"
          }`}
          style={{ background: "rgba(41, 41, 41, 0.85)" }}
        ></div>
        <div
          className={`md:hidden w-screen fixed h-content p-12 pt-16 bg-white bottom-0 left-0 z-100 rounded-t-3xl bg-gradient-to-b from-dark-200  to-dark-500 ${
            show ? "animate-bottomsheet" : "animate-bottomsheet-out"
          }`}
          style={{ borderTop: `1px solid rgba(255, 255, 255, 0.17)` }}
        >
          <div
            className="absolute h-1 w-28 bg-white opacity-10 m-auto top-4 left-1/2"
            style={{ marginLeft: "-55px" }}
          ></div>
          <div className="absolute right-4 top-4 w-7 h-7" onClick={onShow}>
            <Image src="/img/close.svg" alt="close" width={28} height={28} />
          </div>
          {children}
        </div>
      </>
    );
  }

  return <div></div>;
};

export default BottomSheet;
