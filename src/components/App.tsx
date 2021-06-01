import React from "react";
import { hot } from "react-hot-loader/root";
import Button from "@material-ui/core/Button"
import ToolTip from "@material-ui/core/Tooltip"

import "./style.css";

function App() {
  return (
    <ToolTip title="Click Me" arrow>  
      <Button variant="contained" color="primary">
        Hola
      </Button>
    </ToolTip>
  );
}

export default hot(App);
