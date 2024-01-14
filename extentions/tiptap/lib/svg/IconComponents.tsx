import {
    Bold,
    BulletList,
    CodeBlock, Columns,
    H1,
    H2,
    H3, Highlighter, Horizontal, Image_User, Italic, Link,
    NumberList,
    Paragraph,
    QuoteLeft, Strikethrough, Table, TableOfContent,
    TaskList, Underline
} from "@/extentions/tiptap/lib/svg/icon";
import React from "react";

interface IconComponentsMapType {
    [key: string]: React.ReactNode;
}

const IconComponentsMap: IconComponentsMapType = {
    "H1": <H1/>,
    "H2": <H2/>,
    "H3": <H3/>,
    "Paragraph": <Paragraph/>,
    "BulletList": <BulletList/>,
    "TaskList": <TaskList/>,
    "NumberList": <NumberList/>,
    "QuoteLeft": <QuoteLeft/>,
    "CodeBlock": <CodeBlock/>,
    "Table": <Table/>,
    "Image": <Image_User/>,
    "Columns": <Columns/>,
    "Horizontal": <Horizontal/>,
    "TableOfContent": <TableOfContent/>,
    "Bold": <Bold/>,
    "Italic": <Italic/>,
    "Underline": <Underline/>,
    "Strikethrough": <Strikethrough/>,
    "Link": <Link/>,
    "Highlighter": <Highlighter/>
};

export default IconComponentsMap;
