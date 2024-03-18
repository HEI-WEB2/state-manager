import { PropsWithChildren, createContext, useContext, useState } from 'react'
import './App.css'

interface ThemeContextValues {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValues>({
  theme: "dark",
  toggleTheme: () => { }
});

const ThemeContextProvider = ({children}: PropsWithChildren) => {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: () => {
          setTheme(prev => prev === "dark" ? "light" : "dark");
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

const App = () => {
  return (
    <div>
      <ThemeContextProvider>
        <ThemeValue />
        <ToggleThemeButton />
      </ThemeContextProvider>
    </div>
  )
}

const ThemeValue = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <h1>
      header theme {theme}
    </h1>
  )
}

const ToggleThemeButton = () => {
  const {toggleTheme} = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme}>
      toggle theme
    </button>
  )
}

export default App

