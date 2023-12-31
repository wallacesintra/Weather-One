import React from 'react'
import { StyleSheet,ActivityIndicator, View} from 'react-native';
import Tabs from './src/components/Tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useGetWeather } from './src/Hook/useGetWeather';
import ErrorItem from './src/components/ErrorItem';

export default function App() {
  const [loading, error, weather] = useGetWeather()

  console.log( `app ${Object.keys(weather)}`)
  console.log(weather.cod)

  if (weather && weather.list && !loading)
  {
    return (
      <NavigationContainer  style= {styles.container}>
        <Tabs weather = {weather}/>
      </NavigationContainer>
    );
  }

  return (
    <View style={styles.container}>
      {error ? (
        <ErrorItem />
      ) : (
        <ActivityIndicator size={'large'} color={'blue'} />
      )}
    </View>
  )
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

