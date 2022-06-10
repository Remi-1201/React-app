import React from "react";
import ReactDom from "react-dom";

const App = () => {
  return (
    // html will be put inside return();
    <>
      {/* without this <> or <React.Fragment> or <div> there will be errors */}
      <h1>Hello</h1>
      <p>How are you?</p>
    </>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
