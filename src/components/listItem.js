import react from "react";
import {View, StyleSheet, Text} from "react-native";
import ColumnTxt from "../components/ColumnTxt";
import { Feather } from '@expo/vector-icons';

const ListItem = (props) => {
    const {day, date, temp,icon} = props
    return (
    <View style = {styles.row}>
        <ColumnTxt
            style = {styles.time}
            txtTop = {`${day}`}
            txtBottom = {`${date}`}
        />

        <Text style = {styles.temp}>{`${Math.round(temp)}°`}</Text>

        <Feather style={styles.icon} name={icon} size={60} color={'white'}/>

    </View>       
    )
}

const styles = StyleSheet.create({
    row: {
        width: "95%",
        backgroundColor: '#003869',
        borderRadius: 30,
        margin: 10,
        padding: 5,
        flexDirection: 'row',
        gap: 30,
        justifyContent: 'space-around'
    },
    time: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },
    temp: {
        padding: 15,
        alignSelf: 'center',
        color: 'white',
        fontSize: 45,
        fontWeight: 'bold'
    },
    icon: {
        padding: 15,
        alignSelf: 'center'
    }    
})


export default ListItem