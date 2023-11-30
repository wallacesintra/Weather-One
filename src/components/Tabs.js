import react from "react";
import { StyleSheet } from "react-native";
import CurrentWeather from "../screens/CurrrentWeather";
import Forecast from "../screens/Forecast";
import Search from "../screens/Search";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TestInput from "./TestInput";

const Tab = createBottomTabNavigator()

const Tabs = ({ weather }) => {
    //console.log(`Tabs ${weather}`)
    return ( 
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'grey',
            tabBarStyle: {
              backgroundColor: '#003049',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              borderTopColor: '#003049'
            },
          }}   
        >
          <Tab.Screen
            name={'Current'}
            options={{ 
              headerShown: false,
              title: '',
              tabBarIcon: ({ focused }) => 
              <MaterialCommunityIcons 
                style = {{justifyContent: 'center'}}
                name={"home-lightning-bolt"} 
                size={focused ? 30 : 25 } 
                color={focused ? 'white' : 'grey'}
              /> 
            }}
          >
            {() => <CurrentWeather weather= {weather}/>}
          </Tab.Screen>

          <Tab.Screen
            name={'Search'}
            options={{ 
              headerShown: false,
              title: '',
              tabBarIcon: ({ focused }) => 
              <Feather 
                name={"search"} 
                size={focused ? 30 : 25 } 
                color={focused ? 'white' : 'grey'}
              />
            }}
          >
            {() => <Search />}
          </Tab.Screen>
  
          <Tab.Screen
            name={'Forecast'}
            options={{ 
              headerShown: false,
              title: '',
              tabBarIcon: ({ focused }) => 
              <Feather 
                name={"cloud-drizzle"} 
                size={focused ? 30 : 25 } 
                color={focused ? 'white' : 'grey'}
              />
            }}
          >
            {() => <Forecast weather = {weather.list}/>}
          </Tab.Screen> 
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Tabs