import React, { useState } from "react";
import { Paper, IconButton, Tooltip } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Drag and Drop Dashboard</h1>
        <div>
          {/* <Tooltip title="Add a widget">
            <IconButton onClick={() => {}}>
              <AddIcon />
            </IconButton>
          </Tooltip> */}
        </div>
      </div>
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
