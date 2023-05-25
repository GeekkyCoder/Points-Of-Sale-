import "./App.css";
import { AppHeader } from "./components/AppHeader/AppHeader";
import { Space, ConfigProvider } from "antd";
import { AppSideBar } from "./components/AppSideBar/AppSideBar";
import { PageContent } from "./components/PageContent/PageContent";
import { AppFooter } from "./components/AppFooter/AppFooter";

import { useContext } from "react";
import { Context } from "./context/theme/theme.context";

function App() {
  const { theme } = useContext(Context);

  return (
    <ConfigProvider
      theme={{
        token: theme,
      }}
    >
      <div className={`app ${Object.keys(theme).length ? "dark" : ""}`}>
        <AppHeader />
        <Space className="sidebarandpagecontent" size={"large"}>
          <AppSideBar />
          <PageContent />
        </Space>
        <AppFooter />
      </div>
    </ConfigProvider>
  );
}

export default App;
