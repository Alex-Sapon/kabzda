import React, {FC, useState} from 'react'
import {ItemType} from '../AccordionBody/AccordionBody';

export type SelectType = {
    items: ItemType[]
    onClick: (value: number) => void
}

export const Select: FC<SelectType> = ({items, onClick}) => {
    const [item, setItem] = useState<string>(items[0].title)
    const [editMode, setEditMode] = useState<boolean>(false)

    const onClickHandler = () => setEditMode(!editMode)

    return (
        <div onClick={onClickHandler}>
            <div>{item}</div>
            {editMode && items.map((item, i) => {
                const onClickItemHandler = () => setItem(item.title)
                return <div onClick={onClickItemHandler} key={i}>{item.title}</div>
                }
            )}
        </div>
    );
}