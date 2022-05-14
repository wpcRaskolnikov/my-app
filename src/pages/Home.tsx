import React from 'react';
import {Drawer, Toolbar, List, ListItem,ListItemButton,ListItemIcon,
    IconButton,Typography,Box,AppBar} from "@mui/material";
import { School} from '@mui/icons-material';
import {Link} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

type HomeProps = {
    links: String[];
};

export function Home({links}: HomeProps) {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <Box >
            <AppBar position="fixed">
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerOpen}
                    sx={{ mr: 2, ...(open && { display: 'none' }) }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    Persistent drawer
                </Typography>
            </Toolbar>
            </AppBar>
        <Drawer variant="persistent" anchor="right" open={open}>

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
        </Box>
    )
}
