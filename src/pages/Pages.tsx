import React from "react";
import {Links} from "./Links";

const webLinks = [
    {link: "https://www.w3schools.com/", description: "w3schools"},
    {link: "https://validator.w3.org/", description: "html验证"},
    {link: "https://developer.mozilla.org/", description: "MDN"},
    {link: "https://nipponcolors.com/", description: "日本传统颜色"},
    {link: "https://www.color-hex.com/", description: "十六进制颜色"},
    {link: "https://www.webfx.com/web-design/color-picker/1F85DE/", description: "web颜色"},
    {link: "https://www.php.net/manual/", description: "php手册"},
    {link: "https://dev.mysql.com/doc/refman/5.7/en/", description: "MYSQL5.7手册"},
    {link: "https://babeljs.io/", description: "Babel"},
    {link: "http://www1.baiten.cn/", description: "佰腾专利库"},
    {link: "https://github.com/haixiangyan/make-wheels", description: "npm造轮子"},
    {link: "https://docs.xilinx.com/", description: "xilinx文档"},
    {link: "https://www.kinh.cc/", description: "IP工具箱"},
    {link: "https://www.jetbrains.com/help/idea/", description: "idea手册"},
    {link: "https://kangax.github.io/compat-table/esnext/", description: "next ES"},
];

const cryptographyLinks = [
    {link: "http://www.factordb.com/", description: "合数分解"},
    {link: "https://bbs.pediy.com/thread-253558.htm", description: "DES原理"},
    {link: "https://ithelp.ithome.com.tw/users/20140112/ironman/3930", description: "chen_yanlong"},
    {link: "https://ctf-wiki.github.io/ctf-wiki", description: "ctf维基"},
    {link: "https://ocw.mit.edu/", description: "OPEN MIT"},
    {link: "https://gchq.github.io/CyberChef/", description: "密码学工具箱"},
    {link: "https://gmssl.org/", description: "openssl"},
    {link: "https://the-x.cn/", description: "the X工具箱"},
];

const dockerLinks = [
    {link: "https://docs.docker.com/", description: "Docker文档"},
    {link: "https://vuepress.mirror.docker-practice.com/", description: "Docker从入门到精通"},
    {link: "https://hub.docker.com/", description: "Docker仓库"},
];

const movieLinks = [
    {link: "https://ddrk.me/", description: "低端影视"},
    {link: "https://www.agemys.com/", description: "AGE动漫"},
];

const linuxLinks = [
    {link: "https://deepinout.com/linux-kernel-api", description: "Linux内核api"},
    {link: "https://blog.csdn.net/jiuguaqiao6494/article/details/119482013", description: "errno定义"},
    {link: "https://www.cnblogs.com/keatonlao/p/12983158.html", description: "rime使用说明"},
    {link: "http://linasm.sourceforge.net/docs/", description: "Linux系统调用"},
    {link: "https://www.vimgolf.com/", description: "vim挑战"},
    {link: "https://www.linuxprobe.com/", description: "刘遄博客"},
    {link: "https://opensource.com/article/18/8/what-how-makefile", description: "Makefile基础"},
    {link: "https://linuxtools-rst.readthedocs.io/", description: "Linux Tools Quick Tutorial"},
    {link: "https://hackmd.io/@sysprog/SySTMXPvl", description: "Makefile语法"},
    {link: "https://docs.microsoft.com/zh-cn/cpp/linux/", description: "visual studio手册"},
];

const toolsLinks = [
    {link: "http://codeinword.com/", description: "代码美化"},
    {link: "https://www.fyan8.com/", description: "粤语学习"},
    {link: "https://www.aconvert.com/", description: "文档转换"},
    {link: "https://toonme.com/", description: "卡通化"},
    {link: "https://cli.im/", description: "二维码"},
    {link: "https://gitmind.cn/", description: "思维导图"},
    {link: "https://www.fuhaoku.net/", description: "符号库"},
    {link: "https://patorjk.com/software/taag/", description: "文本转ASCII"},
    {link: "https://home.unicode.org/", description: "Unicode"},
    {link: "https://jpsmile.com/davinci-resolve-studio-17", description: "Davinci"},
    {link: "https://jpsmile.com/xmind-2021/", description: "xmind"},
    {link: "https://sourceforge.net/", description: "开源软件"},
    {link: "https://www.cnblogs.com/xuanhao44/", description: "LaTex"},
    {link: "http://ip111.cn", description: "ip地址查询"},
    {link: "https://imginn.com/", description: "Instagram在线"},
    {link: "https://igfonts.io/", description: "Instagram字体"},
    {link: "https://next.itellyou.cn/", description: "操作系统镜像"},
    {link: "https://www.wcofun.com/", description: "英配番剧"},
    {link: "https://www.fosshub.com/", description: "软件下载"},
    {link: "https://www.geogebra.org/", description: "数学工具"},
    {link: "https://new-qk.lifves.com/", description: "期刊杂志"},
    {link: "https://pixelmap.amcharts.com/", description: "地图生成"},
];

