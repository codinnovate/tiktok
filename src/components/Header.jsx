import LeftHeader from "./LeftHeader"
import Logo from "./Logo"
import SearchBar from "./SearchBar"

const Header = () => {
    return (
        <div className='w-full flex place-content-between items-center py-2 px-5 border-b-2'>
            <Logo />
            <SearchBar />
            <LeftHeader />
        </div>
    )
}

export default Header
