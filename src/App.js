import React, { useState } from "react";
import {
  Switch,
  Paper,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@material-ui/core";
import DragAndDrop from "./DragAndDrop";

const App = () => {
  const [draggable, setDraggable] = useState(true);
  const [resizable, setResizable] = useState(true);
  const [compactType, setCompactType] = useState("vertical");

  const handleDraggableChange = (event) => setDraggable(event.target.checked);

  const handleResizableChange = (event) => setResizable(event.target.checked);

  const handleCompactTypeChange = (event) => setCompactType(event.target.value);

  return (
    <div style={{ margin: "0 10px" }}>
      <Paper style={{ height: "500px", marginTop: "10px" }}>
        <DragAndDrop
          draggable={draggable}
          resizable={resizable}
          compactType={compactType}
        />
      </Paper>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <p>
          Draggable:{" "}
          <Switch
            checked={draggable}
            onChange={handleDraggableChange}
            color="primary"
            name="checkedDrag"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </p>
        <p>
          Resizable:{" "}
          <Switch
            checked={resizable}
            onChange={handleResizableChange}
            color="primary"
            name="checkedResize"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </p>
        <p>
          <FormControl component="fieldset">
            <FormLabel component="legend">Compact Type</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={compactType}
              onChange={handleCompactTypeChange}
            >
              <FormControlLabel
                value="vertical"
                control={<Radio />}
                label="Vertical"
              />
              <FormControlLabel
                value="horizontal"
                control={<Radio />}
                label="Horizontal"
              />
              <FormControlLabel
                value="nocompaction"
                control={<Radio />}
                label="No Compaction"
              />
            </RadioGroup>
          </FormControl>
        </p>
      </div>
    </div>
  );
};

export default App;
