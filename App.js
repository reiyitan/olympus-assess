import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from "./screens/WelcomeScreen";
import SignUp from "./screens/SignUp";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    contentStyle: {
                        backgroundColor: "#19191C",
                    },
                    headerStyle: {
                        backgroundColor: "#E6C466"
                    }
                }}
            >
                <Stack.Screen
                    name="WelcomeScreen"
                    component={WelcomeScreen}
                    options={{title: "Welcome"}}
                />
                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                    options={{title: "Create an account"}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
