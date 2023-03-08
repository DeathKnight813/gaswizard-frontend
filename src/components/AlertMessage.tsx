import React from "react";
import { Alert } from "@material-tailwind/react";
import useAlertMessage from "../hooks/useAlertMessage";

export default function AlertMessage() {
  const { closeAlert, isOpened, color, message } = useAlertMessage()

  return (
    <div className="w-full flex justify-center sticky top-5 z_10000">
      <Alert
        show={isOpened}
        color={color}
        dismissible={{
          onClose: () => closeAlert(),
        }}
        animate={{
          mount: { y: 0 },
          unmount: { y: 100 },
        }}
        className="w-fit"
        variant="gradient"
      >
        {message}
      </Alert>
    </div>
  )
}