import { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const themeState = useState('dark');
  return (
    <ThemeContext.Provider value={themeState}>{children}</ThemeContext.Provider>
  );
};

export const useThemeState = () => {
  const value = useContext(ThemeContext);
  if (value === undefined)
    throw new Error('useMyContext should be used within MyContext.Provider');
  return value;
};
