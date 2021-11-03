import { createContext, useState, useEffect } from 'react';

// type Theme = 'dark' | '';

interface AppContextProps {
  theme?: string;
  switchTheme?: () => void;
}

const AppContext = createContext<AppContextProps>({});

interface AppProviderProps {
  children: any;
}

export function AppProvider(props: AppProviderProps) {
  const [theme, setTheme] = useState('dark');

  function switchTheme() {
    const newTheme = theme === '' ? 'dark' : '';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setTheme(savedTheme);
  }, []);

  return (
    <AppContext.Provider
      value={{
        theme,
        switchTheme,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;
