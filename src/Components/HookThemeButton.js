import { useContext } from "react";
import ThemeContext from "./ThemeContext";
import { Button } from "@mui/material";

// コンテキストの取得
const HookThemeButton = () => {
  const { mode, toggleMode } = useContext(ThemeContext);
  return (
    <Button variant="contained" onClick={toggleMode}>
      mode:{mode}
    </Button>
  );
};

export default HookThemeButton;
