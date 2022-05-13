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
                    <ListItemButton component={Link}  to={i as string} sx={{p: 2, border: '1px grey',}}>
                        {i}
                    </ListItemButton>
                ))}
                <ListItem>
                    <ListItemIcon>
                        <School/>
                    </ListItemIcon>
                <ListItemButton  sx={{p: 2, border: '1px grey',}} href="cryptography">
                   abc
                </ListItemButton>
                </ListItem>
            </List>

        </Drawer>

    )
}
