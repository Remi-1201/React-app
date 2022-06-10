import React from "react";
import App from "../App";

// 引数の名前は任意的である
// props = {color: "blue", message: "How are you?"} (imported from App.js)
const ColorfulMessage = (props) => {
  // 分割代入
  const { color, children } = props;
  const contentStyle = {
    // [color: props.color] is imported from App.js
    // 分割代入のため [props.] も不要
    // [color: color,] = [color,]
    color,
    fontSize: "18px"
  };

  // Use {} when write javascript
  return <p style={contentStyle}>{children}</p>;
  // [children] = props's 2 lines of text
};

export default ColorfulMessage;
