import style from "./styles.module.scss";
import IconError from "@assets/icon-error.svg"; 
import IconSuccess from "@assets/icon-success.svg"; 
import type { JSX } from 'preact';
import type { SetStateAction } from "preact/compat";
import type { Dispatch } from "preact/hooks";

export type StatusProps = "valid" | "error" | undefined;

interface IInput extends JSX.InputHTMLAttributes<HTMLInputElement> {
    status: StatusProps;
    setStatus: Dispatch<SetStateAction<StatusProps>>
};

const Input = ({status, setStatus, ...rest}: IInput) => {
    
    return (
        <label 
            htmlFor="emailAddress" 
            class={`text-preset-7 ${style.input} ${style[status as "valid" | "error"]??""}`}
        >
            Email Address
            <input 
                {...rest} 
                id="emailAddress"
                name="emailAddress"
                class="text-preset-7"
                placeholder="email@example.com"
                onFocus={() => setStatus(undefined)}
            />
            {!!status ?
                <span className="text-preset-8">
                    <img 
                        src={status === "valid" ? IconSuccess.src : IconError.src} 
                        width={14} 
                        height={18} 
                    />
                    {status === "valid" ? 
                        "You’re subscribed! Check your inbox for updates." 
                        : "Please enter a valid email address."
                    }
                </span>
                : null
            }
        </label>
    )
};

export default Input;