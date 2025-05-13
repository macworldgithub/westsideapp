import Chat from "../screens/Chat";
import Profile from "../screens/Profile";

import HomeStackScreen from "./HomeStackNavigation";
import HistoryStackScreen from "./HistoryStackNavigation";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomTabBar from "../Components/CustomTabBar";
import CarOrderDetails from "../Screens/CarOrderDetails";
import ViewServices from "../Screens/ViewServices";
import ReportScreen from "../Screens/ReportScreen";
import EditProfile from "../Screens/EditProfile";

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
