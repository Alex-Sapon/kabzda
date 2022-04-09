import React, {ChangeEvent, useRef, useState} from 'react'

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