const newsLinks = [
    {link: "https://www.theguardian.com/", description: "英国卫报"},
    {link: "http://www.stats.gov.cn/", description: "国家统计局"},
    {link: "https://language.chinadaily.com.cn/", description: "双语日报"},
    {link: "https://stackoverflow.com/", description: "stackoverflow"},
    {link: "https://www.cnnic.net.cn/", description: "CNNIC"},
    {link: "https://oi-wiki.org/", description: "算法维基"},
    {link: "https://www.questmobile.com.cn/", description: "Quest Mobile"},
    {link: "https://www.iplaysoft.com/", description: "异次元软件"},
    {link: "https://coolshell.cn//", description: "陈皓博客"},
    {link: "https://www.ruanyifeng.com", description: "阮一峰博客"},
    {link: "https://thewebdev.info/", description: "John Au-Yeung’s blog"},
    {link: "https://www.cnblogs.com/vamei/", description: "vamei’s blog"},
    {link: "https://yuc.wiki/", description: "新番介绍"},
    {link: "https://bangumi.tv/", description: "bangumi番组计划"},
];

const pictureLinks = [
    {link: "https://pixabay.com/", description: "pixbay"},
    {link: "http://pic.people.com.cn/", description: "人民网图片"},
    {link: "https://www.iconfont.cn/", description: "阿里巴巴矢量图"},
    {link: "https://storyset.com/", description: "storyset"},
    {link: "https://www.hpcbristol.net/", description: "历史老图片"},
    {link: "https://fotoforensics.com/", description: "鉴别图片是否PS"},
    {link: "https://graph.baidu.com/pcpage/index?tpl_from=pc", description: "百度识图"},
    {link: "https://bbs.huoying666.com/", description: "火萤壁纸"},
    {link: "https://wallpaperwaifu.com/", description: "waifu壁纸"},
    {link: "https://livewallp.com/", description: "livewallp壁纸"},
    {link: "https://www.livewallpaperpc.com/", description: "livewallpaper壁纸"},
    {link: "https://zhutix.com/", description: "致美儿壁纸"},
    {link: "https://livewallpaper.giantapp.cn/", description: "巨应壁纸"},
];

const booksLinks = [
    {link: "https://gaia.cs.umass.edu/kurose_ross/", description: "计算机网络"},
];

const schoolLinks = [
    {link: "https://www.zjlll.net/", description: "浙江学习网"},
    {link: "https://newjw.hdu.edu.cn", description: "杭电教务"},
];

export function News() {
    return (
        <div>
            <h1>News</h1>
            <Links links={newsLinks}/>
        </div>
    )
}

export function Web() {
    return (
        <div>
            <h1>Web</h1>
            <Links links={webLinks}/>
        </div>
    )
}

export function Cryptography() {
    return (
        <div>
            <h1>Cryptography</h1>
            <Links links={cryptographyLinks}/>
        </div>
    )
}

export function Docker() {

    return (
        <div>
            <h1>Docker</h1>
            <Links links={dockerLinks}/>
        </div>
    )
}

export function Linux() {
    return (
        <div>
            <h1>Linux</h1>
            <Links links={linuxLinks}/>
        </div>
    )
}

export function Movie() {
    return (
        <div>
            <h1>Movie</h1>
            <Links links={movieLinks}/>
        </div>
    )
}

export function Tools() {
    return (
        <div>
            <h1>Tools</h1>
            <Links links={toolsLinks}/>
        </div>
    )
}

export function Books() {
    return (
        <div>
            <h1>Books</h1>
            <Links links={booksLinks}/>
        </div>
    )
}
