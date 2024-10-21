import * as React from "react";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Telainicial from "./Telainicial.js";
import SelectionScreen from "./SelectionScreen.js"; // Nova tela
import ImageCropperScreen from "./ImageCropperScreen.js";
import ReportScreen from "./ReportScreen.js";

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#00796B", // Cor teal
    accent: "#009688", // Teal mais claro
    background: "#FFFFFF",
    surface: "#FFFFFF",
    text: "#212121",
    placeholder: "#757575",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Telainicial">
          <Stack.Screen
            name="Telainicial"
            component={Telainicial}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SelectionScreen"
            component={SelectionScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ImageCropperScreen"
            component={ImageCropperScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ReportScreen"
            component={ReportScreen}
            options={{ title: "Relatório" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
