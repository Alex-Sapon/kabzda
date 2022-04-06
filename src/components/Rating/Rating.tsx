import React, {FC} from 'react';
import {Star} from '../Star/Star';

export type RatingType = {
    star: number
    value: number
}

export const Rating: FC<RatingType> = ({star, value}) => {
    console.log('Rating rendering')

    return (
        <div>
            {[...Array(star)].map((star, i) => <Star key={i} select={value > i}/>)}
        </div>
    )
}