import React from 'react';
import {Link} from "react-router-dom";
import '../css/purecss/grids.css';

type HomeProps={
  links:String[];
};

export function Home({links}:HomeProps) {
    return (
        <div>
            <nav className="pure-g">
                {links.map((i)=>(<Link to={i as string} className="pure-u-1-6">{i}</Link>))}
            </nav>
            <h1>Home</h1>
        </div>
    )
}
