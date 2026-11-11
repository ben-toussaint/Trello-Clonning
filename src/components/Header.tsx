import squares from "../assets/squares.png";
import trello from "../assets/trello icon.png";
import search from "../assets/search.png";
import speaker from "../assets/speaker.png";
import notification from "../assets/notification.png";
import info from "../assets/info.png";

function Header() {
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
          <button className="px-3 py-1 ml-0 m-2 font-sans text-sm font-semibold rounded-sm text-white bg-blue-700">
            Create
          </button>
        </div>
        <div className="flex gap-4.5 items-center">
          <div className="relative group">
            <img
              src={speaker}
              className="h-4 w-4 cursor-pointer object-contain invert"
              alt="Speaker"
            />
            <span className="absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 whitespace-nowrap rounded-sm bg-gray-600 p-1.5 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
              Share your thoughts on trello
            </span>
          </div>

          <img
            src={notification}
            className="h-4 w-4 cursor-pointer object-contain invert"
            alt="Notifications"
          />
          <img
            src={info}
            className="h-4 w-4 cursor-pointer object-contain invert"
            alt="Information"
          />

          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#00a4e5] text-[10px] font-semibold text-white">
            MT
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
