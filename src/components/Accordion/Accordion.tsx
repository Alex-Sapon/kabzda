import React, {FC} from 'react';
import {AccordionBody, ItemType} from '../AccordionBody/AccordionBody';
import {AccordionTitle} from '../AccordionTitle/AccordionTitle';

export type AccordionType = {
    title: string
    collapsed: boolean
    items: ItemType[]
    onClick?: (value: number) => void
}

export const Accordion: FC<AccordionType> = ({title, collapsed, items, onClick}) => {
    console.log('ControlAccordion rendering')

    return (
        <div>
            <AccordionTitle title={title}/>
            {collapsed && <AccordionBody onClick={onClick!} items={items}/>}
        </div>
    )
}

