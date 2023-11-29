import react,{useState, useEffect} from "react";
import { View,Text,SafeAreaView,StyleSheet,TextInput, } from "react-native";
import { Feather } from '@expo/vector-icons';
import CityDetails from "../components/CityDetails";
import { WEATHER_API_KEY } from '@env'
import { weatherType } from "../utilities/weatherType";
import SearchLoad from "../components/Searchload";


const Search = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
  
    useEffect(() => {
      const getWeather = async () => {
        try {
          if (city.trim() === '') {
            setWeather(null);
            return;
          }
          
          const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`)
          const data = await res.json()
          setWeather(data);
          console.log(Object.keys(data))
        //   console.log(data)
        } catch (error) {
          console.error('Error fetching weather:', error);
        }
      };
      getWeather();
    }, [city]);
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Search location</Text>
            <Text style={styles.txt}>
                Search the area or city that you want to 
            know the detailed weather info at this time</Text>

            <View style={styles.txtInputWrapper}>
                <Feather 
                    style = {styles.icon}
                    name="search" 
                    size={25} 
                    color="white" 
                /> 
                <TextInput
                    style={styles.txtInput}
                    placeholder= {'Search'}
                    placeholderTextColor = 'white'
                    cursorColor = 'white' 
                    value={city}
                    onChangeText={(text) => setCity(text)}
                    // autoCapitalize='words'
                />                
            </View>

            {weather && (
                weather.message !== "city not found"?
                <CityDetails
                    cityTitle = {weather.name}
                    icon = {weatherType[weather.weather[0].main]?.icon}
                    temp = {weather.main.temp}
                    condition = {weather.weather[0].main}
                    pressure = {weather.main.pressure}
                    wind_speed = {weather.wind.speed}
                    humidity = {weather.main.humidity}

                />:
                <SearchLoad
                    txt = {city === ''? 'Search a City/Area': 'Area not Found'}
                />
            )}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        backgroundColor: '#003049',
        flex: 1,
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 23,
        padding: 10,
        fontWeight: 'bold'
    },
    txt: {
        padding: 10,
        color: 'white',
        fontSize: 16,
        fontWeight: '300',
        alignSelf: 'center',
        textAlign: 'center',
        marginBottom: 35
    },
    txtInputWrapper: {
        borderRadius: 10,
        padding: 15,
        backgroundColor: '#003869',
        flexDirection: 'row',
        width: '90%', 
    },
    txtInput: {
        color: 'white'
    },
    icon: {
        padding: 7
    },

})
export default Search