import GridLayout from "react-grid-layout";

const App = () => {
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
    { i: "b", x: 1, y: 1, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 4, y: 2, w: 1, h: 2 },
  ];
  return (
    <div style={{ margin: "0 10px" }}>
      <h1>React Drag and Drop Dashboard</h1>
      <GridLayout
        style={{
          border: "1px solid #e4e4e4",
          borderRadius: "6px",
        }}
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
        margin={[10, 10]}
        containerPadding={[10, 10]}
        // onLayoutChange={() => console.log("layout has changed")}
      >
        <div
          key="a"
          style={{
            border: "1px solid grey",
            borderRadius: "6px",
          }}
        >
          Test
        </div>
        <div
          key="b"
          style={{
            border: "1px solid grey",
            borderRadius: "6px",
          }}
        >
          Test
        </div>
        <div
          key="c"
          style={{
            border: "1px solid grey",
            borderRadius: "6px",
          }}
        >
          Test
        </div>
      </GridLayout>
    </div>
  );
};

export default App;
