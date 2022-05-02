import React from 'react';
import {Routes,Route} from "react-router-dom";
import {Home} from "./pages/Home";
import './App.css';
import {Linux} from "./pages/Linux";
import {Cryptography} from "./pages/Cryptography";
import {Movie} from "./pages/Movie";
import {Web} from "./pages/Web";
import {Docker} from "./pages/Docker";
import {Tools} from "./pages/Tools";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/"  element={<Home/>}/>
                <Route path="/linux" element={<Linux/>}/>
                <Route path="/cryptography" element={<Cryptography/>}/>
                <Route path="/movie" element={<Movie/>}/>
                <Route path="/web" element={<Web/>}/>
                <Route path="/docker" element={<Docker/>}/>
                <Route path="/tools" element={<Tools/>}/>
            </Routes>
        </div>
    );
}

export default App;
