import { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useThemeState } from '../context/DarkMode';

export default function Header() {
  const [theme, setTheme] = useThemeState();
  const [selectedMenu, setSelectedMenu] = useState(0);
  const menu = [
    { idx: 0, name: 'All' },
    { idx: 1, name: 'Active' },
    { idx: 2, name: 'Completed' },
  ];
  return (
    <div className='flex w-full justify-between bg-violet-800 p-4'>
      <button
        onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}
      >
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </button>
      <ul className='flex gap-6'>
        {menu.map((el, idx) => (
          <li
            key={idx}
            onClick={() => setSelectedMenu(idx)}
            className={`cursor-pointer ${
              selectedMenu === idx ? 'border-b-2' : ''
            }`}
          >
            {el.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
