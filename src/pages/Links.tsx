import React from 'react';
import {Button,Box} from "@mui/material";

type LinksProps = {
    links: {link:string,description:string}[];
};

export function Links({links}: LinksProps) {
    return (
        <Box
            sx={{
                display: 'grid',
                columnGap: 3,
                rowGap: 1,
                gridTemplateColumns: 'repeat(6, 1fr)',


            }}
        >
            {links.map(({link, description}) =>
                (<Button sx={{p: 2,border: '1px solid grey',}} href={link} target="_blank" rel="noreferrer">
                    {description}
                </Button>))}
        </Box>



    )
}
