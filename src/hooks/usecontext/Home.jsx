import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext';

const Home = () => {

    const {darkMode,toggleTheme} = useContext(ThemeContext);

  return (
    <div>
      <h1>{darkMode ? 'Dark Mode' : 'White Mode'}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default Home
