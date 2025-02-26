import style from "./style.module.scss";
import Input, { type StatusProps } from "@components/__preact/input";
import Button from "@components/__preact/button";
import { useState, type FormEvent } from "preact/compat";

const Form = () => {
    const [ isPending, setIsPending ] = useState(false);
    const [ status, setStatus ] = useState<StatusProps>(undefined);

    async function subscribe() {
        return new Promise(_ => {
            setTimeout(() => {
                setIsPending(false);
                return setStatus("valid");
            }, 1000);
        });
    }

    const formSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsPending(true);
        const formElement = e.target as HTMLFormElement;
        const formData = new FormData(formElement);
        const emailAddress = formData.get("emailAddress") as string;

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
        if(!emailAddress || !emailRegex.test(emailAddress)){
            setIsPending(false);
            return setStatus("error");
        };

        return await subscribe();
    };

    return (
        <form class={style.form} onSubmit={e => formSubmit(e)}>
            <Input 
                disabled={!!isPending} 
                status={status} 
                setStatus={setStatus} 
            />
            <Button disabled={!!isPending} type="submit">
                Stay updated
            </Button>
        </form>
    )
};

export default Form;