import React,{memo} from "react";
import { View, StyleSheet, SafeAreaView, Text,FlatList, StatusBar} from "react-native";
// import { FlashList } from "@shopify/flash-list";
import ListItem from "../components/listItem";
import moment from "moment";
import { weatherType } from "../utilities/weatherType";

const Forecast = ({weather}) => {
    //console.log(`forecast ${weather}`)

    const renderItem = ({item}) => (
        <ListItem
            icon = {weatherType[item.weather[0].main]?.colored}
            day = {moment(item.dt_txt).format('MMM Do')}
            date = {moment(item.dt_txt).format('H:mm')}
            temp = {Math.round(item.main.temp)}
        />
    )

    return (
        <SafeAreaView style = {styles.container}>
            <Text style= {styles.title}>Forecast Report</Text>
            <FlatList
                data={weather}
                renderItem={renderItem}
                //estimatedItemSize={70}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {  
        flex: 1,
        backgroundColor: '#010033',
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        margin: 5,
        marginTop: 30,
        fontWeight: '600',
        color: 'white',
        alignSelf: 'center'  
    },
    
})
export default memo(Forecast)