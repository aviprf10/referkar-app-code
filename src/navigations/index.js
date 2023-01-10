import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from 'react-native';
import AuthNavigator from "./AuthNavigator";
import DrawerNavigator from "./DrawerNavigator";

const AppNavContainer=()=>{

    return (
        <NavigationContainer>
            {/* <AuthNavigator /> */}
            <DrawerNavigator />
        </NavigationContainer>
    );
};

//screen>>>Home>>>Drawer
//screen>>Auth

export default AppNavContainer;