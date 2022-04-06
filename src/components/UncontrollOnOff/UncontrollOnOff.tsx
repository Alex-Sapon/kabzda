import React, {FC, useState} from 'react'
import styles from './UncontrollOnOff.module.css'

type UncontrollOnOffType = {}

export const UncontrollOnOff: FC<UncontrollOnOffType> = () => {
    console.log('UncontrollOnOff rendering!')
    const [on, setOn] = useState<boolean>()

    const onPress = `${on && styles.green}`
    const offPress = `${!on && styles.red}`
    const circle = `${on ? styles.green : styles.red}`

    return (
        <div className={styles.wrapper}>
            <div className={styles.on_off_wrapper}>
                <div onClick={() => setOn(true)} className={`${styles.on_off} ${onPress}`}>On</div>
                <div onClick={() => setOn(false)} className={`${styles.on_off} ${offPress}`}>Off</div>
                <div className={`${styles.circle} ${circle}`}></div>
            </div>
        </div>
    )
}
