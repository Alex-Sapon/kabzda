import React, {FC, useState} from 'react'
import styles from './UncontrollOnOff.module.css'

export type UncontrolOnOffType = {
    click: boolean
    onClick?: (click: boolean) => void
}

export const UncontrolOnOff: FC<UncontrolOnOffType> = ({click, onClick}) => {
    console.log('UncontrolOnOff rendering!')
    const [on, setOn] = useState<boolean>(click)

    const onPress = `${on && styles.green}`
    const offPress = `${!on && styles.red}`
    const circle = `${on ? styles.green : styles.red}`

    const setOnHandler = () => {
        setOn(true)
        onClick && onClick(on)
    }

    const setOffHandler = () => {
        setOn(false)
        onClick && onClick(on)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.on_off_wrapper}>
                <div onClick={setOnHandler} className={`${styles.on_off} ${onPress}`}>On</div>
                <div onClick={setOffHandler} className={`${styles.on_off} ${offPress}`}>Off</div>
                <div className={`${styles.circle} ${circle}`}></div>
            </div>
        </div>
    )
}
