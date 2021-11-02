import { createContext, useState } from 'react';

type Theme = 'dark' | '';

interface AppContextProps {
  theme?: Theme;
  switchTheme?: () => void;
}

const AppContext = createContext<AppContextProps>({});

interface AppProviderProps {
  children: any;
}

export function AppProvider(props: AppProviderProps) {
  const [theme, setTheme] = useState<Theme>('dark');

  function switchTheme() {
    setTheme(theme === '' ? 'dark' : '');
  }

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
