import { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";

function ToggleThemeButton() {
    const { toggleTheme } = useContext(ThemeContext);

    return (       
        <button onClick={toggleTheme}>teste</button>
    )
  }
  
export default ToggleThemeButton
  