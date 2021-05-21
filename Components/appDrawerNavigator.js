import { createDrawerNavigator } from "react-navigation-drawer";
import { AppTabNavigator } from "./appTabNavigator";
import CustomSideBarMenu from "./customSideBarMenu";
import ProfileSettingScreen from "../Screens/profileSettingScreen";
import MyDonationsScreen from "../Screens/myExchangesScreen";
import NotificationScreen from "../Screens/notificationScreen";
import SettingScreen from "../Screens/settingScreen"

export const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: { screen: AppTabNavigator },
    MyDonations: { screen: MyDonationsScreen },
    Notifications: { screen: NotificationScreen },
    MyProfile: { screen: ProfileSettingScreen },
  },
  { contentComponent: CustomSideBarMenu },
  { initialRouteName: "Home" }
);