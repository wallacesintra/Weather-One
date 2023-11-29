import react from "react";
import { View, Text,StyleSheet } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';


const SearchLoad = (props) => {
    const {txt} = props
    return(
        <View >
            <Text style={styles.searchTxt}>{txt}</Text>
            <FontAwesome5 style={styles.iconGlobe} name="globe-africa" size={100} color="white" />
        </View>
    )
}

const styles = StyleSheet.create({
    searchTxt: {
        padding: 20,
        fontSize: 20,
        fontWeight: '600',
        color: 'white',
        alignSelf: 'center'
    },
    iconGlobe: {
        alignSelf: 'center'
    }
})

export default SearchLoad