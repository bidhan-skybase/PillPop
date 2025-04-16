
import React from 'react';
import { RootRouteName } from '../route_name';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"; // You’ll need to define this
import HomeScreen from "../../screens/home";
import ReminderScreen from "../../screens/add_reminder";
import InventoryScreen from "../../screens/inventory";
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();


const RootNavigator = () => {



    return (
        <Tab.Navigator
            initialRouteName={RootRouteName.HOME}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === RootRouteName.HOME) {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === RootRouteName.REMINDER) {
                        iconName = focused ? 'alarm' : 'alarm-outline';
                    } else if (route.name === RootRouteName.INVENTORY) {
                        iconName = focused ? 'list' : 'list-outline';
                    }

                    return (
                      <Ionicons name={iconName} color={color} size={size} />
                    );
                },
                tabBarActiveTintColor: '#4A90E2',
                tabBarInactiveTintColor: 'gray',
                headerShown: true,
            })}
        >
            <Tab.Screen name={RootRouteName.HOME} component={HomeScreen}  />
            <Tab.Screen name={RootRouteName.REMINDER} component={ReminderScreen} />
            <Tab.Screen name={RootRouteName.INVENTORY} component={InventoryScreen} />
        </Tab.Navigator>
    );
};


export default RootNavigator;
