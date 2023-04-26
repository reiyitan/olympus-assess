import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WelcomeScreen, LoginScreen, SignUpScreen, HomeScreen } from "./screens";

const Stack = createNativeStackNavigator();

/**
 * Root component of the app.
 */
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
                    },
                    headerTintColor: "black",
                    headerShown: true,
                    gestureEnabled: false
                }}
            >
                <Stack.Screen
                    name="WelcomeScreen"
                    component={WelcomeScreen}
                    options={{
                        title: "Welcome"
                    }}
                />
                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={{
                        title: "Login",
                        headerBackVisible: true
                    }}
                />
                <Stack.Screen
                    name="SignUpScreen"
                    component={SignUpScreen}
                    options={{
                        title: "Create an account"
                    }}
                />
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
