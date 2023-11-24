import React, {useState, useEffect}from "react";
import { View, Text, StyleSheet,SafeAreaView, FlatList} from "react-native";
import { Feather } from '@expo/vector-icons';
import ColumnTxt from "../components/ColumnTxt";
import moment, { now } from "moment";
import { weatherType } from "../utilities/weatherType";
import ListItemSmall from "../components/ListItemSmall";


const CurrentWeather = ({ weather }) => {
    const {list,city} = weather
    const [filteredData, setFilterData] = useState([])
    const [time, setTime] = useState(nowTime);

    const nowTime = moment(new Date()).format('MMM Do YY')

    const checkTime = () => {
        setTime(moment(new Date()).format('MMM Do YY'))
        console.log(time)
    }
    useEffect(() => { 
        const data = list.filter(item => moment(item.dt_txt).format('MMM Do YY') === nowTime)
        setFilterData(data)
        console.log(data)
    }, [time])

    console.log(moment(list.dt_txt).format('MMM Do YY'))
    console.log(moment(new Date()).format('MMM Do YY'))

    const renderItem = ({item}) => (
        <ListItemSmall
            icon = {weatherType[item.weather[0].main]?.icon}
            txtTime = {moment(item.dt_txt).format('h:mm a')}
            txtTemp = {item.main.temp}
        />
    )   
    

    return(
        <SafeAreaView style ={styles.container}>
            <Text style= {styles.cityName}>{`${city.name}`}</Text>
            <Text style={styles.time}>{moment(list[0].dt_txt).format('dddd MMMM Do')}</Text>


            <Feather 
                style={styles.icon} 
                name={weatherType[list[0].weather[0].main]?.icon} 
                size={210} 
                color={'white'}
            />
            <View style = {styles.row}>
                <ColumnTxt
                    txtTop = {'Temp'}
                    txtBottom = {`${list[0].main.temp} °`}
                />

                <ColumnTxt
                    txtTop = {'Wind'}
                    txtBottom = {`${list[0].wind.speed} km/h`}
                />

                <ColumnTxt
                    txtTop = {'Humidity'}
                    txtBottom = {`${list[0].main.humidity} %`}
                />                           
            </View>

            <View>
                <Text style = {styles.today}> Today </Text>
                <FlatList
                    horizontal = {true}
                    data= {filteredData}
                    renderItem={renderItem}
                />
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#003049',
        flex: 1, 
    },
    cityName: {
        color: 'white',
        margin: 5,
        fontSize: 35,
        fontWeight: '900',
        alignSelf: 'center'
    },
    time: {
        color: 'white',
        padding: 10,
        fontSize: 15,
        alignSelf: 'center'
    },
    icon: {
        alignSelf: 'center',
        padding: 20
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }, 
    today: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        margin: 10
    }

})
export default CurrentWeather