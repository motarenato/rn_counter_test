import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'

import CountersScreen from './features/counter/CountersScreen'
import ConfigScreen from './features/counter/ConfigScreen'

const Tab = createBottomTabNavigator();

const Router = props => (
    <NavigationContainer
        theme={{
            ...DefaultTheme,
            colors: {
                primary: '#001c46',
                background: '#0082c9',
                card: '#001c46',
                text: '#001c46',
                border: '#001c46',
            }
        }}
    >
        <Tab.Navigator
            tabBarOptions={{
                activeBackgroundColor: '#001c46',
                inactiveBackgroundColor: '#001c46',
                activeTintColor: '#fd9400',
                inactiveTintColor: '#8e8e93',
            }}
        >
        <Tab.Screen
            name="Counters"
            component={CountersScreen}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon name="star" color={color} size={size} />
                ),
            }}
            />
        <Tab.Screen
            name="Config"
            component={ConfigScreen}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon name="star" color={color} size={size} />
                ),
            }}
            />
        </Tab.Navigator>
    </NavigationContainer>
)

export default Router