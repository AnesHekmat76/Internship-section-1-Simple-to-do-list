import "../App/App.css";
import React, { useState } from "react";
import TaskList from "../TaskList/TaskList";
import Form from "../Form/Form";
import Dialog from "../Dialog/Dialog";
import AlertMessage from "../AlertMessage/AlertMessage";

const App = () => {
  const [tasks, setTasks] = useState([]);
  // Dialog :
  const [dialogMessage, setDialogMessage] = useState("");
  const [isDialogDisplayed, setIsDialogDisplayed] = useState(false);
  const [dialogAction, setDialogAction] = useState("");
  // Selected tasks for delete and edit :
  const [selectedTaskForDelete, setSelectedTaskForDelete] = useState(null);
  const [selectedTaskForEdit, setSelectedTaskForEdit] = useState(null);
  // Alert message :
  const [alertMessageIsDisplayed, setAlertMessageIsDisplayed] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  // Form inputs and button :
  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [dateInput, setDateInput] = useState("");

  const [buttonEditOperation, setButtonEditOperation] = useState(false);

  const addNewTask = (newTask) => {
    setTasks((prevTasks) => [newTask, ...prevTasks]);
    setAlertMessage("Task successfully added");
    setAlertMessageIsDisplayed(true);
    if (!alertMessageIsDisplayed) {
      setTimeout(setAlertMessageIsDisplayed, 3000, false);
    }
  };
  const editSelectedTask = (newTask) => {
    setTasks((prevTasks) => {
      prevTasks[selectedTaskForEdit] = newTask;
      return prevTasks;
    });
    setButtonEditOperation(false);
    setAlertMessage("Task successfully updated");
    setAlertMessageIsDisplayed(true);
    setTimeout(setAlertMessageIsDisplayed, 3000, false);
  };
  const onDeleteButtonClick = (id) => {
    setDialogAction("delete");
    setDialogMessage("Are you sure you want to delete this task ?");
    setIsDialogDisplayed(true);
    setSelectedTaskForDelete(id);
  };
  const cancelDeletingTask = () => {
    setIsDialogDisplayed(false);
    setDialogMessage("");
    setSelectedTaskForDelete(null);
    setSelectedTaskForEdit(null);
  };
  const deleteTask = () => {
    setTasks((prevTasks) => {
      const editedTasks = prevTasks.filter(
        (item, index) => index !== selectedTaskForDelete
      );
      return editedTasks;
    });
    setIsDialogDisplayed(false);
    setAlertMessage("Task successfully deleted");
    setAlertMessageIsDisplayed(true);
    if (!alertMessageIsDisplayed) {
      setTimeout(setAlertMessageIsDisplayed, 3000, false);
    }
    if (titleInput) setTitleInput("");
    if (descriptionInput) setDescriptionInput("");
    if (dateInput) setDateInput("");
    if (buttonEditOperation) setButtonEditOperation(false);
  };
  const hideAlertMessage = () => {
    setAlertMessageIsDisplayed(false);
  };
  const onEditButtonClick = (id) => {
    setSelectedTaskForEdit(id);
    setDialogAction("edit");
    setDialogMessage("Are you sure you want to update this task ?");
    setIsDialogDisplayed(true);
  };

  const prepareFormToEditTask = () => {
    setTitleInput(tasks[selectedTaskForEdit].title);
    setDescriptionInput(tasks[selectedTaskForEdit].description);
    setDateInput(tasks[selectedTaskForEdit].date);
    setButtonEditOperation(true);
    setIsDialogDisplayed(false);
  };

  return (
    <>
      <Dialog
        isDialogDisplayed={isDialogDisplayed}
        dialogMessage={dialogMessage}
        dialogAction={dialogAction}
        deleteTask={deleteTask}
        prepareFormToEditTask={prepareFormToEditTask}
        cancelDeletingTask={cancelDeletingTask}
      ></Dialog>
      <div className="main-parent">
        <h1>To do list</h1>

        <div className="main-container">
          <Form
            buttonEditOperation={buttonEditOperation}
            titleInput={titleInput}
            descriptionInput={descriptionInput}
            dateInput={dateInput}
            setTitleInput={setTitleInput}
            setDescriptionInput={setDescriptionInput}
            setDateInput={setDateInput}
            addNewTask={addNewTask}
            editSelectedTask={editSelectedTask}
          />
          <TaskList
            tasks={tasks}
            onEditButtonClick={onEditButtonClick}
            onDeleteButtonClick={onDeleteButtonClick}
          />
        </div>
        {alertMessageIsDisplayed && (
          <AlertMessage
            alertMessage={alertMessage}
            alertMessageIsDisplayed={alertMessageIsDisplayed}
            hideAlertMessage={hideAlertMessage}
          />
        )}
      </div>
    </>
  );
};

export default App;
