import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WelcomeScreen } from "./screens";
import { LoginScreen } from "./screens";
import { SignUpScreen } from "./screens";

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
                    },
                    headerTintColor: "black",
                }}
            >
                <Stack.Screen
                    name="WelcomeScreen"
                    component={WelcomeScreen}
                    options={{title: "Welcome"}}
                />
                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={{title: "Login"}}
                />
                <Stack.Screen
                    name="SignUpScreen"
                    component={SignUpScreen}
                    options={{title: "Create an account"}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
