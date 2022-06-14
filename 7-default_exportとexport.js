// 1- Style 1 (recommented) ==================

// ColorfulMessage.jsx
const ColorfulMessage = (props) => {};
export default ColorfulMessage;
// App.jsx
import ColorfulMessage from "./components/ColorfulMessage";

// 2- Style 2 ==================

// ColorfulMessage.jsx
export const ColorfulMessage = (props) => {};
// App.jsx
import { ColorfulMessage } from "./components/ColorfulMessage";
