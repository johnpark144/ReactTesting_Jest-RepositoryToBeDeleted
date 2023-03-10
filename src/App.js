import { useState } from "react";
import "./App.css";

export const replaceCamelWithSpaces = (colorName) => {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
};

function App() {
  const [btnColor, setBtnColor] = useState("MediumVioletRed");
  const [isDisabled, setIsDisabled] = useState(false);
  const newBtnColor =
    btnColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

  return (
    <div>
      <button
        disabled={isDisabled}
        onClick={() => setBtnColor(newBtnColor)}
        style={{ backgroundColor: isDisabled ? "gray" : btnColor }}
      >
        Change to {newBtnColor}
      </button>
      <input
        onChange={(e) => {
          setIsDisabled(e.target.checked);
        }}
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={isDisabled}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
