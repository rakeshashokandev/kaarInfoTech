import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/Home/HomeScreen';
import LoginScreen from '../pages/Auth/LoginScreen';
import SessionScreen from '../pages/Session/SessionScreen';
import { Lucide } from '@react-native-vector-icons/lucide';
import { color } from '../Constants/Color';


const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          switch (route.name) {
            case 'Home':
              return <Lucide name="house" size={20} color={color}  />;
            case 'Sessions':
              return <Lucide name="calendar-clock" size={20} color={color} />;
            case 'Login':
              return <Lucide name="user-round-plus" size={20} color={color}  />;
            default:
              return null;
          }
        },
        tabBarActiveTintColor: color.bottomTabBlue,
        tabBarInactiveTintColor: '#999',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Sessions" component={SessionScreen} />
      <Tab.Screen name="Login" component={LoginScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;
