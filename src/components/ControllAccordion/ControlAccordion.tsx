import React, {FC, useState} from "react";

export type ControlAccordionType = {
    title: string
    collapsed: boolean
}

export const ControlAccordion: FC<ControlAccordionType> = ({title, collapsed}) => {
    console.log('ControlAccordion rendering')

    return (
        <div>
            <AccordionTitle title={title} />
            {collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitleProps = {
    title: string
    onClick?: () => void
}

const AccordionTitle: FC<AccordionTitleProps> = ({title, onClick}) => {
    console.log('AccordionTitle rendering')

    return <h3 onClick={onClick}>{title}</h3>
}

const AccordionBody = () => {
    console.log('AccordionBody')

    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

