import { StyleSheet, Text, View} from "react-native";

//navigation container
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// all screen imports
import HomeScreen from "./screens/HomeScreen";
import AgendaScreen from "./screens/AgendaScreen";

//data store for redux
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AgendaScreen"
                component={AgendaScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    
  );

}