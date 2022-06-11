// 4- About props ===================
import React from "react";
import App from "../App";

// 4- 引数の名前は任意的である
// 4- props = {color: "blue", message: "How are you?"} (imported from App.js)
const ColorfulMessage = (props) => {
  // 4- 分割代入
  const { color, children } = props;
  const contentStyle = {
    // 4- [color: props.color] is imported from App.js
    // 4- 分割代入のため [props.] も不要
    // 4- [color: color,] = [color,]
    color,
    fontSize: "18px"
  };

  // 4- Use {} when write javascript
  return <p style={contentStyle}>{children}</p>;
  // 4- [children] = props's 2 lines of text
};

export default ColorfulMessage;
