import { useState } from "react";

export function Color() {
  let [color, setColor] = useState(["orange"]);

  const styles = {
    background: color
  };
  let [colorList, setColorList] = useState(["orange", "blue", "red"]);
  return (
    <div>
      <input
        style={styles}
        onChange={(event) => setColor(event.target.value)}
        value={color}
      />
      <button onClick={() => setColorList([...colorList, color])}>click</button>
      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}
      {/* <button onClick={() => setColor(color)}>click </button>
      <ColorBox data={setColor} /> */}
      {/* <button onClick={() => setColor([...color])}>click</button>
      {setColor.map((clr) => (
        <ColorBox color={clr} />
      ))} */}
    </div>
  );
}
export function ColorBox({ color }) {
  const sty = {
    width: "250px",
    height: "25px",
    background: color
  };
  return <div style={sty}></div>;
}
