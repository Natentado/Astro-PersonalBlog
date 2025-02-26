import style from "./style.module.scss";
import LightThemeIcon from "@assets/icon-sun.svg";
import DarkThemeIcon from "@assets/icon-moon.svg";

const ThemeToogle = () => {

    const handleToggleClick = () => {
        const element = document.documentElement;
        element.classList.toggle("dark");
    
        const isDark = element.classList.contains("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
    };

    return (
        <button class={style.themeToogle} onClick={handleToggleClick}>
            <img 
                src={DarkThemeIcon.src}
                alt={`Toogle to ${"dark"} theme`}
                width={"18px"}
                height={"18px"}
            />
        </button>
    )
};

export default ThemeToogle;