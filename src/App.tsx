import React from 'react';
import './App.css';
import {ControlAccordion} from "./components/ControllAccordion/ControlAccordion";
import {UncontrolRating} from "./components/UncontrollRating/UncontrollRating";
import {ControlOnOff} from './components/ControllOnOff/ControlOnOff'
import {UncontrollOnOff} from './components/UncontrollOnOff/UncontrollOnOff'
import {Rating} from './components/Rating/Rating'
import {UncontrollAccordion} from './components/UncontrollAccordion/UncontrollAccordion'

const App = () => {
    console.log('App rendering')
    return (
        <div>
            <PageTitle title={"This is App component"}/>

            <ControlAccordion title={"Menu"} collapsed={true}/>
            <UncontrollAccordion title={"Users"} />

            <Rating star={5} value={4}/>
            <UncontrolRating/>

            <ControlOnOff clicked={true}/>
            <UncontrollOnOff />
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
