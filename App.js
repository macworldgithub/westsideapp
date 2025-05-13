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

const Stack = createStackNavigator();
const RootStack = createStackNavigator();

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [userToken, setUserToken] = useState(null);

  // animated value for opacity
  const splashOpacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // wait 4s, then animate opacity to 0 over 600ms
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
            <RootStack.Screen name="AppTabs" component={AuthTabs} />
            // <RootStack.Screen name ="profile" component={EditProfile}/>
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
