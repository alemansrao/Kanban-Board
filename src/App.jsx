import React from "react";
import "./App.css";
import Board from "./Components/Board/Board";
const App = () => {
  return (
    <div className="App h-screen w-screen flex flex-col">
      <div className="app_navbar flex w-full p-5 border-4 border-solid">
        <h1 className="font-bold font-sans">Kanban Board</h1>
      </div>
      <div className="app_outer flex-1 w-fill overflow-x-auto p-7 pb-0 bg-slate-100 snap-x snap-mandatory ">
        <div className="app_boards flex flex-row gap-7 min-w-fit h-full ">
          <Board title="To-Do" />
          <Board title="In Progress" />
          <Board title="Completed" />
          <Board title="Approved" />
        </div>
      </div>
    </div>
  );
};

export default App;
