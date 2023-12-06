import react from "react";
import { View, StyleSheet, Image } from "react-native";
import { Feather } from '@expo/vector-icons';
import ColumnTxt from "./ColumnTxt";


const ListItemSmall = (props) => {
    const { icon, txtTime, txtTemp} = props

    return (
        <View style={styles.smallItem}>
            {/* <Feather
                style = {styles.iconLittle}
                name = {icon}
                size={40}
                color={'white'}
            /> */}
            <Image
                source={icon}
                style = {styles.iconLittle}
            />
            <ColumnTxt
                txtTop = {`${txtTime}`}
                txtBottom = {`${Math.round(txtTemp)} °`}
            />
        </View>      
    )
}

const styles = StyleSheet.create({
    smallItem: {
        margin: 10,
        alignItems: 'center',
        borderRadius: 10,
        width: 130,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#14125C'
    },
    iconLittle: {
        alignSelf: 'center',
        padding: 5,
        width: 40,
        height: 40
        
    }
})
export default ListItemSmall