import React from "react";
import { X } from "react-feather";
function Chip(props) {
  return (
    <div className="chip font-mono bg-green-400 rounded-full flex gap-1 items-center p-1 px-2 text-xs font-semibold flex-wrap">
      {props.text}
      {props.close && <X className="max-h-4 cursor-pointer" onClick={props.onClose? props.onClose():void(0)}/>}
    </div>
  );
}

export default Chip;
