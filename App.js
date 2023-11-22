
import { StyleSheet, Text, View, } from 'react-native';
import CurrentWeather from './src/screens/CurrrentWeather';
import Forecast from './src/screens/Forecast';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Forecast/>
    // </View>

    <NavigationContainer style= {styles.container}>
      <Tab.Navigator>
        <Tab.Screen
          name={'Current'}
        >
          {() => <CurrentWeather/>}
        </Tab.Screen>

        <Tab.Screen
          name={'Forecast'}
        >
          {() => <Forecast/>}
        </Tab.Screen> 

      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
});
