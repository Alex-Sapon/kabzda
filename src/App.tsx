import React from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {UncontrolRating} from './components/UncontrollRating/UncontrollRating';
import {OnOff} from './components/OnOff/OnOff'
import {UncontrolOnOff} from './components/UncontrollOnOff/UncontrollOnOff'
import {Rating} from './components/Rating/Rating'
import {UncontrollAccordion} from './components/UncontrollAccordion/UncontrollAccordion'

const App = () => {
    console.log('App rendering')
    const items = [
        {title: 'Sasha', value: 1},
        {title: 'Kate', value: 2},
        {title: 'Illya', value: 3}
    ]

    return (
        <div>
            <PageTitle title={'This is App component'}/>

            <Accordion items={items} title={'Menu'} collapsed={true}/>
            <UncontrollAccordion items={items} title={'Users'}/>

            <Rating star={5} value={4}/>
            <UncontrolRating/>

            <OnOff click={true}/>
            <UncontrolOnOff click={true}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

const PageTitle = (props: PageTitlePropsType) => {
    console.log('PageTitle rendering')

    return <h1>{props.title}</h1>
}

export default App;
