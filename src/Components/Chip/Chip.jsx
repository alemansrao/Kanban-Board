import React from "react";
import { X } from "react-feather";
function Chip(props) {
  return (
    <div
      className={`chip font-mono rounded-full flex gap-1 items-center p-1 px-2 text-xs font-semibold bg-${props.color}-500 flex-wrap `}
    >
      {props.text}
      {props.close && (
        <X
          className="cursor-pointer  h-4 w-4"
          onClick={props.onClose ? props.onClose() : void 0}
        />
      )}
    </div>
  );
}

export default Chip;
