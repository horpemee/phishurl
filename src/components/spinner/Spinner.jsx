import React from "react";
import "./spinner.scss";

import { RotatingLines } from "react-loader-spinner";

function Spinner() {
  return (
    <div className="spinner">
      <RotatingLines strokeColor="#ccc" strokeWidth="3" visible={true} />
    </div>
  );
}
export default Spinner;
