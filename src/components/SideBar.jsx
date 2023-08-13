import { Home,Users2 , Compass, Video } from 'lucide-react';
import { NavLink } from 'react-router-dom';


const items = [
    {icons:<Home />, title:"For You", path:"/foryou"},
    {icons:<Users2 />, title:"Following", path:"/following"},
    {icons:<Compass />, title:"Explore", path:"/explore"},
    {icons:<Video />, title:"LIVE", path:"/live"},
]
const footerItems = [
    {
        name:"About", link:"https://www.tiktok.com/about?lang=en"
    },
    {
        name:"Newsroom", link:"https://newsroom.tiktok.com/"
    },
    {
        name:"Contact", link:"https://www.tiktok.com/about/contact?lang=en"
    },
    {
        name:"Careers", link:"https://careers.tiktok.com/"
    }
]
const MItems = [
    {
        name:"TikTok for Good", link:"https://www.tiktok.com/forgood"
    },
    {
        name:"Advertise", link:"https://www.tiktok.com/business/?attr_medium=tt_official_site_guidance&attr_source=tt_official_site&refer=tiktok_web"
    },
    {
        name:"Developers", link:"https://developers.tiktok.com/?refer=tiktok_web"
    },
    {
        name:"Transparency", link:"https://www.tiktok.com/transparency"
    }, 
    {
        name:"TikTok Rewards", link:"https://www.tiktok.com/tiktok-rewards/en"
    },
    {
        name:"TikTok Embeds", link:"https://www.tiktok.com/embed"
    }
]
const HItems = [
    {
        name:"Help", link:"https://www.tiktok.com/forgood"
    },
    {
        name:"Safety", link:"https://www.tiktok.com/business/?attr_medium=tt_official_site_guidance&attr_source=tt_official_site&refer=tiktok_web"
    },
    {
        name:"Terms", link:"https://developers.tiktok.com/?refer=tiktok_web"
    },
    {
        name:"Transparency", link:"https://www.tiktok.com/transparency"
    }, 
    {
        name:"Privacy", link:"https://www.tiktok.com/tiktok-rewards/en"
    },
    {
        name:"Creator Portal", link:"https://www.tiktok.com/embed"
    },
    {
        name:"Community Guildelines", link:"https://www.tiktok.com/embed"
    }
]
const SideBar = () => {

    const Navitem = ({icon, title, path}) => {
        return (
            <NavLink
                to={path}
                className={({ isActive }) => (
                isActive ? "text-[#fe2c53] flex w-full p-3 rounded-lg hover:bg-gray-100/40 items-center " : "text-black dark:text-white items-center flex w-full p-3 rounded-lg hover:bg-gray-100/40 ")
                    }>
                <span>{icon}</span>
                <h1 className=' font-bold text-[1.2em] dark:text-white ml-3'>{title}</h1>
            </NavLink>
        )
    }
    return (
        <div className="h-screen flex flex-col w-full min-w-[15em] p-2 overflow-y-auto">
            <div className="border-b-2">
                {items.map((item) => (
                    <Navitem
                        path={item.path}
                        key={item.title}
                        icon={item.icons}
                        title={item.title}
                    />
                ))}
            </div>
            <div className='flex flex-col p-2 space-y-5 border-b-2 pt-4 pb-7'>
                <p className='text-black/50  text-[1.1em] leading-5'>Log in to follow creators,<br /> like videos, and view <br /> comments.</p>
                <button className='ring-1 ring-[#fe2c53] p-3 rounded-md hover:bg-[#fe2c53]/5'>
                    <p className='text-xl font-medium text-[#fe2c53]'>Log In</p>
                </button>
            </div>
            <div className='flex  p-2 py-2 '>
                {footerItems.map((item) => (
                    <p
                        key={item.name}
                        className='text-black/50  text-sm mr-1 hover:underline font-medium leading-5'>
                    <a href={item.link}>{item.name}</a>
                    </p>
                ))}
            </div>

            <div className='flex flex-wrap p-2  '>
                {MItems.map((item) => (
                    <p
                        key={item.name}
                        className='text-black/50  text-sm mr-1 hover:underline font-medium leading-5'>
                    <a href={item.link}>{item.name}</a>
                    </p>
                ))}
            </div>

             <div className='flex flex-wrap p-2  '>
                {HItems.map((item) => (
                    <p
                        key={item.name}
                        className='text-black/50  text-sm mr-1 hover:underline font-medium leading-5'>
                    <a href={item.link}>{item.name}</a>
                    </p>
                ))}
            </div>

            <p className='text-black/50  text-sm  font-medium'>
                © 2023 TikTok
                    </p>
            
        </div>
    )
}

export default SideBar
