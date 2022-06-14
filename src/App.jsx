// 5- add { useState }　6- add { useEffect }　components
import React, { useEffect, useState } from "react";

// 4- add "How are you" components
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("First");
  // 5- setNum = Stateを変更するための関数名
  // 5- num = Stateとして使用する変数名
  // 5- useState(0) = num の初期値
  const [num, setNum] = useState(0);

  // 6- 表示・非表示を扱うStateの定義,
  // 6- false = useStateの初期値  = 非表示
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  // 5- ボタン押すとStateを更新する関数
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  // 6- ボタン押すとuseStateを更新する関数
  const onClickSwitchShowFlag = () => {
    // 6- ! = reversed
    setFaceShowFlag(!faceShowFlag);
  };

  // 6- on/off && count 処理が conflict しないように
  useEffect(() => {
    // 6- click数が0ではない && 3の倍数の時だけ絵文字を表示
    if (num > 0) {
      if (num % 3 === 0) {
        // 6- Errors回避 = faceShowFlag が true の時だけ処理が実行される
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);
  // 6- [] = useEffect 関数の第二引数
  // 6- 中にある関数の引数を全部渡さないとエラーが起こる可能性あり、
  // ただ特定の関数の変更のみ見たくて、意図的に渡さない時もある (eslint)
  // 6- [] を空にすると最初の処理一回だけが通る

  return (
    <>
      <h1 style={{ color: "red" }}>Hello</h1>

      {/* 4- "How are you" imported form the [ColorfulMessage] components */}
      <ColorfulMessage color="blue">How are you?</ColorfulMessage>
      {/* 4- color & message ect. = props */}

      <ColorfulMessage color="pink">I am fine, thanks!</ColorfulMessage>

      {/* 5- ボタンを押すと数値が変わる(State) */}
      <button onClick={onClickCountUp}>Count up</button>
      <br />
      {/* 6- useEffectのためのボタン */}
      <button onClick={onClickSwitchShowFlag}>On / Off</button>

      {/* 5- Stateのnumの初期値*/}
      <p>{num}</p>
      {/* 6- useEffect*/}
      {/* 6- [&&] = faceShowFlag が True の場合、絵文字を表示する*/}
      {faceShowFlag && <p>( ﾟДﾟ)</p>}
    </>
  );
};

export default App;
