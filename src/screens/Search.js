import react from "react";
import { View,Text,SafeAreaView,StyleSheet,TextInput } from "react-native";
import { Feather } from '@expo/vector-icons';
import CityDetails from "../components/CityDetails";


const Search = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Search location</Text>
            <Text style={styles.txt}>Search the area or city that you want to know the detailed weather info at this time</Text>

            <View style={styles.txtInputWrapper}>
                <Feather 
                    style = {styles.icon}
                    name="search" 
                    size={25} 
                    color="white" 
                /> 
                <TextInput
                    placeholder= {'Search'}
                    placeholderTextColor = 'white'
                    cursorColor = 'white' 
                />                
            </View>

            <CityDetails
                icon = {'sun'}
                temp = {'28'}
                condition = {'Partly Cloudy'}
                sea_level = {'1020'}
                wind_speed = {'10'}
                humidity = {'50'}
            />


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        backgroundColor: '#003049',
        flex: 1,
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 23,
        padding: 10,
        fontWeight: 'bold'
    },
    txt: {
        padding: 10,
        color: 'white',
        fontSize: 16,
        fontWeight: '300',
        alignSelf: 'center',
        textAlign: 'center',
        marginBottom: 35
    },
    txtInputWrapper: {
        borderRadius: 10,
        padding: 15,
        backgroundColor: '#003869',
        flexDirection: 'row',
        width: '90%', 
    },
    icon: {
        padding: 7
    },

})
export default Search