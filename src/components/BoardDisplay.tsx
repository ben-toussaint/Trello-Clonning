import { useState } from "react";
import recently from "../assets/clock.png";
import pink from "../assets/rainbow.svg";
import city from "../assets/city.png";
import rocks from "../assets/Rock mountains.png";

type workspaceDataObj = {
  id: number;
  name: string;
  image: string;
  others: {};
};
function BoardDisplay() {
  //Data for trello
  const [workspace, setworkspace] = useState<workspaceDataObj[]>([
    {
      id: 1,
      name: "Daily task",
      image: pink,
      others: {},
    },
    {
      id: 2,
      name: "My trello",
      image: city,
      others: {},
    },
    {
      id: 2,
      name: "Weekend Activities",
      image: rocks,
      others: {},
    },
  ]);
  //function to create display the trello boards
  function Recentboards(workspace: workspaceDataObj[]) {
    if (workspace[0] !== null) {
      return workspace.map((elt, index) => {
        return (
          <div className="flex items-center gap-5 rounded-2xl shadow-lg">
            <div className="rounded-2xl overflow-hidden">
              <img className="h-30 w-150 " src={elt.image} alt={elt.name} />
              <div className="p-2.5 font-semibold bg-[#2d2e2d]">
                <h3>{elt.name}</h3>
              </div>
            </div>
          </div>
        );
      });
    }
    return <h1>No Recent Cards Available</h1>;
  }
  const recentCards = Recentboards(workspace);
  //function to insert the new trello boards
  return (
    <div className="bg-[#191a1cc5] w-full">
      <div className="flex items-center gap-4 m-8">
        <img src={recently} className="h-7 w-7 invert" alt="recently" />
        <h2 className="font-bold text-xl">Recently viewed</h2>
      </div>
      <div className="flex gap-10 m-10">{recentCards}</div>
    </div>
  );
}

export default BoardDisplay;
