import React from 'react';
import {Routes,Route} from "react-router-dom";
import {Home} from "./pages/Home";
import './App.css';
import {
     CryptographyPage, WebPage, MoviePage, ToolsPage, NewsPage,
    SchoolPage, PDFPage,  PicturePage, SearchPage,
    FunPage,   GamePage, ComputerPage, ResourcePage
} from "./pages/Pages";

const links=[
    "resource","books","computer","cryptography","fun","game","movie",
    "news","pdf","picture","school","search","tools", "web",
    ];

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/"  element={<Home links={links}/>}/>
                <Route path="/cryptography" element={<CryptographyPage/>}/>
                <Route path="/movie" element={<MoviePage/>}/>
                <Route path="/web" element={<WebPage/>}/>
                <Route path="/tools" element={<ToolsPage/>}/>
                <Route path="/news" element={<NewsPage/>}/>
                <Route path="/picture" element={<PicturePage/>}/>
                <Route path="/school" element={<SchoolPage/>}/>
                <Route path="/pdf" element={<PDFPage/>}/>
                <Route path="/search" element={<SearchPage/>}/>
                <Route path="/fun" element={<FunPage/>}/>
                <Route path="/game" element={<GamePage/>}/>
                <Route path="/computer" element={<ComputerPage/>}/>
                <Route path="/resource" element={<ResourcePage/>}/>
            </Routes>
        </div>
    );
}

export default App;
