import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View, Text } from "react-native";

const Contact=()=>{
    return(
        <View>
            <Text>Hi from  Contact</Text>
        </View>
    );
};

const ContactDetails=()=>{
    return(
        <View>
            <Text>Hi from  Contact details</Text>
        </View>
    );
};

const CreateContact=()=>{
    return(
        <View>
            <Text>Hi from  Contact create</Text>
        </View>
    );
};

const Settings=()=>{
    return(
        <View>
            <Text>Hi from  Settings</Text>
        </View>
    );
};

const HomeNavigator=()=>{
    const HomeStack=createStackNavigator();
    return (
        <HomeStack.Navigator initialRouteName="Contact">
            <HomeStack.Screen name="Contact" component={Contact}></HomeStack.Screen>
            <HomeStack.Screen name="Contact Details" component={ContactDetails}></HomeStack.Screen>
            <HomeStack.Screen name="Create Contact" component={CreateContact}></HomeStack.Screen>
            <HomeStack.Screen name="Setting" component={Settings}></HomeStack.Screen>
        </HomeStack.Navigator>
    );
};

//screen>>>Home>>>Drawer
//screen>>Auth

export default HomeNavigator;