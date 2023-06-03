import { FaSun, FaMoon } from 'react-icons/fa'
import { useGlobalContext } from './context'
const ToggleTheme = () => {
   const { toggleDarkTheme, isDarkTheme } = useGlobalContext()
    const localThemePreference = localStorage.getItem('darkTheme') === 'true'
   return (
      <button className="dark-toggle" onClick={() => toggleDarkTheme()}>
         {localThemePreference ? <FaMoon /> : <FaSun />}
      </button>
   )
}
export default ToggleTheme
