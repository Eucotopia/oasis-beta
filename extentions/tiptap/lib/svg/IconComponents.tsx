import {
    Bold,
    BulletList,
    CodeBlock, Columns,
    H1,
    H2,
    H3, Horizontal, Image_User,
    NumberList,
    Paragraph,
    QuoteLeft, Table, TableOfContent,
    TaskList
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
    "Bold": <Bold/>
};

export default IconComponentsMap;
