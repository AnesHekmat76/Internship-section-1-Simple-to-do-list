import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import "../TaskList/TaskList.css";

const taskList = (props) => {
  return (
    <div className="list-container">
      {props.tasks.map((task, index) => {
        return (
          <TaskItem
            key={index}
            title={task.title}
            description={task.description}
            date={task.date}
            onDeleteButtonClick={() => {
              props.onDeleteButtonClick(index);
            }}
            onEditButtonClick={() => {
              props.onEditButtonClick(index);
            }}
          />
        );
      })}
    </div>
  );
};
export default taskList;
