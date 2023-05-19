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
 const [currentView,setCurrentView] = useState('Dashboard')
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

 
 const updateCurrentView = (view) => {
  setCurrentView(view);
};

  return (
    <Context.Provider value={{theme,handleThemeSwitchControll,toggleMenuCollapse,handleToggleMenuCollapse,currentView,updateCurrentView}}>{children}</Context.Provider>
  );
};

export { Context, ContextProvider };
