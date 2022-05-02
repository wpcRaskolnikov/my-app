import React from 'react';
import {Link} from "react-router-dom";

export function Home() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="linux">Linux</Link></li>
                    <li><Link to="cryptography">Cryptography</Link></li>
                    <li><Link to="movie">Movie</Link></li>
                    <li><Link to="web">Web</Link></li>
                    <li><Link to="docker">Docker</Link></li>
                    <li><Link to="tools">Tools</Link></li>
                </ul>
            </nav>
            <h1>Home</h1>
        </div>
    )
}
