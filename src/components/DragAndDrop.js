import React from "react";
import { Card } from "@material-ui/core";
import useStyles from "../styles";
import { WidthProvider, Responsive } from "react-grid-layout";
// import AspectRatioIcon from "@material-ui/icons/AspectRatio";
// import "react-grid-layout/css/styles.css";

const ReactGridLayout = WidthProvider(Responsive);

const DragAndDrop = ({ draggable, resizable, compactType }) => {
  const classes = useStyles();

  const layoutLG = [
    { i: "a", x: 0, y: 0, w: 4, h: 2 },
    { i: "b", x: 3, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 6, y: 0, w: 1, h: 4 },
    { i: "d", x: 5, y: 1, w: 2, h: 3 },
    { i: "e", x: 1, y: 4, w: 4, h: 5, minW: 4, maxW: 6, minH: 5, maxH: 7 },
  ];

  const layoutMD = [
    { i: "a", x: 0, y: 0, w: 1, h: 2 },
    { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 },
    { i: "d", x: 1, y: 1, w: 2, h: 3 },
    { i: "e", x: 2, y: 1, w: 2, h: 2 },
  ];

  const layoutSM = [
    { i: "a", x: 0, y: 0, w: 1, h: 2 },
    { i: "b", x: 0, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 0, y: 0, w: 1, h: 2 },
    { i: "d", x: 0, y: 0, w: 2, h: 3 },
    { i: "e", x: 0, y: 0, w: 2, h: 2 },
  ];

  const responsiveLayouts = {
    lg: layoutLG,
    md: layoutMD,
    sm: layoutSM,
    xs: layoutSM,
    xxs: layoutSM,
  };

  return (
    <ReactGridLayout
      layouts={responsiveLayouts}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      rowHeight={30}
      width={1200}
      margin={[10, 10]}
      containerPadding={[10, 10]}
      className="layout"
      isDraggable={draggable}
      isResizable={resizable}
      // This can be taylored to an array of positions so that the user can resize in any direction or only specific ones e.g. [se,e,ne]
      resizeHandles={["se"]}
      // resizeHandle={() => <AspectRatioIcon />}
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
