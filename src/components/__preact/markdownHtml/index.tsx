import style from "./style.module.scss";

const MarkdownHTML = ({markdown}: {markdown: string}) => {

    return (
        <div 
            dangerouslySetInnerHTML={{__html: markdown}} 
            class={style.markdownHtml}
        />
    )
};

export default MarkdownHTML