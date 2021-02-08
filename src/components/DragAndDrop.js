import React, { useState } from "react";
import { Card, CardContent, Typography, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import useStyles from "../styles";
import { WidthProvider, Responsive } from "react-grid-layout";
import { cards as initialCards } from "./cards";
import {
  layoutLG as initialLGLayout,
  layoutMD as initialMDLayout,
  layoutSM as initialSMLayout,
} from "./layouts";
// import AspectRatioIcon from "@material-ui/icons/AspectRatio";
// import "react-grid-layout/css/styles.css";

const ReactGridLayout = WidthProvider(Responsive);

const DragAndDrop = ({ draggable, resizable, compactType }) => {
  const classes = useStyles();
  const [cards, setCards] = useState(initialCards);
  const [layouts, setLayouts] = useState({
    lg: initialLGLayout,
    md: initialMDLayout,
    sm: initialSMLayout,
    xs: initialSMLayout,
    xxs: initialSMLayout,
  });

  const removeCard = (cardToRemove) => () => {
    setCards(cards.filter((card) => card.key !== cardToRemove));
  };

  const handleLayoutChange = (_, allLayouts) => {
    setLayouts(allLayouts);
  };

  return (
    <ReactGridLayout
      layouts={layouts}
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
      compactType={compactType}
      onLayoutChange={handleLayoutChange}
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
