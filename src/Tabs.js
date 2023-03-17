import React from "react";
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
////import HomeStackScreen from "./stacks/HomeStackScreen";
///import SettingsStackScreen from "./stacks/SettingsStackScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Reproduccion from "./screens/Reproduccion";
import Screenfull from "./screens/Screenfull";
import Search_match from './screens/Search_match';
import Mas from './screens/Mas';
export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();
    function RootNavigator(){
        return (
        <Stack.Navigator>
          <Stack.Screen name="Home" options={{ headerShown: false }} component={BottomTabNavigator}/>
          <Stack.Screen name="Reproduccion" options={{ headerShown: false }} component={Reproduccion} />
          <Stack.Screen name="Screenfull" detachInactiveScreens={false} options={{ headerShown: false }} component={Screenfull} />
          <Stack.Screen name="Search_match" detachInactiveScreens={false} options={{ headerShown: false }} component={Search_match} />
          <Stack.Screen name="Mas" detachInactiveScreens={false} options={{ headerShown: false }} component={Mas} />
        </Stack.Navigator>
    );

  }

  

  const Tab = createBottomTabNavigator();
  function BottomTabNavigator() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: {
              backgroundColor: '#000',
            },
            headerShown: false
        }}>
          <Tab.Screen 
              name="Inicio"
              component={Home}   
              options={{
              title: 'Inicio',
              tabBarActiveTintColor:'#005A6C',
              headerShown: false,
              tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
            }} 
          />
          <Tab.Screen 
              name="Buscar" 
              component={Search_match}             
              options={{
              title: 'Buscar',
              tabBarActiveTintColor:'#005A6C',
              headerShown: false,
              tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
            }} 
          />
          <Tab.Screen 
              name="Perfil" 
              component={Mas}             
              options={{
              title: 'Mas',
              tabBarActiveTintColor:'#005A6C',
              headerShown: false,
              tabBarIcon: ({ color }) => <TabBarIcon name="navicon" color={color} />,
            }} 
          />
        </Tab.Navigator>
    );
  }
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={26} style={{ marginBottom: -3 }} {...props} />;
}

