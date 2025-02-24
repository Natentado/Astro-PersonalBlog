import { useState } from "preact/hooks";
import style from "./style.module.scss";

const MenuToogle = () => {
    const [ menuStatus, setMenuStatus ] = useState<boolean>(false);

    return (
        <>
            <button
                id="menu"
                aria-label="Hamburguer menu icon"
                class={`${style.mobileHeader} ${menuStatus ? style.menuOpened : ""}`} 
                onClick={() => setMenuStatus(!menuStatus)}
            >
                {!menuStatus ? 
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 10h15m-15-5h15m-15 10h15"/></svg> 
                    : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 5 5 15M5 5l10 10"/></svg>
                }
            </button>
            {menuStatus &&
                <nav class={style.mobileNav}>
                    <a href="/" class="text-preset-7">
                        Home
                    </a>
                    <a href="/blog" class="text-preset-7">
                        Blog
                    </a>
                    <a href="/about" class="text-preset-7">
                        About
                    </a>
                    <a href="/newsletter" class="text-preset-7">
                        Newsletter
                    </a>
                </nav>
            }
        </>
    )
};

export default MenuToogle;