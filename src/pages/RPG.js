import React from 'react';
//import {Container, Row, Col } from 'react-bootstrap';
import ReadyPetGo from '../images/ReadyPetGo.png';

const RPG = () => {
    return(
        <div className='App-header'>
            <br/>
            <h1>Ready Pet Go</h1>
            <br/>
            <img alt="Manish" src={ReadyPetGo}/>
            <br/>
            <div className='text-left'>
                <h1>Project Details</h1>
                <p>Project: Developed in ACM Projects</p>
                <p>Tech Stack: Figma, Flutter, Firebase, Dart, Google Maps API</p>
                <p>Role: Frontend Developer, UI/UX Designer</p>
                <br/>
                <h1>Purpose/Prompt</h1>
                <p>Unsure if you’re ready to handle the responsibility of a pet? This app simulates life with a pet to 
                see if bringing home a furry friend is the right decision for you and your family!</p>
                <br/>
                <h1>Solution</h1>
                <p>Our solution was to create an application that would simulate the life and responsibilities of handling
                a pet. Specifically, the app will help users to learn not only what tasks are required to take care of a
                pet, but also how to do those tasks and apply those in real life.
                </p>
                <br/>
                <h1>Brainstorming Process</h1>
                <p>To start this project, me and my friends had to understand the prompt and analyze the goals in order
                to achieve that purpose. We also had to analyze what our audience would consist of. We deduced that most
                of the people that want a pet but do not fully know how to take care of one would be young kids, so our
                application had to be kid-friendly for our users.</p>
                <br/>
                <h1>Design</h1>
                <p>After brainstorming, me and my frontend partner designed wireframes using Figma.</p>
                <br/>
            </div>
            <br/>
        </div>
    );
}

export default RPG;