import React from 'react';
import { getGlobalContext } from './GlobalContext';
import { IoIosSunny } from "react-icons/io";
import { FaRegMoon } from "react-icons/fa";

const ThemeControl = () => {

  const {theme,functionalSetTheme} = getGlobalContext();

//   console.log(gallery)
  return (
    <div>
        <button onClick={functionalSetTheme}>
            {theme ? <IoIosSunny /> : <FaRegMoon /> }
        </button>
    {/* {theme ?
    <button onClick={() =>{setTheme(false)}}><IoIosSunny /></button> :  <button onClick={() =>{setTheme(true)}}><FaRegMoon /></button>
    } */}
    </div>
  )
}

export default ThemeControl