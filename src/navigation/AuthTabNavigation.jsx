import Chat from "../screens/Chat";
import Profile from "../screens/Profile";

import HomeStackScreen from "./HomeStackNavigation";
import HistoryStackScreen from "./HistoryStackNavigation";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomTabBar from "../Components/CustomTabBar";
import CarOrderDetails from "../screens/CarOrderDetails";
import ViewServices from "../screens/ViewServices";
import ReportScreen from "../screens/ReportScreen";
import EditProfile from "../screens/EditProfile";
import GeneralSettingsScreen from "./src/screens/GeneralSetting";

const Tab = createBottomTabNavigator();

export default function AuthTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}  tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="View" component={EditProfile}/>
      <Tab.Screen name="Report" component={ReportScreen} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
