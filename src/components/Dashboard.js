import React, { useState } from "react";
import { Paper } from "@material-ui/core";
import DragAndDrop from "./DragAndDrop";
import Tools from "./Tools";

const Dashboard = () => {
  const [draggable, setDraggable] = useState(true);
  const [resizable, setResizable] = useState(true);
  const [compactType, setCompactType] = useState("vertical");

  const handleDraggableChange = (event) => setDraggable(event.target.checked);

  const handleResizableChange = (event) => setResizable(event.target.checked);

  const handleCompactTypeChange = (event) => setCompactType(event.target.value);

  return (
    <>
      <Tools
        draggable={draggable}
        resizable={resizable}
        compactType={compactType}
        handleDraggableChange={handleDraggableChange}
        handleResizableChange={handleResizableChange}
        handleCompactTypeChange={handleCompactTypeChange}
      />
      <Paper style={{ height: "500px" }}>
        <DragAndDrop
          draggable={draggable}
          resizable={resizable}
          compactType={compactType}
        />
      </Paper>
    </>
  );
};

export default Dashboard;
