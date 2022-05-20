import React from 'react';
import {Routes,Route} from "react-router-dom";
import {Home} from "./pages/Home";
import './App.css';
import {
     CryptographyPage,  ToolsPage, NewsPage,
    SchoolPage, PDFPage,  PicturePage,
    FunPage,   GamePage, ComputerPage, ResourcePage
} from "./pages/Pages";

const links=[
    "resource","books","computer","cryptography","fun","game",
    "news","pdf","picture","school","tools",
    ];

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/"  element={<Home links={links}/>}/>
                <Route path="/cryptography" element={<CryptographyPage/>}/>
                <Route path="/tools" element={<ToolsPage/>}/>
                <Route path="/news" element={<NewsPage/>}/>
                <Route path="/picture" element={<PicturePage/>}/>
                <Route path="/school" element={<SchoolPage/>}/>
                <Route path="/pdf" element={<PDFPage/>}/>
                <Route path="/fun" element={<FunPage/>}/>
                <Route path="/game" element={<GamePage/>}/>
                <Route path="/computer" element={<ComputerPage/>}/>
                <Route path="/resource" element={<ResourcePage/>}/>
            </Routes>
        </div>
    );
}

export default App;
