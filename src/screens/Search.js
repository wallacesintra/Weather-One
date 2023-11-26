import react,{useState, useEffect} from "react";
import { View,Text,SafeAreaView,StyleSheet,TextInput, } from "react-native";
import { Feather } from '@expo/vector-icons';
import CityDetails from "../components/CityDetails";
import { WEATHER_API_KEY } from '@env'
import { weatherType } from "../utilities/weatherType";


const Search = () => {
    const [cityName, setCityName] = useState('')
    const [cityData, setCityData] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchCityData = async () => {
        try {
            if (cityName !== ''){
                const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${WEATHER_API_KEY}&units=metric`)
                const data = await res.json()
                setCityData(data)
            }   
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        ;(async () => {
            await fetchCityData()    
        })()
    }, [cityName])
    
    if (cityData.list)
    {
        setLoading(false)
    }
    if (cityData)
    {
        console.log(Object.keys(cityData))
        console.log(cityData.cod)
        console.log(cityData.message)
    }
    
    const {list, city} = cityData
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Search location</Text>
            <Text style={styles.txt}>Search the area or city that you want to know the detailed weather info at this time</Text>

            <View style={styles.txtInputWrapper}>
                <Feather 
                    style = {styles.icon}
                    name="search" 
                    size={25} 
                    color="white" 
                /> 
                <TextInput
                    placeholder= {'Search'}
                    placeholderTextColor = 'white'
                    cursorColor = 'white' 
                    onChangeText={newCity => setCityName(newCity)}
                    // onChange={onSearchCity}
                    value={cityName}
                    autoCapitalize='words'
                />                
            </View>
            {loading?
                <CityDetails
                    cityTitle = {city.name}
                    icon = {weatherType[list[0].weather[0].main]?.icon}
                    temp = {list[0].main.temp}
                    condition = {list[0].weather[0].main}
                    sea_level = {'1020'}
                    wind_speed = {list[0].wind.speed}
                    humidity = {list[0].main.humidity}
                />:
                <View>
                    <Text>Search a city</Text>
                </View>
            }
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
    icon: {
        padding: 7
    },

})
export default Search