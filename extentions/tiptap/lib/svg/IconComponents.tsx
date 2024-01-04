import {BulletList, H1, H2, H3, NumberList, Paragraph, TaskList} from "@/extentions/tiptap/lib/svg/icon";
import React from "react";

interface IconComponentsMapType {
    [key: string]: React.ReactNode;
}

const IconComponentsMap: IconComponentsMapType = {
    "H1": <H1/>,
    "H2": <H2/>,
    "H3": <H3/>,
    "Paragraph": <Paragraph/>,
    "bulletList": <BulletList/>,
    "TaskList": <TaskList/>,
    "NumberList": <NumberList/>
};

export default IconComponentsMap;
