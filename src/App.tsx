import Header from "./components/Header.tsx";
import "./App.css";
import Sidebar from "./components/Sidebar.tsx";
import BoardDisplay from "./components/BoardDisplay.tsx";

function App() {
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="flex">
        <Sidebar />
        <BoardDisplay />
      </div>
    </div>
  );
}

export default App;
