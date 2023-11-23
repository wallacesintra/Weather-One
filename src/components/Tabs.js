import react from "react";
import { StyleSheet } from "react-native";
import CurrentWeather from "../screens/CurrrentWeather";
import Forecast from "../screens/Forecast";
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'


const Tab = createBottomTabNavigator()

const Tabs = ({weatherData}) => {;
    return (
        <Tab.Navigator
            
        >
          <Tab.Screen
            name={'Current'}
          >
            {() => <CurrentWeather weatherData= {weatherData.city}/>}
          </Tab.Screen>
  
          <Tab.Screen
            name={'Forecast'}
          >
            {() => <Forecast weatherData = {weatherData.list}/>}
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