import React, {ChangeEvent, useRef, useState} from 'react'
import {action} from '@storybook/addon-actions';

export default {
    title: 'input',
    // component:
}

// const Template = () => <input/>

export const UncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value)

    return <><input onChange={onChangeHandler}/> Track value: {value}</>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const onClickHandler = () => setValue(inputRef.current!.value)

    return (
        <>
            <input ref={inputRef}/>
            <button onClick={onClickHandler}>save</button>
            Track value: {value}
        </>
    )
}

export const ControlledInputWidthFixedValue = () => <input value={'Hello'}/>

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState<string>('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={onChangeHandler}/>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState<boolean>(true)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }

    return <input type={'checkbox'} checked={parentValue} onChange={onChangeHandler}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string>('1')
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return (
        <select value={parentValue} onChange={onChangeHandler}>
            <option value="1">none</option>
            <option value="2">Minsk</option>
            <option value="3">Moscow</option>
            <option value="4">Kiev</option>
        </select>
    )
}