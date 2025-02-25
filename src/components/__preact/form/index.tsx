import style from "./style.module.scss";
import Input from "@components/__preact/input";
import Button from "@components/__preact/button";

const Form = () => {

    return (
        <form class={style.form}>
            <Input />
            <Button>Stay updated</Button>
        </form>
    )
};

export default Form;