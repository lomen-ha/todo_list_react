import { createContext, useContext, useMemo, useState } from 'react';

export const ThemeValueContext = createContext();
export const ThemeActionsContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState('dark');
  const actions = useMemo(
    () => () => setDarkTheme((prev) => (prev === 'dark' ? 'light' : 'dark')),
    []
  );
  return (
    <ThemeActionsContext.Provider value={actions}>
      <ThemeValueContext.Provider value={darkTheme}>
        {children}
      </ThemeValueContext.Provider>
    </ThemeActionsContext.Provider>
  );
};

export const useThemeValue = () => {
  const value = useContext(ThemeValueContext);
  if (value === undefined)
    throw new Error('useThemeValue should be used within MyContext.Provider');
  return value;
};

export const useThemeActions = () => {
  const value = useContext(ThemeActionsContext);
  if (value === undefined)
    throw new Error('useThemeActions should be used within MyContext.Provider');
  return value;
};
