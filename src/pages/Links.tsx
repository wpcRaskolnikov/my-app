import React from 'react';

type LinksProps = {
    links: {link:string,description:string}[];
};

export function Links({links}: LinksProps) {
    return (
        <div>
            <nav className="pure-g">
                {links.map(({link, description}) =>
                    (<a href={link} target="_blank" rel="noreferrer" className="pure-u-1-6">{description}</a>))}
            </nav>
        </div>
    )
}
