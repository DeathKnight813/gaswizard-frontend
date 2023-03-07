import React from "react";
import { Alert } from "@material-tailwind/react";
import useAlertMessage from "../hooks/useAlertMessage";

export default function AlertMessage() {
  const { closeAlert, isOpened, color, message } = useAlertMessage()

  return (
    <Alert
      show={isOpened}
      color={color}
      dismissible={{
        onClose: () => closeAlert(),
      }}
      className="sticky top-5 z_10000"
    >
      {message}
    </Alert>
  )
}