import { useState } from "react";

const UseDevLangState = () => {
  const [leftSide, setLeftSide] = useState({
    JS: false,
    HTML: false,
    CSS: false,
    TS: false
  });

  const [rightSide, setRightSide] = useState({
    React: false,
    Angular: false,
    Vue: false,
    Svelte: false
  });

  return {
    leftSide,
    setLeftSide,
    rightSide,
    setRightSide,
  };
};

export default UseDevLangState;
