import React from "react";
import "./App.css";
import Board from "./Components/Board/Board";
const App = () => {
  return (
    <div className="App h-screen w-screen flex flex-col ">
      <div className="app_navbar flex w-full p-5 border-4 border-solid justify-between">
        <h1 className="font-bold font-sans content-center">Kanban Board</h1>
        <a href="http://alemansrao.in" className="text-white px-4 border-2 bg-gradient-to-r from-purple-500 to-blue-500 py-1 rounded-full">alemansrao.in</a>
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
