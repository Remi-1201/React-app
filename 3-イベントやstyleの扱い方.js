// App.js
import React from "react";

const App = () => {
  const onClickButton = () => alert();

  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };
  // Styleはhtml文の中に書くか、このようにconstで定義する

  return (
    <>
      <h1 style={{ color: "red" }}>Hello</h1>
      {/* The outside {} declares Javascript, the in side {} declares an Object of Js */}

      <p style={contentStyle}>How are you?</p>
      {/* 上記の[const contentStyle] */}

      <button onClick={onClickButton}>Button</button>
    </>
  );
};

export default App;
