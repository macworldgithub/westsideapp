import RegisteredCars from "../screens/RegisteredCars";
import { createStackNavigator } from "@react-navigation/stack";

const HomeStack = createStackNavigator();
// — Home stack —
export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeMain" component={RegisteredCars} />
      {/* e.g. details, settings, etc */}
    </HomeStack.Navigator>
  );
}
