import React from 'react';
import {Button, ButtonGroup} from "@mui/material";

type LinksProps = {
    links: {link:string,description:string}[];
};

export function Links({links}: LinksProps) {
    return (
        <ButtonGroup>
            {links.map(({link, description}) =>
                (<Button href={link} target="_blank" rel="noreferrer">
                      {description}
                </Button>))}
        </ButtonGroup>


    )
}
