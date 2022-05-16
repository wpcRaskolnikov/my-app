import toolsLinks from "../data/tools.json";
import webLinks from "../data/web.json";
import cryptographyLinks from "../data/cryptography.json";
import dockerLinks from "../data/docker.json";
import movieLinks from "../data/movie.json";
import linuxLinks from "../data/linux.json";
import newsLinks from "../data/news.json";
import pictureLinks from "../data/picture.json";
import wallpaperLinks from "../data/wallpaper.json";
import booksLinks from "../data/books.json";
import schoolLinks from "../data/school.json";
import pdfLinks from "../data/pdf.json";
import javaLinks from "../data/java.json";
import workbooksLinks from "../data/workbooks.json";
import searchLinks from "../data/search.json";
import funLinks from "../data/fun.json";
import musicLinks from "../data/music.json";
import animeLinks from "../data/anime.json";
import gameLinks from "../data/game.json";
import computerLinks from "../data/computer.json";
import softwareLinks from "../data/software.json";

import React from "react";
import {Theme, MySplitButton, MyButtonGroup} from "./Theme";
import {Box} from "@mui/material";

const CryptographySplit = {
    "title": "工具箱",
    "links": [
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
    ]
};

export function NewsPage() {
    return (
        <div>
            <h1>News</h1>
            <Theme links={newsLinks}/>
        </div>
    )
}

export function WebPage() {
    return (
        <div>
            <h1>Web</h1>
            <Theme links={webLinks}/>
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
                <MyButtonGroup links={cryptographyLinks}/>
                <MySplitButton split={CryptographySplit}/>
            </Box>
        </div>
    )
}

export function DockerPage() {

    return (
        <div>
            <h1>Docker</h1>
            <Theme links={dockerLinks}/>
        </div>
    )
}

export function LinuxPage() {
    return (
        <div>
            <h1>Linux</h1>
            <Theme links={linuxLinks}/>
        </div>
    )
}

export function MoviePage() {
    return (
        <div>
            <h1>Movie</h1>
            <Theme links={movieLinks}/>
        </div>
    )
}

export function ToolsPage() {
    return (
        <div>
            <h1>Tools</h1>
            <Theme links={toolsLinks}/>
        </div>
    )
}

export function BooksPage() {
    return (
        <div>
            <h1>Books</h1>
            <Theme links={booksLinks}/>
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
            <Theme links={schoolLinks}/>
        </div>
    )
}

export function PDFPage() {
    return (
        <div>
            <h1>PDF</h1>
            <Theme links={pdfLinks}/>
        </div>
    )
}

export function JavaPage() {
    return (
        <div>
            <h1>Java</h1>
            <Theme links={javaLinks}/>
        </div>
    )
}

export function WorkbooksPage() {
    return (
        <div>
            <h1>Workbooks</h1>
            <Theme links={workbooksLinks}/>
        </div>
    )
}

export function GamePage() {
    return (
        <div>
            <h1>Game</h1>
            <Theme links={gameLinks}/>
        </div>
    )
}

export function AnimePage() {
    return (
        <div>
            <h1>Anime</h1>
            <Theme links={animeLinks}/>
        </div>
    )
}

export function ComputerPage() {
    return (
        <div>
            <h1>Computer</h1>
            <Theme links={computerLinks}/>
        </div>
    )
}

export function SearchPage() {
    return (
        <div>
            <h1>Search</h1>
            <Theme links={searchLinks}/>
        </div>
    )
}

export function FunPage() {
    return (
        <div>
            <h1>Fun</h1>
            <Theme links={funLinks}/>
        </div>
    )
}

export function MusicPage() {
    return (
        <div>
            <h1>Music</h1>
            <Theme links={musicLinks}/>
        </div>
    )
}

export function WallpaperPage() {
    return (
        <div>
            <h1>Wallpaper</h1>
            <Theme links={wallpaperLinks}/>
        </div>
    )
}

export function SoftwarePage() {
    return (
        <div>
            <h1>Software</h1>
            <Theme links={softwareLinks}/>
        </div>
    )
}