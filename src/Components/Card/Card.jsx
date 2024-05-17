import React from "react";
import { Calendar, CheckSquare, MoreHorizontal } from "react-feather";
import Chip from "../Chip/Chip";
import Dropdown from "../Dropdown/Dropdown";
function Card(props) {
  return (
    <div className="card bg-slate-300 rounded-md drop-shadow-lg hover:shadow-lg active:shadow-2xl">
      <div className="card_top flex flex-row items-center min-h-12 gap-y-2 gap-1 px-2 py-1  flex-wrap">
        <div className="card_labels align-middle flex flex-row ">
          <h1 className="px-1 font-mono">{props.card.title}</h1>
        </div>
        {/* <Chip text="Frontend" />
        <Chip text="Backend" />
        <Chip text="Database" />
        <Chip text="Styling" /> */}
        {props.card.labels.map((item) => (
          <Chip key={item.id} text={item.text} color={item.color}/>
        ))}
        <Dropdown
          className="cursor-pointer self-end ml-auto"
          text="Delete Card"
          removeCard={props.removeCard} cardId={props.card?.id} boardId={props.boardId}
        ></Dropdown>
        {/* <MoreHorizontal className="cursor-pointer self-end ml-auto" /> */}
      </div>
      <div className="card_title bg-gray-200 mx-2 rounded-sm p-1">
        <h1 className="card_title_text font-mono">{props.card.description}</h1>
      </div>
      <div className="card_footer flex justify-between px-2 py-1 flex-row">
        <p className="flex font-mono flex-row items-center">
          <Calendar className="mr-1" /> {props.card.date}
        </p>
        <p className="flex font-mono flex-row items-center">
          <CheckSquare className="mr-1" />
          1/4
        </p>
      </div>
    </div>
  );
}

export default Card;
