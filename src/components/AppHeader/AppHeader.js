import { useContext } from "react";

import { Logo } from "./Logo";
import { Navs } from "./Navs";

import { Context } from "../../context/theme/theme.context";
import { useNavigate } from "react-router-dom";
import { RightNav } from "./RightNav";

export const AppHeader = () => {
  const navigate = useNavigate();
  const { theme, toggleRightDrawer } = useContext(Context);

  const handleRedirect = (e) => {
    const { textContent } = e.target;

    if (textContent == "Dashboard") {
      navigate("/");
    } else if (textContent == "Sale") {
      navigate("/sale");
    } else if (textContent === "Order list") {
      toggleRightDrawer();
    } else {
      return;
    }
  };

  return (
    <>
      <div
        className="app-header"
        style={{
          borderBottom: `${Object.keys(theme).length ? "1px solid gray" : ""}`,
        }}
      >
        <Logo />
        <Navs handleRedirect={handleRedirect} />
        <RightNav handleRedirect={handleRedirect} />
      </div>
    </>
  );
};
