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
    {link: "https://react.docschina.org/", description: "react文档"},
    {link: "https://markdown.com.cn/", description: "markdown手册"},
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
    {link: "http://tool.bugku.com/", description: "BugKu工具箱"},
    {link: "http://www.hiencode.com/", description: "ssl在线工具"},
];

const dockerLinks = [
    {link: "https://docs.docker.com/", description: "Docker文档"},
    {link: "https://vuepress.mirror.docker-practice.com/", description: "Docker从入门到精通"},
    {link: "https://hub.docker.com/", description: "Docker仓库"},
];

const movieLinks = [
    {link: "https://ddrk.me/", description: "低端影视"},
    {link: "https://www.1905.com/", description: "1905电影网"},
    {link: "http://www.verycd.com/", description: "VeryCD"},
    {link: "https://www.agemys.com/", description: "AGE动漫"},
    {link: "https://tv.cctv.com/", description: "CCTV"},
];

const linuxLinks = [
    {link: "https://deepinout.com/linux-kernel-api", description: "Linux内核api"},
    {link: "https://elixir.bootlin.com/", description: "Linux源码"},
    {link: "https://git.kernel.org/", description: "Linux kernel"},
    {link: "https://blog.csdn.net/jiuguaqiao6494/article/details/119482013", description: "errno定义"},
    {link: "https://www.cnblogs.com/keatonlao/p/12983158.html", description: "rime使用说明"},
    {link: "http://linasm.sourceforge.net/docs/", description: "Linux系统调用"},
    {link: "https://www.vimgolf.com/", description: "vim挑战"},
    {link: "https://www.linuxprobe.com/", description: "刘遄博客"},
    {link: "https://opensource.com/article/18/8/what-how-makefile", description: "Makefile基础"},
    {link: "https://linuxtools-rst.readthedocs.io/", description: "Linux Tools Quick Tutorial"},
    {link: "https://hackmd.io/@sysprog/SySTMXPvl", description: "Makefile语法"},
    {link: "https://docs.microsoft.com/zh-cn/cpp/linux/", description: "visual studio手册"},
    {link: "https://seisman.github.io/how-to-write-makefile/", description: "makefile"},
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
    {link: "https://www.onlinedown.net/", description: "华军软件园"},
    {link: "https://www.mydrivers.com/zhuanti/tianti/gpum/index.html", description: "显卡性能图"},
    {link: "https://www.online-convert.com/", description: "文件转换"},
    {link: "https://chinese-colors.heyfe.org/", description: "中国色彩"},
];

const newsLinks = [
    {link: "https://www.theguardian.com/", description: "英国卫报"},
    {link: "http://www.stats.gov.cn/", description: "国家统计局"},
    {link: "https://language.chinadaily.com.cn/", description: "双语日报"},
    {link: "https://www.ngchina.com.cn/", description: "国家地理中文网"},
    {link: "https://www.bp.com/", description: "bp能源"},
    {link: "https://cn.knoema.com/", description: "国内外统计数据"},
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
    {link: "https://transparent.imageonline.co/", description: "图片透明"},
    {link: "https://bbs.huoying666.com/", description: "火萤壁纸"},
    {link: "https://wallpaperwaifu.com/", description: "waifu壁纸"},
    {link: "https://livewallp.com/", description: "livewallp壁纸"},
    {link: "https://www.livewallpaperpc.com/", description: "livewallpaper壁纸"},
    {link: "https://zhutix.com/", description: "致美儿壁纸"},
    {link: "https://livewallpaper.giantapp.cn/", description: "巨应壁纸"},
    {link: "https://www.dpm.org.cn/Home.html/", description: "故宫博物馆"},
    {link: "https://lab.5ime.cn/video/", description: "链接去水印"},
    {link: "https://ps.gaoding.com/", description: "在线ps"},
    {link: "https://www.photopea.com/", description: "在线ps-en"},
    {link: "https://tt0.top/", description: "gif工具"},
    {link: "https://www.magiceraser.io/", description: "在线去水印"},
];

const booksLinks = [
    {link: "https://gaia.cs.umass.edu/kurose_ross/", description: "计算机网络"},
    {link: "https://lwebapp.com/zh/mobi-reader", description: "在线mobi阅读器"},
    {link: "https://www.zxx.edu.cn/elecEdu", description: "电子教材"},
];

const schoolLinks = [
    {link: "https://www.zjooc.cn/", description: "浙江学习网"},
    {link: "https://hdu.fanya.chaoxing.com/", description: "泛雅平台"},
    {link: "https://newjw.hdu.edu.cn/", description: "杭电教务"},
    {link: "https://console.huaweicloud.com/", description: "华为云"},

];

const pdfLinks = [
    {link: "https://pdfcandy.com/", description: "pdf candy"},
    {link: "https://www.ilovepdf.com/", description: "i love pdf"},
    {link: "https://www.addpdf.cn/", description: "pdf转word"},
    {link: "https://www.pdf2go.com/", description: "pdf转换器"},
    {link: "https://easypdf.com/", description: "easy pdf"},
    {link: "https://www.extractpdf.com/", description: "pdf提取"},
    {link: "https://www.pdfpai.com/", description: "pdf pai"},
    {link: "https://pdf2doc.com/", description: "pdf to doc"},
    {link: "https://cn.office-converter.com/", description: "office converter"},
];

