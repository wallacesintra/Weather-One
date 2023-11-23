import react from "react";
import { StyleSheet } from "react-native";
import CurrentWeather from "../screens/CurrrentWeather";
import Forecast from "../screens/Forecast";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'


const Tab = createBottomTabNavigator()

const Tabs = ({ weather }) => {
    console.log(`Tabs ${weather}`)
    return ( 
        <Tab.Navigator
            
        >
          <Tab.Screen
            name={'Current'}
          >
            {() => <CurrentWeather weather= {weather}/>}
          </Tab.Screen>
  
          <Tab.Screen
            name={'Forecast'}
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