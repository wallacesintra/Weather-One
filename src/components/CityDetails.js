import react from "react";
import { View, Text,StyleSheet,Image} from "react-native";
import { Feather } from '@expo/vector-icons';
import ColumnTxt from "../components/ColumnTxt";

const CityDetails = (props) => {

    const {cityTitle,icon,temp,condition,pressure,wind_speed,humidity} = props
    return (
        <View style = {styles.cityWrapper}>
            <Text style= {styles.cityTitle}>{cityTitle}</Text>

            <Image
                source = {icon}
                style = {{width: 180, height: 180, alignSelf: 'center', margin: 10}}
            />
            <Text style = {styles.cityTemp}>{`${Math.round(temp)}°`}</Text>
            <Text style = {styles.cityCondition}>{condition}</Text>

            <View style= {styles.cityDetails}>
                <ColumnTxt
                    txtTop = {'Pressure'}
                    txtBottom = {`${Math.round(pressure)} hPa`}
                />

                <ColumnTxt
                    txtTop = {'Wind'}
                    txtBottom = {`${Math.round(wind_speed)} km/h`}
                />

                <ColumnTxt
                    txtTop = {'Humidity'}
                    txtBottom = {`${Math.round(humidity)} %`}
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
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 45,
        padding: 10,
        color: 'white'
    },
    cityCondition: {
        fontSize: 25,
        fontWeight: '400',
        color: 'white'
    },
    cityDetails: {
        flexDirection: 'row',
        
    }
})
export default CityDetails