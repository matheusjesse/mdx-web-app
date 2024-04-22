
import { useContext } from 'react';
import { ThemeContext } from "../src/context/ThemeContext";
import ToggleThemeButton from '../src/components/ToggleThemeButton'
import './App.css'

function App() {

    const { theme } = useContext(ThemeContext);

  return (
    <section className={theme == 'light' ? 'light' : 'dark'}>
      <h1 className="text-3xl font-bold underline text-primary">
      Hello world!
      </h1>
      <ToggleThemeButton />
    </ section>
  )
}

export default App
