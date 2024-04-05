import React from "react";
import Card from "../Card/Card";
import { MoreHorizontal } from "react-feather";
function Board(props) {
  return (
    <div className="board flex-col flex gap-7 max-w-96 min-w-96 snap-center">
      <div className="board_top flex gap-3">
        <p className="board_top_title font-mono flex-1 flex align-middle font-bold">
          {props.title}<span className="px-3">7</span>
        </p>
        <MoreHorizontal className="cursor-pointer" />
      </div>
      <div className="board_cards bg-slate-200 flex flex-1 flex-col p-3 gap-4 rounded-md overflow-x-auto no-scrollbar">
        <Card text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, et?0" />
        <Card text="Lorem ipsum, dolor sit amet " />
        <Card text="consectetur adipisicing elit. Mollitia, et?" />
        <Card text="consectetur adipisicing elit. Mollitia, et?" />
        <Card text="consectetur adipisicing elit. Mollitia, et?" />
        <Card text="consectetur adipisicing elit. Mollitia, et? sicing elit. Mollitia, et?" />
        <Card text="consectetur adipisicing elit. Mollitia, e Mollitia, et?" />
      </div>
    </div>
  );
}

export default Board;
