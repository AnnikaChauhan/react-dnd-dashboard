import React, { useState } from "react";
import { Card, Switch, Paper } from "@material-ui/core";
import useStyles from "./styles";
import RGL, { WidthProvider } from "react-grid-layout";
// import AspectRatioIcon from "@material-ui/icons/AspectRatio";

const ReactGridLayout = WidthProvider(RGL);

const App = () => {
  const classes = useStyles();
  const [draggable, setDraggable] = useState(true);

  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2 },
    { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 },
    { i: "d", x: 1, y: 1, w: 2, h: 3 },
    { i: "e", x: 2, y: 1, w: 2, h: 2 },
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
        <ReactGridLayout
          layout={layout}
          cols={12}
          rowHeight={30}
          width={1200}
          margin={[10, 10]}
          containerPadding={[10, 10]}
          className="layout"
          isDraggable={draggable}
          // resizeHandle={() => <AspectRatioIcon />}
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
          <Card className={classes.container} key="d">
            Card D
          </Card>
          <Card className={classes.container} key="e">
            Card E
          </Card>
        </ReactGridLayout>
      </Paper>
    </div>
  );
};

export default App;
