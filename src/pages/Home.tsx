import React from 'react';
import {Drawer, Toolbar, List, ListItem,ListItemButton,ListItemIcon} from "@mui/material";
import {School} from '@mui/icons-material';
import {Link} from "react-router-dom";

type HomeProps = {
    links: String[];
};

export function Home({links}: HomeProps) {
    return (
        <Drawer variant="permanent" open={true}>
            <Toolbar/>
            <List>
                {links.map((i) => (
                    <ListItemButton component="a" sx={{p: 2, border: '1px grey',}} href={i as string}>
                        {i}
                    </ListItemButton>
                ))}
                <ListItem>
                <ListItemButton  sx={{p: 2, border: '1px grey',}}>
                    <Link to="cryptography">abc</Link>
                </ListItemButton>
                <ListItemIcon>
                    <School/>
                </ListItemIcon>
                </ListItem>
            </List>

        </Drawer>

    )
}
