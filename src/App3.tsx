import {create} from "zustand";
import './App.css'

interface ThemeStore {
  theme: string;
  toggleTheme: () => void;
}

const useThemeStore = create<ThemeStore>((set) => {
  return {
    theme: "dark",
    toggleTheme: () => {
      set(prev => ({
        theme: prev.theme === "dark" ? "light" : "dark",
      }))
    }
  }
})

const App = () => {
  return (
    <div>
      <ThemeValue />
      <ToggleThemeButton />
    </div>
  )
}

const ThemeValue = () => {
  const {theme} = useThemeStore();
  return (
    <h1>
      header theme {theme}
    </h1>
  )
}

const ToggleThemeButton = () => {
  const {toggleTheme} = useThemeStore();
  return (
    <button onClick={toggleTheme}>
      toggle theme
    </button>
  )
}

export default App

