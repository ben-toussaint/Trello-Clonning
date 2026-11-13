import board from "../assets/board.png";
import template from "../assets/template.png";
import home from "../assets/heart beat.png";
import T from "../assets/T.png";
import dropdown from "../assets/drop.png";
import { useState } from "react";
import { Users, Columns3, Plus, Settings } from "lucide-react";
import BoardDisplay from "./BoardDisplay";
import TemplateDisplay from "./TemplateDisplay";
import HomeDisplay from "./HomeDisplay";

interface SidebarProps {
  toAnswer: (choice: React.ElementType | undefined) => void;
}

function Sidebar({ toAnswer }: SidebarProps) {
  const [TisShown, setTIsShown] = useState({ isActive: false, isShown: false });
  const choicesToDisplay = [BoardDisplay, TemplateDisplay, HomeDisplay];
  const [activeMainChoice, setActiveMainChoice] = useState<
    (boolean | undefined)[]
  >([undefined, undefined, undefined]);

  function handleMainSelect(index: number) {
    setActiveMainChoice([index === 0, index === 1, index === 2]);
    toAnswer(choicesToDisplay[index]);
  }

  function tDisplay() {
    return (
      <div className="absolute rounded-2xl flex flex-col gap-3 mt-54 w-auto">
        <div className="flex gap-2.5 items-center w-63 p-3 pl-6 rounded-xl hover:bg-[#18427954]">
          <Columns3 size={15} />
          <span className="text-sm font-semibold">Boards</span>
        </div>
        <div className="flex gap-2.5 items-center w-63 p-3 pl-6 rounded-xl hover:bg-[#18427954]">
          <Users size={15} />
          <span className="text-sm font-semibold">Members</span>
          <Plus className="ml-auto" size={15} />
        </div>
        <div className="flex gap-2.5 items-center w-63 p-3 pl-6 rounded-xl hover:bg-[#18427954]">
          <Settings size={15} />
          <span className="text-sm font-semibold">Settings</span>
        </div>
      </div>
    );
  }

  function handleTClick() {
    if (TisShown.isShown == true) {
      setTIsShown({ isActive: false, isShown: false });
      return;
    }
    setTIsShown({ isActive: true, isShown: true });
  }

  return (
    <div className="flex flex-col gap-10 bg-[#191a1c] h-screen w-[310px]">
      <div className="flex flex-col gap-2 mt-12 ml-10">
        <div
          onClick={() => handleMainSelect(0)}
          className={`flex gap-2.5 items-center w-65 rounded-xl p-2 cursor-pointer transition-colors ${
            activeMainChoice[0] ? "bg-[#18427954]" : "hover:bg-[#18427954]"
          }`}
        >
          <img src={board} className="invert w-5 h-4" alt="board-icon" />
          <span className="text-sm font-semibold">Boards</span>
        </div>
        <div
          onClick={() => handleMainSelect(1)}
          className={`flex gap-2.5 items-center w-65 rounded-xl p-2 cursor-pointer transition-colors ${
            activeMainChoice[1] ? "bg-[#18427954]" : "hover:bg-[#18427954]"
          }`}
        >
          <img src={template} className="invert w-5 h-4" alt="template-icon" />
          <span className="text-sm font-semibold">Template</span>
        </div>
        <div
          onClick={() => handleMainSelect(2)}
          className={`flex gap-2.5 items-center w-65 rounded-xl p-2 cursor-pointer transition-colors ${
            activeMainChoice[2] ? "bg-[#18427954]" : "hover:bg-[#18427954]"
          }`}
        >
          <img src={home} className="invert w-5 h-4" alt="home-icon" />
          <span className="text-sm font-semibold">Home</span>
        </div>
      </div>
      <div>
        <hr className=" mb-8 mx-8 opacity-40"></hr>
        <div className="flex flex-col gap-3 ml-10 gap-2.5">
          <div>
            <h2 className="font-semibold text-sm">Workspaces</h2>
          </div>
          <div
            onClick={handleTClick}
            className={`relative flex gap-2.5 items-center w-65 rounded-2xl p-2 cursor-pointer transition-colors ${
              TisShown.isActive ? "bg-[#18427954]" : "hover:bg-[#18427954]"
            }`}
          >
            <img src={T} className="w-6 h-6" alt="T" />
            <span className=" font-semibold">Trello Workspace</span>
            <button className="flex item-center">
              <img src={dropdown} className="ml-11 w-8 h-8 invert" alt="Drop" />
            </button>
            {TisShown.isShown && tDisplay()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
