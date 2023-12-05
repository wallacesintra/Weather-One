import React, {useState, useEffect, memo}from "react";
import { View, Text, StyleSheet,SafeAreaView, FlatList,Image} from "react-native";
import { FlashList } from "@shopify/flash-list";
import { Feather } from '@expo/vector-icons';
import ColumnTxt from "../components/ColumnTxt";
import moment from "moment";
import { weatherType } from "../utilities/weatherType";
import ListItemSmall from "../components/ListItemSmall";
import LinearGradient from "react-native-linear-gradient";


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
        //console.log(data)
    }, [time])

    //console.log(moment(list.dt_txt).format('MMM Do YY'))
    //console.log(moment(new Date()).format('MMM Do YY'))

    const renderItem = ({item}) => (
        <ListItemSmall
            icon = {weatherType[item.weather[0].main]?.colored}
            txtTime = {moment(item.dt_txt).format('H:mm')}
            txtTemp = {item.main.temp}
        />
    )   
    
    return(
        <SafeAreaView style ={styles.container}>
                <Text style= {styles.cityName}>{`${city.name}`}</Text>
                <Text style={styles.time}>{moment(list[0].dt_txt).format(' MMM Do YYYY')}</Text>

                <Image
                    source={weatherType[list[0].weather[0].main]?.colored}
                    //source={require('./rain.png')}
                    style={{width: 210,height: 210, alignSelf: 'center',margin: 40}}
                />
                <View style = {styles.row}>
                    <ColumnTxt
                        txtTop = {'Temp'}
                        txtBottom = {`${Math.round(list[0].main.temp)} °`}
                    />

                    <ColumnTxt
                        txtTop = {'Wind'}
                        txtBottom = {`${Math.round(list[0].wind.speed)} km/h`}
                    />

                    <ColumnTxt
                        txtTop = {'Humidity'}
                        txtBottom = {`${Math.round(list[0].main.humidity)} %`}
                    />                           
                </View>

                <View style={styles.todayWrapper}>
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
        backgroundColor: '#010033',
        flex: 1, 
    },
    cityName: {
        color: 'white',
        marginTop: 40,
        margin: 5,
        fontSize: 30,
        fontWeight: '800',
        alignSelf: 'center'
    },
    time: {
        color: 'white',
        padding: 10,
        fontSize: 15,
        fontWeight: '300',
        alignSelf: 'center'
    },
    icon: {
        alignSelf: 'center',
        padding: 20
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }, 
    today: {
        color: 'white',
        fontSize: 23,
        fontWeight: '600',
        margin: 10
    },
    todayWrapper: {
        marginBottom: 20
    }

})
export default memo(CurrentWeather)