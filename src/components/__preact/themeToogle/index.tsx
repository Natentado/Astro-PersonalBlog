import style from "./style.module.scss";
import LightThemeIcon from "@assets/icon-sun.svg";
import DarkThemeIcon from "@assets/icon-moon.svg";
import { useState } from "preact/hooks";

const ThemeToogle = () => {
    const [theme, setTheme] = useState(document.documentElement.classList.contains("dark") ? "dark" : "light");

    const handleToggleClick = () => {
        const element = document.documentElement;
        element.classList.toggle("dark");
    
        const isDark = element.classList.contains("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        return setTheme(isDark ? "dark" : "light");
    };

    return (
        <button class={style.themeToogle} onClick={handleToggleClick}>
            <img 
                src={theme === "light" ? DarkThemeIcon.src : LightThemeIcon.src}
                alt={`Toogle to ${theme} theme`}
                width={"18px"}
                height={"18px"}
            />
        </button>
    )
};

export default ThemeToogle;