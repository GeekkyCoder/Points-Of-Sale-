import React, { createContext, useState } from "react";

const Context = createContext();


const lighTheme = {}
const darkTheme = {
  colorBgBase:"black",
  colorPrimary:"green",
  colorText:"green"
}

const ContextProvider = ({ children }) => {

 const [theme,setTheme] = useState({})
 const [toggleMenuCollapse,setToggleMenuCollapse] = useState(false)

 const handleThemeSwitchControll = (value) => {
    if(value) {
      setTheme(darkTheme)
      return
    }
  
    setTheme(lighTheme)
 }


 const handleToggleMenuCollapse = () => {
   setToggleMenuCollapse(!toggleMenuCollapse)
 }

  return (
    <Context.Provider value={{theme,handleThemeSwitchControll,toggleMenuCollapse,handleToggleMenuCollapse}}>{children}</Context.Provider>
  );
};

export { Context, ContextProvider };
