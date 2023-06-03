import { Button } from "antd";
import { DashboardOutlined, ReceiptOutlined } from "@mui/icons-material";
import { CalendarOutlined } from "@ant-design/icons";

export const Navs = ({handleRedirect}) => {
  return (
    <div className="header-nav-container" onClick={handleRedirect}>
      <Button
        className="nav-dashboard"
        icon={<DashboardOutlined fontSize="small" />}
        type="text"
      >
        Dashboard
      </Button>
      <Button
        className="nav-sales"
        icon={<ReceiptOutlined fontSize="small" />}
        type="text"
      >
        Sale
      </Button>
      <Button
        className="nav-orders"
        icon={<CalendarOutlined fontSize="small" />}
        type="text"
      >
        Order list
      </Button>
    </div>
  );
};
