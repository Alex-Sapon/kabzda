import React, {FC, useState} from "react";
import {AccordionBody, ItemType} from '../AccordionBody/AccordionBody';
import {AccordionTitle} from '../AccordionTitle/AccordionTitle';

export type UncontrollAccordionType = {
    title: string
    items: ItemType[]
    onClick?: (value: number) => void
}

export const UncontrollAccordion: FC<UncontrollAccordionType> = ({title, items, onClick}) => {
    console.log('UncontrollAccordion rendering')
    const [collapse, setCollapse] = useState<boolean>(false)

    return (
        <div>
            <AccordionTitle title={title} callBack={() => setCollapse(!collapse)}/>
            {collapse && <AccordionBody onClick={onClick!} items={items}/>}
        </div>
    )
}

