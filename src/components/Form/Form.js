import React, { useState } from "react";
import "./Form.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const Form = (props) => {
  const [isTitleErrMessageDisplayed, setIsTitleErrMessageDisplayed] =
    useState(false);
  const [
    isDescriptionErrMessageDisplayed,
    setIsDescriptionErrMessageDisplayed,
  ] = useState(false);
  const [isDateErrMessageDisplayed, setIsDateErrMessageDisplayed] =
    useState(false);

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (
      props.titleInput.trim().length === 0 ||
      props.descriptionInput.trim().length === 0 ||
      props.dateInput.trim().length === 0
    ) {
      if (props.titleInput.trim().length === 0) {
        setIsTitleErrMessageDisplayed(true);
      }
      if (props.descriptionInput.trim().length === 0) {
        setIsDescriptionErrMessageDisplayed(true);
      }
      if (props.dateInput.trim().length === 0) {
        setIsDateErrMessageDisplayed(true);
      }
      return;
    }

    setIsTitleErrMessageDisplayed(false);
    setIsDescriptionErrMessageDisplayed(false);
    setIsDateErrMessageDisplayed(false);

    let newTask = {
      title: props.titleInput,
      description: props.descriptionInput,
      date: props.dateInput,
    };
    if (!props.buttonEditOperation) {
      props.addNewTask(newTask);
    } else {
      props.editSelectedTask(newTask);
    }
    props.setTitleInput("");
    props.setDescriptionInput("");
    props.setDateInput("");
  };

  return (
    <form onSubmit={onFormSubmit} className="form-container">
      <div className="text-field-container">
        <TextField
          value={props.titleInput}
          onChange={(event) => {
            props.setTitleInput(event.target.value);
            setIsTitleErrMessageDisplayed(false);
          }}
          className="text-field"
          id="outlined-basic"
          label="Title"
          variant="outlined"
          helperText={
            isTitleErrMessageDisplayed ? "This field cannot be empty" : " "
          }
          error={isTitleErrMessageDisplayed}
        />
      </div>
      <div className="text-field-container">
        <TextField
          value={props.descriptionInput}
          onChange={(event) => {
            props.setDescriptionInput(event.target.value);
            setIsDescriptionErrMessageDisplayed(false);
          }}
          id="outlined-multiline-static"
          className="text-field"
          label="Description"
          multiline
          rows={4}
          helperText={
            isDescriptionErrMessageDisplayed
              ? "This field cannot be empty"
              : " "
          }
          error={isDescriptionErrMessageDisplayed}
        />
      </div>
      <div className="datePicker-container">
        <input
          className={`datePicker ${
            isDateErrMessageDisplayed ? "datePicker-error" : ""
          }`}
          value={props.dateInput}
          onChange={(e) => {
            props.setDateInput(e.target.value);
            setIsDateErrMessageDisplayed(false);
          }}
          type="date"
        ></input>
        <p
          style={{ display: isDateErrMessageDisplayed ? "block" : "none" }}
          className="date-picker-error"
        >
          This field cannot be empty
        </p>
      </div>

      <div className="button-container">
        <Button variant="contained" className="submit-button" type="submit">
          {props.buttonEditOperation ? "Update" : "Add"}
        </Button>
      </div>
    </form>
  );
};

export default Form;
