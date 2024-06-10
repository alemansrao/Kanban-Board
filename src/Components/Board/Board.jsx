import React, { useState } from "react";
import Card from "../Card/Card";
import Editable from "../Editable/Editable";
import Dropdown from "../Dropdown/Dropdown";
import "./board.css";
function Board(props) {
  const [showDropdown, setShowDropdown] = useState(false);
  

  return (
    <div className="board flex-col flex gap-7 max-w-96 min-w-96 snap-center">
      <div className="board_top flex gap-3">
        <p className="board_top_title font-mono flex-1 flex align-middle font-bold gap-2">
          {props.board?.title} <span>{`${props.board?.cards?.length}`}</span>
        </p>
        <div className="board_top_more relative z-10 ">
          <Dropdown
            text="Delete Board"
            className="ml-auto"
            removeBoard={props.onRemoveBoard}
            boardId={props.board?.id}
          ></Dropdown>
        </div>
      </div>
      <div className="board_cards bg-slate-200 flex flex-1 flex-col p-3 gap-4 rounded-md overflow-x-auto no-scrollbar">
        {props.board?.cards.map((item) => (
          <Card
            key={item.id}
            text={item.title}
            card={item}
            removeCard={props.removeCard}
            boardId={props.board?.id}
            handleDragEnd={props.handleDragEnd}
            handleDragEnter={props.handleDragEnter}
            updateCard={props.updateCard}
            // onClick={() => console.log("Test")}
          />
        ))}

        {/* <Card text={props.board.cards[0].title} />
        <Card text="Lorem ipsum, dolor sit amet " /> */}

        <Editable
          icon
          text="Add Card"
          onSubmit={(value) => props.addCard(value, props.board.id)}
          boardId={props.board?.id}
          handleDragEnterEditable={props.handleDragEnterEditable}
        />
      </div>
    </div>
  );
}

export default Board;
