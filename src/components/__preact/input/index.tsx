import style from "./styles.module.scss";
import { useState } from 'preact/hooks';
import IconError from "@assets/icon-error.svg"; 
import IconSuccess from "@assets/icon-error.svg"; 
import type { JSX } from 'preact';

interface IInput extends JSX.InputHTMLAttributes<HTMLInputElement> {};

type StatusProps = "valid" | "error" | undefined;

const Input = (props: IInput) => {
    const [status, setStatus] = useState<StatusProps>(undefined);
    
    return (
        <label 
            htmlFor="emailAddress" 
            class={`text-preset-7 ${style.input} ${style[status as "valid" | "error"]??""}`}
        >
            Email Address
            <input 
                {...props} 
                id="emailAddress"
                name="emailAddress"
                class="text-preset-7"
                placeholder="email@example.com"
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