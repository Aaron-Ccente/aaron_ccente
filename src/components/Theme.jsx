import React, { useState } from 'react'
import { FaMoon } from 'react-icons/fa';
import { GoSun } from 'react-icons/go';


export default function Theme() {
    const [theme, setTheme] = useState('light');
    const root = document.documentElement;

    const handleChangeTheme = () =>{
        const newTheme = theme === 'light' ? 'dark': 'light';
        if(newTheme === 'dark'){
            root.classList.add('dark');
        }
        else{
            root.classList.remove('dark');
        }
        setTheme(newTheme);
    }

  return (
    <button type='button' onClick={handleChangeTheme} className='bg-black text-white button-theme text-xl' >
        {theme === 'light' ? <GoSun/> : <FaMoon/>}
    </button>
  )
}
