import React, { useState } from "react";
import { Card, CardContent, Typography, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import useStyles from "../styles";
import { WidthProvider, Responsive } from "react-grid-layout";
import { cards as initialCards } from "./cards";
// import AspectRatioIcon from "@material-ui/icons/AspectRatio";
// import "react-grid-layout/css/styles.css";

const ReactGridLayout = WidthProvider(Responsive);

const DragAndDrop = ({ draggable, resizable, compactType }) => {
  const classes = useStyles();
  const [cards, setCards] = useState(initialCards);

  const layoutLG = [
    { i: "one", x: 0, y: 0, w: 4, h: 3 },
    { i: "two", x: 3, y: 0, w: 3, h: 3, minW: 2, maxW: 4 },
    { i: "three", x: 6, y: 0, w: 2, h: 4 },
    { i: "four", x: 5, y: 1, w: 2, h: 3 },
    { i: "five", x: 1, y: 4, w: 4, h: 5, minW: 4, maxW: 6, minH: 5, maxH: 7 },
  ];

  const layoutMD = [
    { i: "one", x: 0, y: 0, w: 1, h: 2 },
    { i: "two", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "three", x: 4, y: 0, w: 1, h: 2 },
    { i: "four", x: 1, y: 1, w: 2, h: 3 },
    { i: "five", x: 2, y: 1, w: 2, h: 2 },
  ];

  const layoutSM = [
    { i: "one", x: 0, y: 0, w: 1, h: 2 },
    { i: "two", x: 0, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "three", x: 0, y: 0, w: 1, h: 2 },
    { i: "four", x: 0, y: 0, w: 2, h: 3 },
    { i: "five", x: 0, y: 0, w: 2, h: 2 },
  ];

  const responsiveLayouts = {
    lg: layoutLG,
    md: layoutMD,
    sm: layoutSM,
    xs: layoutSM,
    xxs: layoutSM,
  };

  const removeCard = (cardToRemove) => () => {
    setCards(cards.filter((card) => card.key !== cardToRemove));
  };

  return (
    <ReactGridLayout
      layouts={responsiveLayouts}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      width={1200}
      rowHeight={30}
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
      {cards.map((card) => {
        return (
          <Card className={classes.container} key={card.key}>
            <CardContent className={classes.content}>
              <div className={classes.header}>
                <Typography variant="h5">{card.name}</Typography>
                <IconButton onClick={removeCard(card.key)}>
                  <DeleteIcon />
                </IconButton>
              </div>
              <div>
                <Typography variant="body2">{card.description}</Typography>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </ReactGridLayout>
  );
};

export default DragAndDrop;
