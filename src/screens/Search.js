import react,{useState, useEffect} from "react";
import { View,Text,SafeAreaView,StyleSheet,TextInput, } from "react-native";
import { Feather } from '@expo/vector-icons';
import CityDetails from "../components/CityDetails";
import { WEATHER_API_KEY } from '@env'
import { weatherType } from "../utilities/weatherType";
import SearchLoad from "../components/Searchload";


const Search = () => {
    const [cityName, setCityName] = useState('Nairobi')
    const [cityData, setCityData] = useState([])
    const [error, SetError] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetchCityData = async () => {
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${WEATHER_API_KEY}&units=metric&limit=5`)
            const data = await res.json()
            if (res.ok){
                setCityData(data)
                setLoading(true)
            }

        } catch (err) {
            SetError(err)
            console.log(err)
        }
    }

    useEffect(() => {
        ;(async() => {
            await fetchCityData()
        })()
    },[cityName, error])

    if (cityData.list)
    {
        console.log(Object.keys(cityData))
        console.log(cityData.cod)
        
    }
    
    const {list, city} = cityData
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
                    placeholder= {'Search'}
                    placeholderTextColor = 'white'
                    cursorColor = 'white' 
                    onChange={(newCity) => setCityName(newCity)}
                    value={cityName}
                    
                    // autoCapitalize='words'
                />                
            </View>
            {loading?
                <CityDetails
                    cityTitle = {city.name}
                    icon = {weatherType[list[0].weather[0].main]?.icon}
                    temp = {list[0].main.temp}
                    condition = {list[0].weather[0].main}
                    sea_level = {list[0].main.sea_level}
                    wind_speed = {list[0].wind.speed}
                    humidity = {list[0].main.humidity}
                />:
                <SearchLoad/>
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