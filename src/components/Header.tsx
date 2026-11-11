import squares from "../assets/squares.png";
import trello from "../assets/trello icon.png";
import search from "../assets/search.png";
import speaker from "../assets/speaker.png";
import notification from "../assets/notification.png";
import info from "../assets/info.png";
function Header() {
  return (
    <div className="flex items-center text-white bg-gray-800">
      <div className="flex gap-3 m-3.5 items-center">
        <img
          src={squares}
          className="invert h-4 w-4 font-bold object-contain"
          alt="Squares"
        />
        <div className="flex gap-3 m-3.5 items-center">
          <img
            src={squares}
            className="invert h-4 w-4 font-bold object-contain"
            alt="Squares"
          />
          <img
            src={trello}
            className="h-6 w-6 object-contain"
            alt="Trello-icon"
          />
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
                className="invert h-4 w-4 object-contain"
                alt="speaker"
              />

              <span className="text-xs z-50 absolute text-white font-sans bg-gray-600 p-1.5 rounded-sm ml-[-6%] mt-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Share your thoughts on trello
              </span>
            </div>
            <div>
              <img
                src={notification}
                className="invert h-4 w-4 object-contain"
                alt="notification"
              />
              {/* <span className="text-xs absolute text-white font-sans bg-gray-600 p-1.5 rounded-sm ml-[-6%] mt-2">
              Notifications
            </span> */}
            </div>
            <div>
              <img
                src={info}
                className=" invert w-4 h-4 object-contain"
                alt="info"
              />
              <img
                src={info}
                className=" invert w-4 h-4 object-contain"
                alt="info"
              />
              {/* <span className="text-xs absolute text-white font-sans bg-gray-600 p-1.5 rounded-sm ml-[0%] mt-2">
              Information
            </span> */}
            </div>
            <div className="rounded-[50%] p-1 font-semibold bg-[#00a4e5]">
              <h1 className="text-xs">MT</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
