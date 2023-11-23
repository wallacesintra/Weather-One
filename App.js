import React from 'react'
import { StyleSheet,ActivityIndicator} from 'react-native';
import Tabs from './src/components/Tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useGetWeather } from './src/Hook/useGetWeather';

export default function App() {
  const [loading, error, weather] = useGetWeather()

  console.log( weather )

  if (loading)
  {
    return(
      <ActivityIndicator
        style = {styles.loader}
        size={'large'}
        color={'blue'}
      />
    )
  }

  if (weather)
  {
    return (
      <NavigationContainer  style= {styles.container}>
        <Tabs weatherData = {weather}/>
      </NavigationContainer>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loader: {
    flex: 1,
    justifyContent: 'center'
  }
});

