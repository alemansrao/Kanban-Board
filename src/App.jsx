import React, { useState } from "react";
import "./App.css";
import Board from "./Components/Board/Board";
import Editable from "./Components/Editable/Editable";
const App = () => {
  const addCard = (title, board_id) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const formattedDate = `${day}-${month}`;

    const card = {
      id: Date.now() + Math.random() * 2,
      title,
      labels: [],
      tasks: [],
      description: [],
      date: formattedDate,
    };

    const index = boards.findIndex((item) => item.id === board_id);
    if (index < 0) return;

    let tempBoard = [...boards];
    tempBoard[index].cards.push(card);
    setBoards(tempBoard);
  };

  const removeCard = (card_id, board_id) => {
    const boardIndex = boards.findIndex((item) => item.id === board_id);
    if (boardIndex < 0) return;
    const cardIndex = boards[boardIndex].findIndex(
      (item) => item.id === card_id
    );
    if (cardIndex < 0) return;

    console.log("boards[boardIndex]:", boards[boardIndex]);

    const tempBoard = [...boards];
    tempBoard[boardIndex].cards.splice(cardIndex, 1);
    setBoards(tempBoard);
  };

  const addBoard = (title) => {
    setBoards([
      ...boards,
      {
        id: Date.now() + Math.random(),
        title,
        cards: [],
      },
    ]);
  };

  const removeBoard = (board_id) => {
    const tempBoard = boards.filter((item) => item.id !== board_id);
    setBoards(tempBoard);
  };

  const [boards, setBoards] = useState([
    {
      id: Date.now() + Math.random() * 3,
      title: "To-Do",
      cards: [
        {
          id: Date.now() + Math.random(),
          title: "Card one",
          tasks: [],
          labels: [
            {
              text: "frontend",
              color: "blue",
            },
          ],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          date: "Jan 26",
        },
        {
          id: Date.now() + Math.random(),
          title: "Card two",
          tasks: [],
          labels: [
            {
              text: "backend",
              color: "red",
            },
            {
              text: "frontend",
              color: "blue",
            },
          ],
          description: "ur adipisicing.",
          date: "July 21",
        },
      ],
    },
  ]);

  return (
    <div className="App h-screen w-screen flex flex-col ">
      <div className="app_navbar flex w-full p-5 border-4 border-solid justify-between">
        <h1 className="font-bold font-sans content-center">Kanban Board</h1>
        <a
          href="http://alemansrao.in"
          className="text-white px-4 border-2 bg-gradient-to-r from-purple-500 to-blue-500 py-1 rounded-full"
        >
          alemansrao.in
        </a>
      </div>
      <div className="app_outer flex-1 w-fill overflow-x-auto p-7 pb-0 bg-slate-100 snap-x snap-mandatory ">
        <div className="app_boards flex flex-row gap-7 min-w-fit h-full ">
          {/* <Board title="To-Do" />
          <Board title="In Progress" />
          <Board title="Completed" />
          <Board title="Approved" /> */}
          {boards.map((item) => (
            <Board
              key={item.id}
              board={item}
              addCard={addCard}
              onRemoveBoard={removeBoard}
              removeCard={removeCard}
            />
          ))}

          <div className="add_board w-56 flex flex-col justify-around h-auto gap-7">
            <Editable
              displayClass=""
              text="Add Board"
              onSubmit={(value) => {
                addBoard(value);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
