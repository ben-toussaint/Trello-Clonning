import board from "../assets/board.png";
import template from "../assets/template.png";
import home from "../assets/heart beat.png";
import T from "../assets/T.png";
import dropdown from "../assets/drop.png";

function Sidebar() {
  return (
    <div className="flex flex-col gap-10 bg-[#191a1c] h-screen w-76">
      <div className="flex flex-col gap-3 mt-12 ml-10">
        <div className="flex gap-2.5 items-center ">
          <img src={board} className="invert w-5 h-4" alt="board-icon" />
          <span className="text-sm font-semibold">Boards</span>
        </div>
        <div className="flex gap-2.5 items-center">
          <img src={template} className="invert w-5 h-4" alt="template-icon" />
          <span className="text-sm font-semibold">Template</span>
        </div>
        <div className="flex gap-2.5 items-center">
          <img src={home} className="invert w-5 h-4" alt="home-icon" />
          <span className="text-sm font-semibold">Home</span>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-3 ml-10 gap-2.5">
          <div>
            <h2 className="font-semibold text-sm">Workspaces</h2>
          </div>
          <div className="flex gap-2.5 items-center">
            <img src={T} className="w-6 h-6" alt="T" />
            <span className=" font-semibold">Trello Workspace</span>
            <button className="flex item-center">
              <img src={dropdown} className="ml-11 w-8 h-8 invert" alt="Drop" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
