import React from "react";
import { Search } from "lucide-react";

function TemplateDisplay() {
  return (
    <div className="w-full mt-10 mx-10">
      <div className="flex justify-between gap-4  items-center">
        <h1 className="font-bold text-2xl text-[#cfcfcf]">
          Featured Categories
        </h1>{" "}
        <div className="flex items-center gap-2">
          <input type="text" placeholder="Find template" className="p-2" />
          {<Search />}
        </div>
      </div>
      <div className="font-bold text-7xl flex justify-center m-10 mt-20 ">
        More Content Goes Here..
      </div>
    </div>
  );
}

export default TemplateDisplay;
