import React, { createContext } from "react";
import './App.css'
import { useState } from "react";
import Homepage from "./pages/homepage";
import ThemeButton from './components/theme-button';

//create the context
//provide the context
//consume the context

export const ThemeContext = createContext(null)

function App() {
   const [theme, setTheme] = useState(false);

   return (
      <ThemeContext.Provider 
         value={{
           theme,
           setTheme,
         }}
      >
         <div className="App" style={theme ? {backgroundColor : "#feb300"} : {}}>
            <ThemeButton />
            <Homepage />
         </div>
      </ThemeContext.Provider>

   );
}

export default App;