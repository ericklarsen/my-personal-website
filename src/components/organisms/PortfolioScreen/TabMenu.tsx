import React from "react";

interface Props {
  setCurrentTab: (tab: string) => void;
  currentTab: string;
}

const TabMenu: React.FC<Props> = ({ setCurrentTab, currentTab }) => {
  return (
    <div className="flex flex-shrink-0 justify-center">
      <div className="mr-8 cursor-pointer" onClick={() => setCurrentTab("uiux")}>
        <h6 className="font-mont-bold text-white text-lg">UI/UX</h6>
        {currentTab === "uiux" && (
          <div className="w-10 h-1 bg-maroon mt-0.5 float-right animate-fade"></div>
        )}
      </div>
      <div className="cursor-pointer" onClick={() => setCurrentTab("web")}>
        <h6 className="font-mont-bold text-white text-lg">Web Projects</h6>
        {currentTab === "web" && (
          <div className="w-10 h-1 bg-maroon mt-0.5 float-right animate-fade"></div>
        )}
      </div>
    </div>
  );
};

export default TabMenu;
