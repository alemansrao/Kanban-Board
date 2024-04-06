import React, { useState } from "react";
import { Check, Plus, X } from "react-feather";
function Editable(props) {
  const [showEdit, setShowEdit] = useState(false);
  return (
    <div className="Editable  w-full flex justify-around font-mono  min-h-16 flex-row bg-slate-300 rounded-md drop-shadow-lg hover:shadow-lg active:shadow-2xl">
      {showEdit ? (
        <form
          className="Editable_edit flex min-h-28 flex-col w-full"
          onSubmit={(event) => {
            event.preventDefault();
            if (props.onSubmit) props.onSubmit();
          }}
        >
          <input
            className="flex h-1/2 m-2 mb-0 rounded-sm p-1"
            type="text"
            value={props.text||"Add card"}
            placeholder={props.placeholder}
          />
          <div
            className={`editable_edit_footer flex flex-row x-2 justify-between items-center ${
              props.editClass || "["
            }`}
          >
            <button className="rounded-sm m-2 p-2 self-center bg-blue-400" type="submit">{props.buttonText || "Add"}</button>
            <X onClick={() => setShowEdit(false)} className="m-2 bg-red-500 rounded-md p-1 cursor-pointer"/>
          </div>
        </form>
      ) : (
        <p
          onClick={() => setShowEdit(true)}
          className={`editable_display cursor-pointer flex w-full h-full items-center justify-center hover:bg-slate-400 hover:rounded-md ${
            props.displayClass || ""
          }}`}
        >
          <Plus/> {props.text || "Add card"}
        </p>
      )}
    </div>
  );
}

export default Editable;
