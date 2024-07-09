import React, { useEffect, useState } from "react";
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
  const [values, setValues] = useState({ ...props.card }); //makes copy of the card
  const { title, description, date, tasks, labels } = props.card;

  const calculatePercentage = () => {
    if (values.tasks.length === 0) return "0";
    const completedTasks = tasks?.filter((item) => item.isCompleted)?.length;
    return Math.round((completedTasks / tasks.length) * 100) + "";
  };

  // Check if the label already exists in the values.labels array
  // If it doesn't exist, add a new label with the provided value to the values.labels array
  const addLabel = (value) => {
    const index = values.labels?.findIndex((item) => item.text === value);
    if (index >= 0) return;
    const label = {
      text: value,
    };
    setValues({ ...values, labels: [...values.labels, label] });
  };

  // Remove a label from the values.labels array if it matches the provided text
  const removeLabel = (text) => {
    const index = values.labels?.findIndex((item) => item.text === text);
    if (index < 0) return;
    const updatedLabels = [...values.labels];
    updatedLabels.splice(index, 1);
    setValues({ ...values, labels: updatedLabels });
  };

  useEffect(() => {
    props.updateCard(props.card.id, props.boardId, values);
  }, [values]);

  const addTask = (value) => {
    const task = {
      id: Date.now() + Math.random(),
      text: value,
      isCompleted: false,
    };
    setValues({ ...values, tasks: [...values.tasks, task] });
  };

  const removeTask = (taskId) => {
    const index = values.tasks.findIndex((item) => item.id === taskId);
    if (index < 0) return;
    const updatedTasks = [...values.tasks];
    updatedTasks.splice(index, 1);
    setValues({ ...values, tasks: updatedTasks });
  };

  const updateTask = (taskId) => {
    const index = values.tasks?.findIndex((item) => item.id === taskId);
    if (index < 0) return;
    const tempTask = [...values.tasks];
    tempTask[index].isCompleted = !tempTask[index].isCompleted;
    setValues({ ...values, tasks: tempTask });
  };
  return (
    <Modal onClose={() => (props.onClose ? props.onClose() : "")}>
      <div className="cardinfo p-3 bg-white flex flex-col gap-5 max-h-[85vh]  ">
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
            onSubmit={(value) => setValues({ ...values, title: value })}
          />
        </div>
        <div className="cardiinfo_box flex flex-col gap-1">
          <div className="cardinfo_box_title font-bold text-l gap-2 flex">
            <List />
            Description
          </div>
          <Editable
            icon
            text={values.description}
            placeholder="Enter Description"
            buttonText="Save"
            onSubmit={(value) => setValues({ ...values, description: value })}
          />
        </div>
        <div className="cardiinfo_box flex flex-col gap-1">
          <div className="cardinfo_box_title font-bold text-l gap-2 flex">
            <Calendar />
            Date
          </div>
          <input
            className="border-2 w-fit min-w-72 border-solid outline-none rounded-md h-10 p-1"
            type="date"
            name=""
            id=""
            defaultValue={
              values.date
                ? (() => {
                    const date = new Date(values.date);
                    const timezoneOffsetInMilliseconds =
                      date.getTimezoneOffset() * 60000;
                    const adjustedDate = new Date(
                      date.getTime() - timezoneOffsetInMilliseconds
                    );
                    return adjustedDate.toISOString().split("T")[0];
                  })()
                : ""
            }
            onChange={(event) =>
              setValues({ ...values, date: event.target.value })
            }
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
                close
                onClose={() => removeLabel(item.text)}
                key={item.text + index}
              />
            ))}
          </div>
          {/* <div className="card_info_box_colors flex gap-4 items-center">
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
          </div> */}
          <div className="card_info_box_body">
            <Editable
              text="Add label"
              placeholder="Enter Label"
              buttonText="Save"
              icon
              onSubmit={(value) => addLabel(value)}
            />
          </div>
        </div>
        <div className="cardiinfo_box flex flex-col gap-1">
          <div className="cardinfo_box_title font-bold text-l gap-2 flex te">
            <CheckSquare />
            Tasks
          </div>
          <div className="cardinfo_box_progressbar h-3 rounded-md w-full border-2 bg-white">
            <div
              className="cardinfo_box_progress bg-lime-500 active:bg-orange-500 h-full rounded-md"
              style={{ width: calculatePercentage() + "%" }}
            />
          </div>

          <div className="cardinfo_box_list flex flex-col gap-2">
            {values.tasks?.map((item, index) => (
              <div
                className="cardinfo_task flex gap-2 items-center"
                key={item.id}
              >
                <input
                  type="checkbox"
                  className="h-4 min-w-4 w-4"
                  checked={item.isCompleted}
                  onChange={(e) => {
                    updateTask(item.id);
                  }}
                />
                <p className="leading-3">{item.text}</p>
                <Trash
                  className="ml-auto min-w-5 w-5"
                  onClick={() => {
                    removeTask(item.id);
                  }}
                />
                <hr />
              </div>
            ))}
          </div>
          <div className="card_info_box_body pb-6">
            <Editable
              text="Add Task"
              placeholder="Enter Task"
              buttonText="Save"
              icon
              onSubmit={(value) => addTask(value)}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default CardInfo;
