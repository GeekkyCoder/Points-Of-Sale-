import React, { createContext, useState } from "react";

const Context = createContext();

const lighTheme = {};
const darkTheme = {
  colorBgBase: "black",
  colorPrimary: "green",
  colorText: "green",
};

const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState({});
  const [toggleMenuCollapse, setToggleMenuCollapse] = useState(false);
  const [isRightDrawerOpen,setIsRightDrawerOpen] = useState(true)
  const [currentView,setCurrentView] = useState('Dashboard')

  const handleThemeSwitchControll = (value) => {
    if (value) {
      setTheme(darkTheme);
      return;
    }

    setTheme(lighTheme);
  };

  const handleToggleMenuCollapse = () => {
    setToggleMenuCollapse(!toggleMenuCollapse);
  };

  const toggleRightDrawer = () => {
    setIsRightDrawerOpen(!isRightDrawerOpen)
  }

  const updateCurrentView = (view) => {
    setCurrentView(view)
  }

  return (
    <Context.Provider
      value={{
        theme,
        handleThemeSwitchControll,
        toggleMenuCollapse,
        handleToggleMenuCollapse,
        isRightDrawerOpen,
        toggleRightDrawer,
        currentView,
        updateCurrentView
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
