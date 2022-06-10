import React from "react";

// add "How are you" components
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();

  return (
    <>
      <h1 style={{ color: "red" }}>Hello</h1>

      {/* "How are you" imported form the [ColorfulMessage] components */}
      <ColorfulMessage color="blue">How are you?</ColorfulMessage>
      {/* color & message ect. = props */}

      <ColorfulMessage color="pink">I am fine, thanks!</ColorfulMessage>

      <button onClick={onClickButton}>Button</button>
    </>
  );
};

export default App;
