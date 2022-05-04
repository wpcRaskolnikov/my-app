import React from 'react';
import {Link} from "react-router-dom";
import '../css/purecss/base.css'
import '../css/purecss/grids.css';
import '../css/purecss/menus.css'

type HomeProps={
  links:String[];
};

export function Home({links}:HomeProps) {
    return (
            <div className="pure-menu pure-menu-horizontal">
                <ul className="pure-menu-list">
                        {links.map((i)=>(<li className="pure-menu-item">
                            <Link to={i as string} className="pure-menu-link">{i}</Link></li>))}
                </ul>
            <h1>Home</h1>
        </div>
    )
}
