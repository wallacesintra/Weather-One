import react from "react";
import { View, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';
import ColumnTxt from "./ColumnTxt";


const ListItemSmall = (props) => {
    const { icon, txtTime, txtTemp} = props

    return (
        <View style={styles.smallItem}>
            <Feather
                style = {styles.iconLittle}
                name = {icon}
                size={50}
                color={'white'}
            />
            <ColumnTxt
                txtTop = {`${txtTime}`}
                txtBottom = {`${txtTemp} °`}
            />
        </View>      
    )
}

const styles = StyleSheet.create({
    smallItem: {
        margin: 10,
        alignItems: 'center',
        borderRadius: 10,
        width: 160,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#003869'
    },
    iconLittle: {
        alignSelf: 'center',
        padding: 10
        
    }
})
export default ListItemSmall