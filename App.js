import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import "./global.css";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Login from "./src/Screens/Login";
import Splash from "./src/Screens/Splash";
import AuthTabs from "./src/navigation/AuthTabNavigation";
import EditProfile from "./src/Screens/EditProfile";
import RegisteredCars from "./src/Screens/RegisteredCars";
import EditCarDetail from "./src/Screens/CarDetailEdit";
import WorkOrder from "./src/Screens/WorkOrder";
import NewWorkOrder from "./src/Screens/NewWorkOrder";
import ViewServices from "./src/Screens/ViewServices";
import CarOrderDetails from "./src/Screens/CarOrderDetails";
import ReportScreen from "./src/Screens/ReportScreen";
import NewCarRegistrtaiom from "./src/Screens/NewCarRegistration";
import Profile from "./src/Screens/Profile";
import GeneralSettingsScreen from "./src/Screens/GeneralSetting";
import LanguageSetting from "./src/Screens/LanguageSetting";
import AccountSecurityScreen from "./src/Screens/AccountSecurity";

const Stack = createStackNavigator();
const RootStack = createStackNavigator();

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [userToken, setUserToken] = useState(null);

  // animated value for opacity
  const splashOpacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(splashOpacity, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }).start(() => {
        // once animation is done, hide splash
        setShowSplash(false);
      });
    }, 4000);

    return () => clearTimeout(timer);
  }, [splashOpacity]);

  // while splash should show, render the animated wrapper
  if (showSplash) {
    return (
      <Animated.View style={{ flex: 1, opacity: splashOpacity }}>
        <Splash />
      </Animated.View>
    );
  }

  return (
    <View className="flex-1">
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {userToken == null ? (
            // no token → show login
            <Stack.Screen name="Login">
              {(props) => (
                <Login
                  {...props}
                  onLogin={(token) => {
                    setUserToken(token);
                  }}
                />
              )}
            </Stack.Screen>
          ) : (
            // logged in → the 4-tab navigator
            <>
              <RootStack.Screen name="AppTabs" component={AuthTabs} />
              <Stack.Screen name="RegisteredCars" component={RegisteredCars} />
              <Stack.Screen name="EditCarDetail" component={EditCarDetail} />
              <Stack.Screen name="WorkOrder" component={WorkOrder} />
              <Stack.Screen name="ViewServices" component={ViewServices} />
              <Stack.Screen name="NewWorkOrder" component={NewWorkOrder} />
              <Stack.Screen name="ReportScreen" component={ReportScreen} />
              {/* <Stack.Screen name="CarOrderDetails" component={CarOrderDetails}/> */}
              <Stack.Screen
                name="CarOrderDetails"
                component={CarOrderDetails}
              />
              <Stack.Screen
                name="NewCarRegistration"
                component={NewCarRegistrtaiom}
              />
              <Stack.Screen name="Profile" component={Profile} />
              <Stack.Screen name="EditProfile" component={EditProfile} />
              <Stack.Screen
                name="AccountSecurity"
                component={AccountSecurityScreen}
              />
              <Stack.Screen
                name="GeneralSetting"
                component={GeneralSettingsScreen}
              />
              <Stack.Screen
                name="LanguageSetting"
                component={LanguageSetting}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
