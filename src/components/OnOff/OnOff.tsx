import React, {FC} from 'react'
import styles from './OnOff.module.css'

export type OnOffType = {
    click: boolean
    onClick?: (click: boolean) => void
}

export const OnOff: FC<OnOffType> = ({click, onClick}) => {
    console.log('OnOff rendering!')
    const onPress = `${click && styles.green}`
    const offPress = `${!click && styles.red}`
    const circle = `${click ? styles.green : styles.red}`

    const onPressHandler = () => onClick && onClick(true)
    const offPressHandler = () => onClick && onClick(false)

    return (
        <div className={styles.wrapper}>
            <div className={styles.on_off_wrapper}>
                <div className={`${styles.on_off} ${onPress}`} onClick={onPressHandler}>On</div>
                <div className={`${styles.on_off} ${offPress}`} onClick={offPressHandler}>Off</div>
                <div className={`${styles.circle} ${circle}`}></div>
            </div>
        </div>
    )
}