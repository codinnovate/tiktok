
// import './App.css'
// import Video from './components/Video'

import { useState } from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { Route, Routes } from 'react-router-dom';
import { Explore }  from "./components/pages/Explore";
import Foryou from "./components/pages/forYou";
import Following from "./components/pages/Following";




function App() {
  const [theme, setTheme] = useState('')

  const toggleMode = () =>{
    if(theme == 'bg-[#ffffff]'){
      setTheme('bg-[#121212]')
      localStorage.setItem("Mode")
    }
    else if (theme == 'bg-[#121212]') {
      setTheme('bg-[#ffffff]')
      localStorage.setItem('Mode')
    }

  }

  const whatMode = localStorage.getItem("Mode")
  console.log(whatMode)

  return (
    <div className='flex flex-col bg-[#121212] dark:bg-[#ffffff] overflow-hidden h-screen'>
      <Header />
      <div className="grid grid-cols-5">
        <div className="col-span-1">
      <SideBar />    
        </div>
        <div className="col-span-5">
      <Routes>
        <Route path='explore' element={<Explore /> }  />
        <Route path="foryou" element={<Foryou />} />
        <Route path="following" element={<Following />}  />
        <Route />
        <Route />
      </Routes>
        </div>
      </div>
    </div>
  );
}

export default App
