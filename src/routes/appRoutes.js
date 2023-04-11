import HomePage from "../pages/home/HomePage";
import ChangelogPage from "../pages/coupons/CouponsPage";
import ComponentPageLayout from "../pages/campaigns/ComponentPageLayout";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import ReceiptIcon from '@mui/icons-material/Receipt';
import InstallationPage from "../pages/installation/InstallationPage";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PosPage from "../pages/Pos/PosPage";
import BasicCampaign from '../pages/campaigns/BasicCampaign';
import FoodCampaign from "../pages/campaigns/FoodCampaign";
import BannersPage from "../pages/documentation/BannersPage";
import PushNotificationPage from "../pages/pushnotification/PushNotificationPage";

const appRoutes = [
  {
    index: true,
    element: <HomePage />,
    state: "home"
  },
  {
    path: "/dashboard",
    element: <InstallationPage />,
    state: "dashboard",
    sidebarProps: {
      displayText: "Dashboard",
      icon: <DashboardOutlinedIcon />
    }
  },
  {
    path: "/pos",
    element: <PosPage />,
    state: "pos",
    sidebarProps: {
      displayText: "POS",
      icon: <ReceiptIcon />
    }
  },
  {
    path: "/campaign",
    element: <ComponentPageLayout />,
    state: "component",
    sidebarProps: {
      displayText: "Components",
      icon: <AppsOutlinedIcon />
    },
    child: [
      {
        path: "/campaign/basic",
        element: <BasicCampaign />,
        state: "campaign.basic",
        sidebarProps: {
          displayText: "Basic Campaign"
        },
      },
      {
        path: "/campaign/food",
        element: <FoodCampaign />,
        state: "campaign.food",
        sidebarProps: {
          displayText: "Food Campaign"
        }
      }
    ]
  },
  {
    path: "/banners",
    element: <BannersPage />,
    state: "banners",
    sidebarProps: {
      displayText: "Banners",
      icon: <ArticleOutlinedIcon />
    }
  },
  {
    path: "/coupons",
    element: <ChangelogPage />,
    state: "coupons",
    sidebarProps: {
      displayText: "Coupons",
      icon: <FormatListBulletedOutlinedIcon />
    }
  },
  {
    path: "/push-noti",
    element: <PushNotificationPage />,
    state: "push-noti",
    sidebarProps: {
      displayText: "Push notification",
      icon: <NotificationsActiveIcon />
    }
  }

];

export default appRoutes;