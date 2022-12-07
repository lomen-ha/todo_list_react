import { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useThemeActions, useThemeValue } from '../context/DarkMode';
import { useTodosActions } from '../context/Todos';

export default function Header() {
  const darkTheme = useThemeValue();
  const actions = useThemeActions();
  const { completed, active } = useTodosActions();
  const [selectedMenu, setSelectedMenu] = useState(0);
  const menu = [
    { idx: 0, name: 'All' },
    { idx: 1, name: 'Active' },
    { idx: 2, name: 'Completed' },
  ];
  const handleMenu = (idx) => {
    setSelectedMenu(idx);
    switch (idx) {
      case 1:
        active();
        break;
      case 2:
        completed();
        break;
      default:
        break;
    }
  };
  return (
    <div className='flex w-full justify-between bg-violet-800 p-4'>
      <button onClick={actions}>
        {darkTheme === 'light' ? <FaMoon /> : <FaSun />}
      </button>
      <ul className='flex gap-6'>
        {menu.map((el, idx) => (
          <li
            key={idx}
            onClick={() => handleMenu(idx)}
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
