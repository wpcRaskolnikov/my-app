import React from 'react';
import {Routes,Route} from "react-router-dom";
import {Home} from "./pages/Home";
import './App.css';
import {LinuxPage, CryptographyPage, WebPage, DockerPage, MoviePage, ToolsPage,
    NewsPage, BooksPage, SchoolPage, PDFPage, JavaPage, PicturePage,WorkbooksPage,
    SearchPage,FunPage,MusicPage} from "./pages/Pages";

const links=["cryptography","linux","movie","web","docker","tools","news","picture","school","pdf","java",
"workbooks","search","fun","music"];

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/"  element={<Home links={links}/>}/>
                <Route path="/linux" element={<LinuxPage/>}/>
                <Route path="/cryptography" element={<CryptographyPage/>}/>
                <Route path="/movie" element={<MoviePage/>}/>
                <Route path="/web" element={<WebPage/>}/>
                <Route path="/docker" element={<DockerPage/>}/>
                <Route path="/tools" element={<ToolsPage/>}/>
                <Route path="/news" element={<NewsPage/>}/>
                <Route path="/books" element={<BooksPage/>}/>
                <Route path="/picture" element={<PicturePage/>}/>
                <Route path="/school" element={<SchoolPage/>}/>
                <Route path="/pdf" element={<PDFPage/>}/>
                <Route path="/java" element={<JavaPage/>}/>
                <Route path="/workbooks" element={<WorkbooksPage/>}/>
                <Route path="/search" element={<SearchPage/>}/>
                <Route path="/fun" element={<FunPage/>}/>
                <Route path="/music" element={<MusicPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
