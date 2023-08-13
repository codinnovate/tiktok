import { Search } from 'lucide-react';


const SearchBar = () => {
  
    return (
        <div
            className='w-1/3  flex items-center'>
            <div className="w-full hover:ring-1 hover:text-black ring-gray-300 rounded-full flex items-centers bg-[#f1f1f1] ">
            <input
                placeholder='Search'
                className='outline-none w-full h-full placeholder:text-gray-500  bg-[#f1f1f1]  text-gray-600 ring-none p-3 rounded-full border-none caret-[#fe2c53]  '
            />
            <span className='border-l-2 border-[#d7d7d9] h-full bg-gray  m-2 p-1 '>
                    <Search className={`text-gray-400   ml-2`} />
            </span>
            </div>
        </div>
    )
}

export default SearchBar
