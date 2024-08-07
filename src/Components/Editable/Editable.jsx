import React, { useEffect, useState } from "react";
import { FileMinus, Plus, X } from "react-feather";
function Editable(props) {
  const [showEdit, setShowEdit] = useState(false);
  const [inputValue, setInputValue] = useState(!props.icon ? props.text : "");




  return (
    <div
      className={`Editable ${
        props.icon ? "w-full" : props.compact ? "w-fit" : " "
      } min-w-24"
      }  flex justify-around font-mono  min-h-16 flex-row bg-slate-300 rounded-md drop-shadow-lg hover:shadow-lg active:shadow-2xl`}
      onDragEnter={() => props.handleDragEnterEditable(0, props.boardId)}
    >
      {showEdit ? (
        <form
          className="Editable_edit flex min-h-28 flex-col w-full"
          onSubmit={(event) => {
            event.preventDefault();
            if (props.onSubmit) props.onSubmit(inputValue, props.boardId);
            setShowEdit(false);
            props.icon && setInputValue("");
          }}
        >
          <input
            autoFocus
            className="flex h-1/2 m-2 mb-0 rounded-sm p-1"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={props.placeholder ? props.placeholder : ""}
          />
          <div
            className={`editable_edit_footer flex flex-row x-2 justify-between items-center ${
              props.editClass || "["
            }`}
          >
            <button
              className="rounded-sm m-2 p-2 self-center bg-blue-400"
              type="submit"
            >
              {props.buttonText || "Add"}
            </button>
            <X
              onClick={() => setShowEdit(false)}
              className="m-2 bg-red-500 rounded-md p-1 cursor-pointer"
            />
          </div>
        </form>
      ) : (
        <p
          onClick={() => setShowEdit(true)}
          className={`editable_display px-3 cursor-pointer flex w-full h-auto items-center justify-center hover:bg-slate-400 hover:rounded-md ${
            props.displayClass || ""
          }}`}
        >
          {props.icon && <Plus />} {props.text || "Add card"}
        </p>
      )}
    </div>
  );
}

export default Editable;
