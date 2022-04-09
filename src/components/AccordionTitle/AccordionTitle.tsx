import React, { FC } from 'react'

type AccordionTitleProps = {
    title: string
    callBack?: () => void
}

export const AccordionTitle: FC<AccordionTitleProps> = ({title, callBack}) => {
    console.log('AccordionTitle rendering')

    return <h3 onClick={callBack}>{title}</h3>
}