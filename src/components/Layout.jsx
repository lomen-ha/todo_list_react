import { useThemeState } from '../context/DarkMode';

export default function Layout({ children }) {
  const [theme] = useThemeState();
  return (
    <div
      className={`flex h-screen flex-col items-center justify-center bg-neutral-600 ${
        theme === 'light' ? 'text-black' : 'text-white'
      }`}
    >
      <div className='flex min-h-[600px] w-1/2 flex-col items-center justify-start bg-blue-900'>
        {children}
      </div>
    </div>
  );
}
