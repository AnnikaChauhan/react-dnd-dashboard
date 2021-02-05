import React, { useState } from "react";
import {
  Switch,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@material-ui/core";

const Tools = ({
  draggable,
  handleDraggableChange,
  resizable,
  handleResizableChange,
  compactType,
  handleCompactTypeChange,
}) => {
  return (
    <div style={{ margin: "0 10px" }}>
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
              <div>
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
              </div>
            </RadioGroup>
          </FormControl>
        </p>
      </div>
    </div>
  );
};

export default Tools;
