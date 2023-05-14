import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './header/Header.js';
import { Body1, Code, Environments, TeamRoles } from './body/Body.js';
import Footer from './footer/Footer.js';
import reportWebVitals from './reportWebVitals';
import SubjectMatter from './subjectMatter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Header />
        <Body1 />
        <br></br>
        <SubjectMatter />
        <br></br>
        <Code />
        <br></br>
        <Environments />
        <br></br>
        <TeamRoles />
        <br></br>
        <Footer />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
