import "./App.css";
import { AppHeader } from "./components/AppHeader/AppHeader";
import { Space } from "antd";
import { AppSideBar } from "./components/AppSideBar/AppSideBar";
import { PageContent } from "./components/PageContent/PageContent";
import { AppFooter } from "./components/AppFooter/AppFooter";

function App() {
  return (
    <div className="app">
      <AppHeader />
      <Space className="sidebarandpagecontent">
        <AppSideBar />
        <PageContent />
      </Space>
      {/* <AppFooter/> */}
    </div>
  );
}

export default App;
