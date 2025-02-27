import style from "./styles.module.scss";
import type { JSX } from 'preact';
import type { ReactNode } from "preact/compat";

interface IButton extends JSX.InputHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
};

const Button = ({children, ...rest}: IButton) => {

    return (
        <button {...rest} class={`text-preset-6 ${style.button}`}>
            {children}
        </button>
    )
};

export default Button;