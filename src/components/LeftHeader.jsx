import {
    Plus,
    MoreVertical,
    Languages,
    HelpCircle,
    Keyboard,
    Moon,
} from 'lucide-react';
import { useState } from 'react';



const LeftHeader = () => {
    const [showMore, setShowMore] = useState(false)
    
    const setMore = () => {
        setShowMore(!showMore)
    }
    const MoreItems = ({icon, title}) => {
        return (
            <div    
                className='flex w-full items-center p-2 hover:bg-[#f7f7f7] cursor:pointer pl-4'>
                <span>{icon}</span>
                <p className='dark:text-white ml-3 font-medium cursor:pointer'>{title}</p>
            </div>
        )
    }
    return (
        <div className="flex space-x-4 items-center h-full">
            <button className='flex border-[1px] hover:bg-[#f3f3f3] rounded-md  px-3 py-[.4em]'>
                <span>
                <Plus />
                </span>
                <p className='font-medium ml-2'>Upload</p>
            </button>
            <button className='flex border-[1px] bg-[#fe2c53]  hover:bg-[#fe2c53] rounded-md  py-[.4em] px-[2em]'>
                <p className='font-[650] text-white '>Log in</p>
            </button>
            
            <span
                onMouseEnter={setMore}
            >
            <MoreVertical strokeWidth='1.4' />
            </span>
            {showMore && (
                <div
                    onMouseLeave={() => {
                        setTimeout(() => {
                        setMore(false);
                        }, 1000);
                    }}
                    className='absolute top-20  w-[15em] bg-white rounded-xl  shadow-2xl cursor:pointer'>
                <div  className='flex flex-col my-3'>
                    <MoreItems
                        icon={<Languages className='dark:text-white'/>}
                        title="English" />
                     <MoreItems
                        icon={<HelpCircle className='dark:text-white'/>}
                        title="Feedback and help" />
                       <MoreItems
                        icon={<Keyboard className='dark:text-white'/>}
                        title="Keyboard Shortcuts" />
                    
                    <div className='flex w-full justify-between items-center bg-white '>
                        <div className='flex w-full items-center p-2 hover:bg-[#f7f7f7] cursor:pointer pl-4'>
                        <span><Moon  className='dark:text-white'/></span>
                        <p className='dark:text-white ml-3 font-medium cursor:pointer' >Dark Mode</p>
                        </div>
                        <button>
                            <div className=''>
                        </div>
                        </button>
                </div>
               </div>
            </div>

            )}

        </div>
    )
}

export default LeftHeader
