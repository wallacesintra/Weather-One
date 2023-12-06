import react from "react";
import { View, Text,StyleSheet } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';


const SearchLoad = (props) => {
    const {txt} = props
    return(
        <View >
            <Text style={styles.searchTxt}>{txt}</Text>
            <FontAwesome5 style={styles.iconGlobe} name="globe-africa" size={150} color="white" />
        </View>
    )
}

const styles = StyleSheet.create({
    searchTxt: {
        padding: 20,
        fontSize: 20,
        fontWeight: '400',
        color: 'white',
        alignSelf: 'center'
    },
    iconGlobe: {
        alignSelf: 'center',
        opacity: 0.8
    }
})

export default SearchLoad