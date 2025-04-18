
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
                        iconName = focused ? 'add-circle' : 'add-circle-outline';
                    } else if (route.name === RootRouteName.INVENTORY) {
                        iconName = focused ? 'egg' : 'egg-outline';
                    }

                    return (
                        <Ionicons
                            name={iconName ?? 'alert-circle-outline'} // default icon if undefined
                            color={color ?? 'black'} // default color
                            size={size ?? 24} // default size
                        />
                    );
                },
                tabBarActiveTintColor: '#3C3D37',
                tabBarInactiveTintColor: 'gray',
                headerShown: true,
            })}
        >
            <Tab.Screen name={RootRouteName.HOME} component={HomeScreen}  options={{headerShown: false} }/>
            <Tab.Screen name={RootRouteName.REMINDER} component={ReminderScreen}  options={{headerShown: false}}/>
            <Tab.Screen name={RootRouteName.INVENTORY} component={InventoryScreen}  options={{headerShown: false}}/>
        </Tab.Navigator>
    );
};


export default RootNavigator;
