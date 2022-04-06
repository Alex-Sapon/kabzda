import React, {FC} from 'react'
import styles from './ControllOnOff.module.css'

export type ControlOnOffType = {
    clicked: boolean
}

export const ControlOnOff: FC<ControlOnOffType> = ({clicked}) => {
    console.log('ControlOnOff rendering!')
    const onPress = `${clicked && styles.green}`
    const offPress = `${!clicked && styles.red}`
    const circle = `${clicked ? styles.green : styles.red}`

    return (
        <div className={styles.wrapper}>
            <div className={styles.on_off_wrapper}>
                <div className={`${styles.on_off} ${onPress}`}>On</div>
                <div className={`${styles.on_off} ${offPress}`}>Off</div>
                <div className={`${styles.circle} ${circle}`}></div>
            </div>
        </div>
    )
}