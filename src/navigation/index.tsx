import { NavigationContainer } from '@react-navigation/native';
import React from 'react'

import HomeScreen from '../screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CatalogScreen from '../screens/Catalog';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer >
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName: any = "home";

                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'Catalog') {
                            iconName = focused ? 'folder-open' : 'folder-open-outline';
                        }

                        return <Ionicons name={iconName} size={32} color="green" />;
                    },

                })}

            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Catalog" component={CatalogScreen} />

            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation