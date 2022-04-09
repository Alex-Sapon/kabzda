import React, {FC} from 'react'

export type ItemType = {
    title: string
    value: number
}

export type AccordionBodyType = {
    items: ItemType[]
    onClick: (value: number) => void
}

export const AccordionBody: FC<AccordionBodyType> = ({items, onClick}) => {
    console.log('AccordionBody')

    return (
        <ul>
            {items.map((item, i) =>
                <li onClick={() => onClick(item.value)} key={i}>{item.title}</li>
            )}
        </ul>
    );
}