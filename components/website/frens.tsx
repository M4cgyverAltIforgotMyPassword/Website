import Image from "next/image";
import Link from "next/link";

const links = [{
    url:    "https://yesterweb.org/radio/",
    imgSrc: "/static/images/frens/yesterweb-radio-button.png",
    title:  "The link navigates to the Yesterweb\"s radio. collection of resources that document and preserve the history of the early web. It includes information on the first web browsers, web technologies, and early websites, as well as archives of websites and web-related artifacts from the 1990s and 2000s. The goal of the site is to provide a comprehensive look at the early days of the web and to preserve this important part of technology history for future generations.",
    alt:    "Yesterweb\"s Radio"
}, {
    url:    "https://5amgirlfriend.neocities.org/",
    imgSrc: "/static/images/frens/5amgf_88x31.gif",
    title:  "5am Girlfriend is a webpage made by `Five` (screen name), designed to be a personal bloggind site with art and music. I really love the asthetic of the entire site! Unfortunatly, the website seems to be no longer mantained as `Five` made their last blog entry on \"Marh 3rd, 2022\" stating that their relationship with `Twelve` imploded while hinting in mental abuse, hostility, cheating, etc. Since the breakup shes been focusing on her mental health in the real world, drawing and sketcing again (play Bowser Jr.\"s Journey). Nevertheless I hope everything goes well with her! \n\nUpdate: On \"Ctover 27, 2022\" `Five` made another blog entry formally concluding the 5amgf saga, linking to her new page https://vivarism.neocities.org/",
    alt:    "5am Girlfriend"
}, {
    url:    "https://oekaki.freakphone.net/",
    imgSrc: "/static/images/frens/fatass.gif",
    title:  "Oekaki.freakphone.net is an online platform for drawing and sharing illustrations. The word \"oekaki\" is a Japanese term for \"to draw\". The website may allow users to create drawings and share them with others.",
    alt:    "Oekaki.freakphone.net drawing"
}, {
    url:    "https://daikonet.neocities.org/",
    imgSrc: "/static/images/frens/link_uxo.gif",
    title:  "Daiko (or sometimes known by his other screename \"Hogwash\") is a weebshit, web and compsci enthusiest and has been working with RGP maker for about 8 years now. This is their personal blog site and I cannot stress this enough I fucking love the site layout. Its animated but the content is still really easy to follow when reading. Its retro enough to give the asthetic of the site and the \"weebcore\" isnt too takey. Also he uses osrs icons so thats a plus. I highley recomend you play their RPG Maker Game \"Agricultura\" its fucking beautiful!",
    alt:    "Oekaki.freakphone.net drawing"
}];
 
export default function Frens()
{
    return <>
        {links.map(({url, imgSrc, title, alt}) => (
            <Link key={url} href={url} target={"_blank"}> 
                <Image src={imgSrc} title={title} width={88} height={31} alt={alt} style={{marginLeft:"2px", marginTop:"2px"}} />  
            </Link>
        ))} 
    </>
}