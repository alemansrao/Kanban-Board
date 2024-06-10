import React, { useState } from "react";
import Modal from "../../Modal/Modal";
import { Type, List, Calendar, Tag, Trash, CheckSquare } from "react-feather";
import Editable from "../../Editable/Editable";
import Chip from "../../Chip/Chip";
function CardInfo(props) {
  const colors = [
    "#FF0000",
    "#FF7F00",
    "#FFFF00",
    "#00FF00",
    "#3b82f6",
    "#4B0082",
    "#8B00FF",
  ];

  const [activeColor, setActiveColor] = useState("");
  const [values,setValues] = useState({...props.card}) //makes copy of the card
  const { title, description, date, tasks, labels } = props.card;

  const calculatePercentage = () => {
    if (values.tasks.length === 0) return "0";
    const completedTasks = tasks?.filter((item) => item.isCompleted)?.length;
    return Math.round((completedTasks / tasks.length) * 100) + "";
  };


  return (
    <Modal onClose={() => (props.onClose ? props.onClose() : "")}>
      <div className="cardinfo p-3 bg-white flex flex-col gap-10 min-w-[600px] max-w-xl">
        <div className="cardiinfo_box flex flex-col gap-1">
          <div className="cardinfo_box_title font-bold text-l gap-2 flex">
            <Type />
            Card title
          </div>
          <Editable
            text={values.title}
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
            text={values.description}
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
            defaultValue={
              date ? new Date(values.date).toISOString().split("T")[0] : ""
            }
            className="border-2 w-fit min-w-72 border-solid outline-none rounded-md h-10 p-1"
          />
        </div>
        <div className="cardiinfo_box flex flex-col gap-2">
          <div className="cardinfo_box_title font-bold text-l gap-2 flex te">
            <Tag />
            Labels
          </div>
          <div className="cardinfo_box_labels flex gap-3 flex-wrap">
            {values.labels?.map((item, index) => (
              <Chip
                text={item.text}
                color={item.color}
                close
                onClose={() => {
                  console.log("close");
                }}
                key={item.text + index}
              />
            ))}
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
          {calculatePercentage() !== "0" && (
            <div className="cardinfo_box_progressbar h-3 rounded-md w-full border-2 bg-white">
              <div
                className="cardinfo_box_progress bg-lime-500 active:bg-orange-500 h-full rounded-md"
                style={{ width: calculatePercentage() + "%" }}
              />
            </div>
          )}

          <div className="cardinfo_box_list flex flex-col gap-2">
            {values.tasks?.map((item, index) => (
              <div
                className="cardinfo_task flex gap-2 items-center"
                key={item.id}
              >
                <input
                  type="checkbox"
                  className="h-4 min-w-4 w-4"
                  defaultValue={item.completed}
                />
                <p className="leading-3">{item}</p>
                <Trash className="ml-auto min-w-5 w-5" />
                <hr />
              </div>
            ))}
          </div>
          <div className="card_info_box_body">
            <Editable
              text="Add Task"
              placeholder="Enter Task"
              buttonText="Save"
              icon
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default CardInfo;
