// 5- add { useState }
import React, { useState } from "react";

// 4- add "How are you" components
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  // 5- setNum = Stateを変更するための関数名
  // 5- num = Stateとして使用する変数名
  // 5- useState(0) = num の初期値
  const [num, setNum] = useState(0);
  // 5- ボタン押すとStateを更新する関数
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  return (
    <>
      <h1 style={{ color: "red" }}>Hello</h1>

      {/* 4- "How are you" imported form the [ColorfulMessage] components */}
      <ColorfulMessage color="blue">How are you?</ColorfulMessage>
      {/* 4- color & message ect. = props */}

      <ColorfulMessage color="pink">I am fine, thanks!</ColorfulMessage>

      {/* 5- ボタンを押すと数値が変わる(State) */}
      <button onClick={onClickCountUp}>Count up</button>

      {/* 5- Stateのnumの初期値*/}
      <p>{num}</p>
    </>
  );
};

export default App;
