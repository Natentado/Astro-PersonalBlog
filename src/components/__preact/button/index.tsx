import style from "./styles.module.scss";
import type { JSX } from 'preact';
import type { ReactNode } from "preact/compat";

interface IButton extends JSX.InputHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
};

const Button = (props: IButton) => {

    return (
        <button {...props} class={`text-preset-6 ${style.button}`} >
            {props.children}
        </button>
    )
};

export default Button;