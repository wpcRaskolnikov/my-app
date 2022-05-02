import React from "react";

const propTypes = {
    href: ["https://docs.docker.com/","https://vuepress.mirror.docker-practice.com/"],
};

export function Docker() {

    return (
        <div>
            <h1>Docker</h1>
            <ul>
                <li><a href={propTypes.href[0]} target="_blank" rel="noreferrer">Docker文档</a></li>
                <li><a href={propTypes.href[1]} target="_blank" rel="noreferrer">Docker从入门到精通</a></li>
                <li><a href="https://hub.docker.com/" target="_blank" rel="noreferrer">Docker仓库</a></li>
            </ul>
        </div>
    )
}
