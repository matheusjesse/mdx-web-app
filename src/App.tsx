
import { useContext } from 'react';
import { ThemeContext } from "../src/context/ThemeContext";
import ToggleThemeButton from '../src/components/ToggleThemeButton'
import './App.css'

function App() {

    const { theme } = useContext(ThemeContext);
    const themeName = theme == 'light' ? 'light' : 'dark'
  return (
    <div className={`${themeName} bg-inverseSurface w-full h-screen`}>      
      
    </ div>
  )
}

export default App
