import { createContext, useState, useContext, useEffect } from 'react'

const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)

export const AppContext = ({ children }) => {
   const [search, setSearch] = useState('cat')
   const [isDarkTheme, setIsDarkTheme] = useState(false)
   const toggleDarkTheme = () => {
      setIsDarkTheme(!isDarkTheme)
      localStorage.setItem('darkTheme', !isDarkTheme)
      
   }

   useEffect(() => {
      const localThemePreference = localStorage.getItem('darkTheme') === 'true'
      console.log(localThemePreference)
      document.body.classList.toggle('dark-theme',localThemePreference)
   }, [toggleDarkTheme])

   return (
      <GlobalContext.Provider
         value={{
            search,
            setSearch,
            toggleDarkTheme,
            isDarkTheme,

         }}
      >
         {children}
      </GlobalContext.Provider>
   )
}
