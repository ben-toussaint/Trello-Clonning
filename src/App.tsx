import Header from "./components/Header.tsx";
import "./App.css";
import Sidebar from "./components/Sidebar.tsx";
import { useState } from "react";
import BoardDisplay from "./components/BoardDisplay.tsx";

function App() {
  const [currentDisplay, setCurrentDisplay] = useState<React.ReactNode>(
    <BoardDisplay />,
  );

  function handleDisplay(ToDisplay: React.ElementType | undefined) {
    if (ToDisplay) {
      setCurrentDisplay(<ToDisplay />);
    }
  }

  return (
    <div className="overflow-hidden">
      <Header />
      <div className="flex">
        <Sidebar toAnswer={handleDisplay} />
        {currentDisplay}
      </div>
    </div>
  );
}

export default App;
