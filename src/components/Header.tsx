import squares from "../assets/squares.png";
import trello from "../assets/trello icon.png";
import search from "../assets/search.png";
import speaker from "../assets/speaker.png";
import notification from "../assets/notification.png";
import info from "../assets/info.png";
import board from "../assets/board.png";
import template from "../assets/template.png";
import { useState } from "react";
import { iconNames } from "lucide-react/dynamic";

interface Descriptions {
  [key: string]: string;
}

function Header() {
  //function to display the floating popup for suggestions.
  const [isShown, setIsShown] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  function floatingSuggestion() {
    return (
      <div className="absolute flex flex-col gap-3 rounded-2xl bg-gray-500 p-3 text-xs">
        <div className="p-2 hover:bg-[#0f0f0f53] transition-colors cursor-pointer">
          <div className="flex gap-3 font-semibold items-center">
            <img src={board} className="invert w-3 h-3" alt="board" />
            <h3>Create board</h3>
          </div>
          <p>
            A board is made up of cards ordered on lists. Use to manage
            projects, track information, or organize anything
          </p>
        </div>
        <hr />
        <div className="p-2 hover:bg-[#0f0f0f53] transition-colors cursor-pointer">
          <div className="flex font-semibold gap-3 items-center">
            <img src={template} className="invert w-3 h-3" alt="template" />
            <h3>Start with a Template</h3>
          </div>
          <p>Get started faster with a board template</p>
        </div>
      </div>
    );
  }
  function handleClick() {
    if (isShown == true) {
      setIsShown(false);
      return;
    }
    setIsShown(true);
  }
  //working on the floating Description
  const descriptions = {
    share: "Share your thoughts on trello",
    notification: "Notification",
    information: "Information",
    account: "Account",
  };

  function floatingDescription(iconNames, descriptions: Descriptions) {
    return (
      <span className="absolute bg-gray-300 p-2 rounded-2xl text-xs w-max flex items-center justify-center ml-[-90px] mt-2">
        {descriptions[iconNames]}
      </span>
    );
  }
  // const floatingDescriptionDisplay = floatingDescription(descriptions);
  function handleHover(iconName: string | null) {
    setHoveredIcon(iconName);
  }

  return (
    <header className="flex items-center justify-between bg-[#1d1d1f] px-4 py-3 text-white shadow-sm">
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center rounded-sm hover:bg-white/5"
          aria-label="Application menu"
        >
          <img
            src={squares}
            className="h-4 w-4 object-contain invert"
            alt="Squares"
          />
        </button>
        <div className="flex items-center gap-2">
          <img
            src={trello}
            className="h-6 w-6 object-contain"
            alt="Trello icon"
          />
        </div>
      </div>
      <div className="flex items-center gap-2 ml-auto mr-2.5">
        <div className="flex gap-3">
          <div className="flex items-center gap-2 px-2 py-1 ml-3 m-2 mr-0 font-sans text-sm rounded-sm border-white border border-solid focus:border-blue-700">
            <img src={search} className="invert h-4 w-4" alt="search" />{" "}
            <input
              type="text"
              className="focus:outline-none max-w-185 min-w-185"
              placeholder="Search"
              name="Search"
            />
          </div>
          <div>
            <button
              onClick={handleClick}
              className="px-3 py-1 ml-0 m-2 font-sans text-sm font-semibold rounded-sm text-white bg-blue-700"
            >
              Create
            </button>
            {isShown && floatingSuggestion()}
          </div>
        </div>

        {
          //Left side icons arrangment
        }
        <div className="flex gap-4.5 items-center">
          {
            //Speaker
          }
          <div
            onMouseEnter={() => handleHover("share")}
            onMouseLeave={() => handleHover(null)}
            className="relative"
          >
            <img
              src={speaker}
              className="h-4 w-4 cursor-pointer object-contain invert"
              alt="Speaker"
            />
            {iconNames && floatingDescription("share", descriptions)}
          </div>
          {
            //notification
          }
          <div
            onMouseEnter={() => handleHover("notification")}
            onMouseLeave={() => handleHover(null)}
          >
            <img
              src={notification}
              className="h-4 w-4 cursor-pointer object-contain invert"
              alt="Notifications"
            />
            {isHovered && floatingDescription("notification", descriptions)}
          </div>
          {
            //information
          }
          <div
            onMouseEnter={() => handleHover("information")}
            onMouseLeave={() => handleHover(null)}
          >
            <img
              src={info}
              className="h-4 w-4 cursor-pointer object-contain invert"
              alt="Information"
            />
            {isHovered && floatingDescription("information", descriptions)}
          </div>
          {
            //account
          }
          <div
            onMouseEnter={() => handleHover("account")}
            onMouseLeave={() => handleHover(null)}
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#00a4e5] text-[10px] font-semibold text-white">
              MT
            </div>
            {isHovered && floatingDescription("account", descriptions)}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
