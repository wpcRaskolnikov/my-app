import React from 'react';
import {Drawer, Toolbar, List, ListItem,ListItemButton,ListItemIcon} from "@mui/material";
import {School} from '@mui/icons-material';
import {Link} from "react-router-dom";

type HomeProps = {
    links: String[];
};

export function Home({links}: HomeProps) {
    return (
        <div className="pure-menu pure-menu-horizontal">

            <ul>
                <li>
                    {links.map((i)=>(
                        <Link to={i as string} className="pure-menu-link">{i}</Link>))}</li>
            </ul>
            <h1>Home</h1>
        </div>

    )
}
