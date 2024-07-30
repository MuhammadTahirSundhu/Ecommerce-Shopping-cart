import * as React from "react";
import AlertUI from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

interface AlertProps {
  Description: string;
}

const Alert: React.FC<AlertProps> = ({ Description }) => {
  return (
    <>
      <AlertUI severity="success" style={{ position: "sticky", top: "70px" }}>
        <AlertTitle>Success</AlertTitle>
        {`${Description}`}
      </AlertUI>
    </>
  );
};

export default Alert;
