import React, { useContext } from "react";
import { CatsContext } from "./CatsContext";

const ResetButton = () => {
  const { handleClick } = useContext(CatsContext);
  return (
    <button onClick={handleClick} className="btn">
      <i className="fas fa-window-restore"></i>
    </button>
  );
};

export default ResetButton;
