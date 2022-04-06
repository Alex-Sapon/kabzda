import React, {FC, useState} from "react";
import {FaStar} from 'react-icons/fa';

export type UncontrolRatingProps = {}

export const UncontrolRating: FC<UncontrolRatingProps> = () => {
    console.log('UncontrolRating rendering')
    const [select, setSelect] = useState<number>(0)

    return (
        <div> 
            {[...Array(5)].map((star, i) => 
                <Star key={i} select={select > i} onSelect={() => setSelect(i + 1)}/>
            )}
        </div>
    )
}

type StarPropsType = {
    select: boolean
    onSelect?: () => void
}

const Star: FC<StarPropsType> = ({select, onSelect}) => {
    console.log('Star rendering')

    return <FaStar color={select ? 'gold' : 'grey'} onClick={onSelect}/>
}