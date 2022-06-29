import React from "react";
import "./AlertMessage.css";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const AlertMessage = ({ hideAlertMessage, alertMessage }) => {
  return (
    <div className="alert-message-container">
      <Stack sx={{ width: "400px" }} spacing={2}>
        <Alert
          action={
            <Button
              onClick={hideAlertMessage}
              color="inherit"
              size="small"
            >
              UNDO
            </Button>
          }
        >
          {alertMessage}
        </Alert>
      </Stack>
    </div>
  );
};
export default AlertMessage;
