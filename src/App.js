import React, { useState } from "react";
import GridLayout from "react-grid-layout";
import { Card, Switch, Paper } from "@material-ui/core";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  const [draggable, setDraggable] = useState(true);

  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2, static: true, isResizable: true },
    { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 },
  ];

  const handleChange = (event) => {
    setDraggable(event.target.checked);
  };

  return (
    <div style={{ margin: "0 10px" }}>
      <h1>React Drag and Drop Dashboard</h1>
      <div>
        <p>
          Draggable:{" "}
          <Switch
            checked={draggable}
            onChange={handleChange}
            color="primary"
            name="checkedB"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </p>
      </div>
      <Paper style={{ height: "500px" }}>
        <GridLayout
          layout={layout}
          cols={12}
          rowHeight={30}
          width={1200}
          margin={[10, 10]}
          containerPadding={[10, 10]}
          className="layout"
          isDraggable={draggable}
          // onLayoutChange={() => console.log("layout has changed")}
        >
          <Card className={classes.container} key="a">
            Card A
          </Card>
          <Card className={classes.container} key="b">
            Card B
          </Card>
          <Card className={classes.container} key="c">
            Card C
          </Card>
        </GridLayout>
      </Paper>
    </div>
  );
};

export default App;
