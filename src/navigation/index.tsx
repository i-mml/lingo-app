import { NavigationContainer } from '@react-navigation/native';
import React from 'react'

import HomeScreen from '../screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomHeader from '../components/Layout/Header';
import ReviewScreen from '../screens/Review';
import ProfileScreen from '../screens/Profile';
import CatalogFooter from '../components/svgIcons/CatalogFooter';
import ReviewFooter from '../components/svgIcons/ReviewFooter';
import ProfileFooter from '../components/svgIcons/ProfileFooter';

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator

                screenOptions={({ route }) => ({
                    header: props => <CustomHeader title={route.name} {...props} />,
                    tabBarStyle: { backgroundColor: "#000", paddingBottom: 8, paddingTop: 8, height: 60, borderColor: "#393939" },
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName: any = <CatalogFooter color="#FF2358" />;

                        if (route.name === 'Home') {
                            iconName = focused ? <CatalogFooter color="#FF2358" /> : <CatalogFooter color="#fff" />;
                        } else if (route.name === 'Review') {
                            iconName = focused ? <ReviewFooter color="#FF2358" /> : <ReviewFooter color="#fff" />;
                        } else if (route.name === 'Profile') {
                            iconName = focused ? <ProfileFooter color="#FF2358" /> : <ProfileFooter color="#fff" />;
                        }

                        return iconName
                    },

                    tabBarLabelStyle: { fontSize: 12, fontWeight: "500", marginTop: 8 },

                })}

            >
                <Tab.Screen name="Home" component={HomeScreen}
                    options={{
                        tabBarInactiveTintColor: "#fff",
                        tabBarActiveTintColor: "#FF2358",
                        tabBarLabel: "فیلم و سریال"
                    }}
                />
                <Tab.Screen name="Review" component={ReviewScreen}
                    options={{
                        tabBarInactiveTintColor: "#fff",
                        tabBarActiveTintColor: "#FF2358",
                        tabBarLabel: "مرور واژگان"
                    }}
                />
                <Tab.Screen name="Profile" component={ProfileScreen} options={{
                    tabBarInactiveTintColor: "#fff",
                    tabBarActiveTintColor: "#FF2358",
                    tabBarLabel: "پروفایل"
                }} />


            </Tab.Navigator>
        </NavigationContainer >
    )
}

export default AppNavigation