const javaLinks = [
    {link: "https://docs.oracle.com/en/java/javase/17/docs/", description: "Java api"},
    {link: "https://openjfx.io/javadoc/17/", description: "javaFX api"},
    {link: "https://www.jetbrains.com/help/idea/", description: "idea help"},
    {link: "https://docs.oracle.com/javase/9/tools/jdeprscan.htm", description: "jdeprscan"},
];

const workbooksLinks = [
    {link: "https://adworld.xctf.org.cn/", description: "攻防世界"},
    {link: "https://ctf.bugku.com/", description: "bugku"},
    {link: "https://www.nowcoder.com/", description: "牛客"},
    {link: "https://pintia.cn/", description: "PTA"},
    {link: "https://leetcode.cn/", description: "力扣"},
    {link: "https://www.luogu.com.cn/", description: "洛谷"},
    {link: "https://acm.hdu.edu.cn/", description: "杭电oj"},
    {link: "https://www.51zxw.net/", description: "我要自学网"},
];

const searchLinks = [
    {link: "https://g.luciaz.me/", description: "心灵之约"},
    {link: "https://searx.space/", description: "SearX"},
    {link: "https://www.wolframalpha.com/", description: "wolframalpha"},
    {link: "https://hyperbeam.com ", description: "hyperbeam"},
    {link: "https://magi.com/", description: "magi"},
];

const funLinks = [
    {link: "https://m.jrj.com.cn/hq/bigtree", description: "大盘云图-股票"},
    {link: "https://p.hancel.org", description: "摸鱼闯关"},
    {link: "https://nazo.one-story.cn/", description: "nazo game"},
    {link: "https://www.nytimes.com/wordle/", description: "wordle"},
    {link: "https://handle.antfu.me/", description: "成语猜谜"},
    {link: "http://www.chengyuji.cn/fenlei/", description: "成语大全"},
    {link: "https://fc.zhouxiaoben.info/", description: "怀旧NFC"},
    {link: "https://uahh.syouzyo.org/fyzhq/", description: "中文发音转外语"},
    {link: "https://cobysy.github.io/shodo/", description: "书法练习"},
    {link: "https://www.templatemaker.nl/zh-cn/", description: "纸盒制作"},
    {link: "https://pinyincaichengyu.com/", description: "拼音猜成语"},
    {link: "https://passer-by.com/relationship/", description: "中国亲戚转换器"},
    {link: "https://www.foodwake.com/", description: "唤醒食物"},
    {link: "https://ask.nocode.com/", description: "就诊问医"},
];

const musicLinks = [
    {link: "https://igoutu.cn/music/", description: "bgm音乐"},
    {link: "https://musicboxmaniacs.com/", description: "音乐盒社区"},
];

export function NewsPage() {
    return (
        <div>
            <h1>News</h1>
            <Links links={newsLinks}/>
        </div>
    )
}

export function WebPage() {
    return (
        <div>
            <h1>Web</h1>
            <Links links={webLinks}/>
        </div>
    )
}

export function CryptographyPage() {
    return (
        <div>
            <h1>Cryptography</h1>
            <Links links={cryptographyLinks}/>
        </div>
    )
}

export function DockerPage() {

    return (
        <div>
            <h1>Docker</h1>
            <Links links={dockerLinks}/>
        </div>
    )
}

export function LinuxPage() {
    return (
        <div>
            <h1>Linux</h1>
            <Links links={linuxLinks}/>
        </div>
    )
}

export function MoviePage() {
    return (
        <div>
            <h1>Movie</h1>
            <Links links={movieLinks}/>
        </div>
    )
}

export function ToolsPage() {
    return (
        <div>
            <h1>Tools</h1>
            <Links links={toolsLinks}/>
        </div>
    )
}

export function BooksPage() {
    return (
        <div>
            <h1>Books</h1>
            <Links links={booksLinks}/>
        </div>
    )
}

export function PicturePage() {
    return (
        <div>
            <h1>Picture</h1>
            <Links links={pictureLinks}/>
        </div>
    )
}

export function SchoolPage() {
    return (
        <div>
            <h1>School</h1>
            <Links links={schoolLinks}/>
        </div>
    )
}

export function PDFPage() {
    return (
        <div>
            <h1>PDF</h1>
            <Links links={pdfLinks}/>
        </div>
    )
}

export function JavaPage() {
    return (
        <div>
            <h1>Java</h1>
            <Links links={javaLinks}/>
        </div>
    )
}

export function WorkbooksPage() {
    return (
        <div>
            <h1>Workbooks</h1>
            <Links links={workbooksLinks}/>
        </div>
    )
}

export function SearchPage() {
    return (
        <div>
            <h1>Search</h1>
            <Links links={searchLinks}/>
        </div>
    )
}

export function FunPage() {
    return (
        <div>
            <h1>Fun</h1>
            <Links links={funLinks}/>
        </div>
    )
}

export function MusicPage() {
    return (
        <div>
            <h1>Music</h1>
            <Links links={musicLinks}/>
        </div>
    )
}

