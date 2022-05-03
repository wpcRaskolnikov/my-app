import React from 'react';
import './../skeleton.css'

type LinksProps = {
    links: {link:string,description:string}[];
};

export function Links({links}: LinksProps) {
    return (
        <div>
            <nav className="container">
                {links.map(({link, description}) =>
                    (<a href={link} target="_blank" rel="noreferrer" className="two columns">{description}</a>))}
            </nav>
        </div>
    )
}
