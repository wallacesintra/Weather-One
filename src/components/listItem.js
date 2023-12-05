import react from "react";
import {View, StyleSheet, Text,Image} from "react-native";
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

        <Text style = {styles.temp}>{`${temp}°`}</Text>

        {/* <Feather style={styles.icon} name={icon} size={60} color={'white'}/> */}
        <Image source = {icon} style={styles.icon} />

    </View>       
    )
}

const styles = StyleSheet.create({
    row: {
        width: 'auto',
        backgroundColor: '#181562',
        borderRadius: 10,
        margin: 10,
        padding: 5,
        flexDirection: 'row',
        gap: 34,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    time: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    temp: {
        padding: 10,
        alignSelf: 'center',
        color: 'white',
        fontSize: 40,
        fontWeight: '600'
    },
    icon: {
        padding: 10,
        alignSelf: 'center',
        width: 60,
        height: 60
    }    
})


export default ListItem