import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainMenu from "./screens/mainMenu";
import StandardGame from "./screens/standardGame";
import RushGame from "./screens/rushGame";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainMenu"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Main Menu" component={MainMenu} />
        <Stack.Screen name="STANDARD" component={StandardGame} />
        <Stack.Screen name="RUSH" component={RushGame} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
