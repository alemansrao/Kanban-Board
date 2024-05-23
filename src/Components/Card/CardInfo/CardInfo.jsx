import React from "react";
import Modal from "../../Modal/Modal";
import { Type, List, Calendar, Tag } from "react-feather";
import Editable from "../../Editable/Editable";
function CardInfo(props) {
  return (
    <Modal onClose={() => (props.onClose ? props.onClose() : "")}>
      <div className="cardinfo p-3 bg-white flex flex-col gap-4 min-w-[600px] max-w-xl">
        <div className="cardiinfo_box flex flex-col gap-1">
          <div className="cardinfo_box_title font-bold text-l gap-2 flex">
            <Type />
            Card title
          </div>
          <Editable
            text={props.cardTitle}
            placeholder="Enter Title"
            buttonText="Save"
            compact
          />
        </div>
        <div className="cardiinfo_box flex flex-col gap-1">
          <div className="cardinfo_box_title font-bold text-l gap-2 flex">
            <List />
            Description
          </div>
          <Editable
            text={props.cardDescription}
            placeholder="Enter Description"
            buttonText="Save"
          />
        </div>
        <div className="cardiinfo_box flex flex-col gap-1">
          <div className="cardinfo_box_title font-bold text-l gap-2 flex">
            <Calendar />
            Date
          </div>
          <input
            type="date"
            name=""
            id=""
            className="border-2 w-fit min-w-72 border-solid outline-none rounded-md h-10 p-1"
          />
        </div>
        <div className="cardiinfo_box flex flex-col gap-1">
          <div className="cardinfo_box_title font-bold text-l gap-2 flex te">
            <Tag />
            Labels
          </div>
          <Editable
            text="Add label"
            placeholder="Enter Label"
            buttonText="Save"
            compact
          />
        </div>
      </div>
    </Modal>
  );
}

export default CardInfo;