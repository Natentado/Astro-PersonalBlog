const MarkdownHTML = ({markdown}: {markdown: string}) => {

    return <div dangerouslySetInnerHTML={{__html: markdown}} />
};

export default MarkdownHTML