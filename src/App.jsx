import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Main from './components/Main/Main';
import OnePost from './components/OnePost/OnePost';
import './App.css';
import Header from './components/Header/Header';

function App() {
    return (
        <>
            <Header />
            <div className="app">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/posts/:id" element={<OnePost />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
