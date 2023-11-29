import react from "react";
import { View, Text,StyleSheet } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';


const SearchLoad = () => {
    return(
        <View >
            <Text style={styles.searchTxt}>search a city</Text>
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