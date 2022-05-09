import React from 'react';
import {Routes,Route} from "react-router-dom";
import {Home} from "./pages/Home";
import './App.css';
import {Linux, Cryptography, Web, Docker, Movie, Tools, News, Books, School, PDF, Java, Picture} from "./pages/Pages";

const links=["cryptography","linux","movie","web","docker","tools","news","picture","school","pdf","java"];

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/"  element={<Home links={links}/>}/>
                <Route path="/linux" element={<Linux/>}/>
                <Route path="/cryptography" element={<Cryptography/>}/>
                <Route path="/movie" element={<Movie/>}/>
                <Route path="/web" element={<Web/>}/>
                <Route path="/docker" element={<Docker/>}/>
                <Route path="/tools" element={<Tools/>}/>
                <Route path="/news" element={<News/>}/>
                <Route path="/books" element={<Books/>}/>
                <Route path="/picture" element={<Picture/>}/>
                <Route path="/school" element={<School/>}/>
                <Route path="/pdf" element={<PDF/>}/>
                <Route path="/java" element={<Java/>}/>
            </Routes>
        </div>
    );
}

export default App;
