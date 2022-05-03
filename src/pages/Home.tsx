import React from 'react';
import {Link} from "react-router-dom";
import './../skeleton.css'

type HomeProps={
  links:String[];
};

export function Home({links}:HomeProps) {
    return (
        <div>
            <nav className="container">
                {links.map((i)=>(<Link to={i as string} className="two columns">{i}</Link>))}
            </nav>
            <h1>Home</h1>
        </div>
    )
}
