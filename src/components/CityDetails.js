import react from "react";
import { View, Text,StyleSheet,} from "react-native";
import { Feather } from '@expo/vector-icons';
import ColumnTxt from "../components/ColumnTxt";

const CityDetails = (props) => {

    const {cityTitle,icon,temp,condition,sea_level,wind_speed,humidity} = props
    return (
        <View style = {styles.cityWrapper}>
            <Text style= {styles.cityTitle}>{cityTitle}</Text>
            <Feather
                name = {icon}
                size={180}
                color={'white'}
            />
            <Text style = {styles.cityTemp}>{temp}</Text>
            <Text style = {styles.cityCondition}>{condition}</Text>

            <View style= {styles.cityDetails}>
                <ColumnTxt
                    txtTop = {'Sea Level'}
                    txtBottom = {sea_level}
                />

                <ColumnTxt
                    txtTop = {'Wind'}
                    txtBottom = {wind_speed}
                />

                <ColumnTxt
                    txtTop = {'Humidity'}
                    txtBottom = {humidity}
                />
            </View>

        </View>


    )
}

const styles = StyleSheet.create({
    cityWrapper: {
        padding: 10,
        margin: 20,
        borderRadius: 10,
        //backgroundColor: '#1C5C99',
        justifyContent: 'center',
        alignItems: 'center',
        width: "90%",
        height: 'auto'
    },
    cityTitle: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    cityTemp: {
        fontWeight: 'bold',
        fontSize: 40,
        padding: 10,
        color: 'white'
    },
    cityCondition: {
        fontSize: 25,
        color: 'white'
    },
    cityDetails: {
        flexDirection: 'row',
        
    }
})
export default CityDetails