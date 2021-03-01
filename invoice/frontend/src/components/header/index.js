import * as React from "react";
import { Button } from "components/lib";

export default function AppHeader() {
  const [mode, setMode] = React.useState("light");
  const handleClick = () => {
    mode === "dark" ? setMode("light") : setMode("dark");
  };
  React.useEffect(() => {
    document.body.dataset.theme = mode;
  }, [mode]);
  return (
    <header>
      <Button onClick={handleClick}>{mode}</Button>
    </header>
  );
}
