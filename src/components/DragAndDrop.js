import React, { useState } from "react";
import { Card } from "@material-ui/core";
import useStyles from "../styles";
import RGL, { WidthProvider } from "react-grid-layout";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";

const ReactGridLayout = WidthProvider(RGL);

const DragAndDrop = ({ draggable, resizable, compactType }) => {
  const classes = useStyles();

  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2 },
    { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 },
    { i: "d", x: 1, y: 1, w: 2, h: 3 },
    { i: "e", x: 2, y: 1, w: 2, h: 2 },
  ];

  return (
    <ReactGridLayout
      layout={layout}
      cols={12}
      rowHeight={30}
      width={1200}
      margin={[10, 10]}
      containerPadding={[10, 10]}
      className="layout"
      isDraggable={draggable}
      isResizable={resizable}
      resizeHandles={["se"]}
      resizeHandle={() => <AspectRatioIcon />}
      compactType={compactType}
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
  );
};

export default DragAndDrop;
