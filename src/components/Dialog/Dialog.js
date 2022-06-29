import React from "react";
import "./Dialog.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Dialog = (props) => {
  const onYesButtonClick = () => {
    if (props.dialogAction === "delete") {
      props.deleteTask();
      return;
    }
    if (props.dialogAction === "edit") {
      props.prepareFormToEditTask();
      return;
    }
  };
  const onNoButtonClick = () => {
    props.cancelDeletingTask();
  };

  return (
    <>
      <div
        style={{
          display: `${props.isDialogDisplayed ? "flex" : "none"}`,
        }}
        className="dialog-container"
      >
        <div className="dialog">
          <h3>{props.dialogMessage} </h3>
          <div className="dialog-button-container">
            <Stack spacing={2} direction="row">
              <Button
                onClick={onNoButtonClick}
                className="dialog-button"
                variant="outlined"
              >
                Nooooo
              </Button>
              <Button
                onClick={onYesButtonClick}
                className="dialog-button"
                variant="contained"
              >
                Yes
              </Button>
            </Stack>
          </div>
        </div>
      </div>
      <div
        style={{
          height: `${props.isDialogDisplayed ? "99.6vh" : "0"}`,
          opacity: `${props.isDialogDisplayed ? "0.3" : "0"}`,
        }}
        className="dialog-dark-background"
      />
    </>
  );
};

export default Dialog;
