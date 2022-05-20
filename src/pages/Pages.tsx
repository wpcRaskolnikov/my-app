import cryptographyLinks from "../data/cryptography.json";
import pictureLinks from "../data/picture.json";

import computerTabs from "../data/computer.json";
import funTabs from "../data/fun.json";
import gameTabs from "../data/game.json";
import newsTabs from "../data/news.json";
import pdfTabs from "../data/pdf.json";
import resourceTabs from "../data/resource.json";
import schoolTabs from "../data/school.json";
import toolsTabs from "../data/tools.json";


import React from "react";
import {Theme, SplitButtonOfMe, ButtonGroupOfMe, TabsOfMe} from "./Theme";
import {Box} from "@mui/material";

const CryptographySplit = [
    {
        "link": "https://the-x.cn/",
        "description": "the X工具箱"
    },
    {
        "link": "http://tool.bugku.com/",
        "description": "BugKu工具箱"
    },
    {
        "link": "http://www.hiencode.com/",
        "description": "ssl在线工具"
    },
    {
        "link": "https://gchq.github.io/CyberChef/",
        "description": "密码学工具箱"
    },
];

export function NewsPage() {

    return (
        <div>
            <h1>News</h1>
            <TabsOfMe tabs={newsTabs}/>
        </div>
    )
}

export function CryptographyPage() {
    return (
        <div>
            <h1>Cryptography</h1>
            <Box sx={{
                display: 'grid',
                columnGap: 3,
                rowGap: 1,
                gridTemplateColumns: 'repeat(6, 1fr)',
            }}>
                <ButtonGroupOfMe links={cryptographyLinks}/>
                <SplitButtonOfMe title="工具箱" links={CryptographySplit}/>
            </Box>
        </div>
    )
}

export function ToolsPage() {
    return (
        <div>
            <h1>Tools</h1>
            <TabsOfMe tabs={toolsTabs}/>
        </div>
    )
}

export function PicturePage() {
    return (
        <div>
            <h1>Picture</h1>
            <Theme links={pictureLinks}/>
        </div>
    )
}

export function SchoolPage() {
    return (
        <div>
            <h1>School</h1>
            <TabsOfMe tabs={schoolTabs}/>
        </div>
    )
}

export function PDFPage() {
    return (
        <div>
            <h1>PDF</h1>
            <TabsOfMe tabs={pdfTabs}/>
        </div>
    )
}

export function GamePage() {
    return (
        <div>
            <h1>Game</h1>
            <TabsOfMe tabs={gameTabs}/>
        </div>
    )
}

export function ResourcePage() {
    return (
        <div>
            <h1>Resource</h1>
            <TabsOfMe tabs={resourceTabs}/>
        </div>
    )
}

export function ComputerPage() {
    return (
        <div>
            <h1>Computer</h1>
            <TabsOfMe tabs={computerTabs}/>
        </div>
    )
}

export function FunPage() {
    return (
        <div>
            <h1>Fun</h1>
            <TabsOfMe tabs={funTabs}/>
        </div>
    )
}