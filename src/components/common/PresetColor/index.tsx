
"use client"

import Cookies from 'js-cookie';
import { useState } from 'react';

const ColorPresets = [
  {
    name: 'dark',
  },
  {
    name: 'purple',
  },
  {
    name: 'purple-dark',
  },
  {
    name: 'cyan',
  },
  {
    name: 'cyan-dark',
  },
  {
    name: 'blue',
  },

  {
    name: 'blue-dark',
  },
]

const PresetColor = () => {

  const [theme, setTheme] = useState('');

  const handleChangeTheme = (value: string) => {
    Cookies.set('theme', value);
    setTheme(value)
  }

  return <div className="fixed right-10 top-2/4 border p-2">
    {
      ColorPresets.map((item) => <div className='border m-2 p-1' key={item.name}>
        <button onClick={() => handleChangeTheme(item.name)} type="submit"> {item.name}</button>
      </div >)
    }
  </div >
}

export default PresetColor


