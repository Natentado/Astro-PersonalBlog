import style from "./style.module.scss";
import LightThemeIcon from "@assets/icon-sun.svg";
import DarkThemeIcon from "@assets/icon-moon.svg";

const ThemeToogle = () => {

    return (
        <button class={style.themeToogle}>
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