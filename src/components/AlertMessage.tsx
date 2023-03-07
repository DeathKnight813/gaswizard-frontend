import React from "react";
import { Alert } from "@material-tailwind/react";
import useAlertMessage from "../hooks/useAlertMessage";

export default function AlertMessage() {
  const { closeAlert, isOpened, color, message } = useAlertMessage()

  return (
    <Alert
      show={isOpened}
      color={color}
      animate={{
        mount: { y: 0 },
        unmount: { y: 100 }
      }}
      dismissible={{
        onClose: () => closeAlert(),
      }}
    >
      {message}
    </Alert>
  )
}