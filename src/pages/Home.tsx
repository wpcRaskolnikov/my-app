import React from 'react';
import {Drawer, Toolbar, List, ListItem,ListItemButton,ListItemIcon} from "@mui/material";
import {School} from '@mui/icons-material';

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
                <ListItemButton component="a" sx={{p: 2, border: '1px grey',}} href="cryptography">
                    abc
                </ListItemButton>
                <ListItemIcon>
                    <School/>
                </ListItemIcon>
                </ListItem>
            </List>

        </Drawer>

    )
}
