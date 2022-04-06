import React, {FC, useState} from "react";

type UncontrollAccordionType = {
    title: string
}

export const UncontrollAccordion: FC<UncontrollAccordionType> = ({title}) => {
    console.log('UncontrollAccordion rendering')
    const [collapse, setCollapse] = useState<boolean>(false)

    return (
        <div>
            <AccordionTitle title={title} onClick={() => setCollapse(!collapse)}/>
            {collapse && <AccordionBody/>}
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

