import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { WEATHER_API_KEY } from '@env'


const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const getWeather = async () => {
      try {
        if (city.trim() === '') {
          setWeather(null);
          return;
        }
        
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}`)
        const data = await res.json()
        setWeather(data);
        console.log(Object.keys(data))
        console.log(data)
      } catch (error) {
        console.error('Error fetching weather:', error);
      }
    };
    getWeather();
  }, [city]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter city name"
        value={city}
        onChangeText={(text) => setCity(text)}
      />

      {weather && (
        weather.message !== "city not found"?
        <View style={styles.weatherContainer}>
            <Text>{weather.id}</Text>
            <Text>{weather.name}</Text>
            <Text>{weather.timezone}</Text>
            <Text> {weather.main.temp}</Text>
        </View>:
        <Text>city not found</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  weatherContainer: {
    marginTop: 20,
  },
});

export default Weather;
