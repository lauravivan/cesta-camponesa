import { useTheme } from "../context/ThemeContext/useThemeContext";
import { DEFAULT_THEME, TOGGLE_THEME } from "../util";

export function ToggleBtn() {
  const theme = useTheme();

  const changeBodyTheme = () => {
    const body = document.body;

    if (body.classList.contains(DEFAULT_THEME)) {
      body.classList.remove(DEFAULT_THEME);
    } else {
      body.classList.remove(TOGGLE_THEME);
    }

    body.classList.add(theme.theme);
  };

  const handleBtnClick = () => {
    theme.toggleTheme();
    changeBodyTheme();
  };

  return (
    <button onClick={handleBtnClick}>
      <div></div>
    </button>
  );
}
