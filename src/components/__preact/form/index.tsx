import style from "./style.module.scss";
import Input from "@components/__preact/input";
import Button from "@components/__preact/button";
import { useState, type FormEvent } from "preact/compat";

const Form = () => {
    const [isPending, setIsPending] = useState(false)

    async function subscribe() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                setIsPending(false);
                resolve("OK");
            }, 1000);
        });
    }

    const formSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsPending(true);
        const formElement = e.target as HTMLFormElement;
        const formData = new FormData(formElement);

        return await subscribe();
    };

    return (
        <form class={style.form} onSubmit={e => formSubmit(e)}>
            <Input />
            <Button disabled={!!isPending} type="submit">
                Stay updated
            </Button>
        </form>
    )
};

export default Form;