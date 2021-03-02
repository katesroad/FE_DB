import * as React from "react";
import { Button } from "components/lib";
import { useTheme, THEME_MODE } from "context/theme.context";

export default function AppHeader() {
  const [mode, setMode] = useTheme();
  const { light, dark } = THEME_MODE;
  const handleClick = () => {
    mode === light ? setMode(dark) : setMode(light);
    return false;
  };
  return (
    <header>
      <Button onClick={handleClick}>{mode}</Button>
    </header>
  );
}
