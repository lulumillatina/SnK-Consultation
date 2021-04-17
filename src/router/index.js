import React from "react"
import {
    createStackNavigator
} from "@react-navigation/stack"
import { 
    profilePage,
    searchPage 
} from "../pages";
import {SearchBar }from "../components"
import { 
    ImageBackground,
    useWindowDimensions
} from "react-native";

export default function Router (){
    const Stack = createStackNavigator();
    const hp = useWindowDimensions().height;
    return (
        <Stack.Navigator
            initialRouteName="searchScreen"
        >
            <Stack.Screen
             name="searchScreen"
             component={searchPage}
             options={{
                headerShown : false
             }} 
            />
            <Stack.Screen
             name="profileDoctor"
             component={profilePage}
             options={{
                 headerShown : false
             }} 
             />
        </Stack.Navigator>
    )
}