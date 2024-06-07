import React, { useState } from "react";
import Modal from "../../Modal/Modal";
import { Type, List, Calendar, Tag, Trash, CheckSquare } from "react-feather";
import Editable from "../../Editable/Editable";
function CardInfo(props) {
  const colors = [
    "#FF0000",
    "#FF7F00",
    "#FFFF00",
    "#00FF00",
    "#0000FF",
    "#4B0082",
    "#8B00FF",
  ];

  const [activeColor, setActiveColor] = useState("");

  return (
    <Modal onClose={() => (props.onClose ? props.onClose() : "")}>
      <div className="cardinfo p-3 bg-white flex flex-col gap-10 min-w-[600px] max-w-xl">
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
          <div className="card_info_box_colors flex gap-4 items-center">
            <ul className="flex gap-3">
              {colors.map((item, index) => (
                <li
                  key={index}
                  style={{ backgroundColor: item }}
                  onClick={() => setActiveColor(item)}
                  className={`h-6 w-6 rounded-full list-none cursor-pointer transition ${
                    activeColor === item ? "border-4 border-black" : ""
                  }`}
                ></li>
              ))}
            </ul>
          </div>
          <div className="card_info_box_body">
            <Editable
              text="Add label"
              placeholder="Enter Label"
              buttonText="Save"
              compact
            />
          </div>
        </div>
        <div className="cardiinfo_box flex flex-col gap-1">
          <div className="cardinfo_box_title font-bold text-l gap-2 flex te">
            <CheckSquare />
            Tasks
          </div>
          <div className="cardinfo_box_progressbar h-3 rounded-md w-full border-2 bg-white">
            <div className="cardinfo_box_progress bg-lime-500 active:bg-orange-500 h-full rounded-md" style={{ width: "50%" }}/>
          </div>
          <hr />



          <div className="cardinfo_box_list flex flex-col gap-2">
            <div className="cardinfo_task flex gap-2 items-center ">
              <input type="checkbox" className="h-6 w-6" />
              <p className="leading-3">Task</p>
            <Trash className="ml-auto min-w-5 w-5"/>
            </div>
            <hr />
            <div className="cardinfo_task flex gap-2 w-full items-center">
              <input type="checkbox" className="h-6 min-w-6 w-6"/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ut. Odio impedit minima delectus temporibus nesciunt mollitia vero aut earum iusto provident, ratione adipisci perspiciatis et saepe nihil sequi a?</p>
              <Trash className="ml-auto min-w-5 w-5"/>
            </div>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            <hr />
          </div>
          <div className="card_info_box_body">
            <Editable
              text="Add Task"
              placeholder="Enter Task"
              buttonText="Save"
              compact
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default CardInfo;
