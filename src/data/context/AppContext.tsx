import { createContext } from 'react';

const AppContext = createContext({
  name: null,
});

interface AppProviderProps {
  children: any;
}

export function AppProvider(props: AppProviderProps) {
  return (
    <AppContext.Provider
      value={{
        name: 'Context API Test',
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;
