import React, {FC} from 'react';
import {FaStar} from 'react-icons/fa';

type StarPropsType = {
    select: boolean
    /**
     * Universal callback
     */
    onClick?: () => void
}

export const Star: FC<StarPropsType> = ({select, onClick}) => {
    console.log('Star rendering')

    return <FaStar color={select ? 'gold' : 'grey'} onSelect={onClick}/>
}