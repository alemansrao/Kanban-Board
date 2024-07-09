import React from "react";
function Modal(props) {
  return (
    <div
      className="modal absolute top-0 left-0 h-screen w-full bg-black/50 flex z-50 justify-center items-center"
      onClick={() => (props.onClose ? props.onClose() : "")}
    >
      <div
        className="modal_content bg-white rounded-md p-4 max-h-[95vh] overflow-y-auto  md:min-w-[50vw]"
        onClick={(event) => event.stopPropagation()}
      >
        {props.children}
      </div>
    </div>
  );
}

export default Modal;
