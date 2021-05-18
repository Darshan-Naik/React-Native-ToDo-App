import React from 'react'
import { StyleSheet, View ,Text, TouchableOpacity} from 'react-native'

function About({navigation}) {
    return (
        <>
        <View style={styles.fill}></View>
        <View style={styles.aboutContainer}>
            <View style={styles.box}>
                <Text style={styles.text}>About :</Text>
                <Text style={styles.text}>ToDo App V1.0</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.text}>Designed and developed by :</Text>
                <Text style={styles.text}>Darshan Naik</Text>
            </View>
            <TouchableOpacity  onPress={() => navigation.navigate('Home')} style={styles.button} style={styles.button} ><Text style={styles.text}>Go to Home</Text></TouchableOpacity>
        </View>
        </>
    )
}
const styles = StyleSheet.create({
    aboutContainer:{
        flex:1,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor :`#5e35b1`
    },
    box:{
        margin:20,
        padding : 10,
        borderWidth:1,
        borderColor:"black",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    },
    text :{
        fontSize:20,
        padding:5
    },
    button:{
        backgroundColor: `#40257a`,
        padding:10,
        borderRadius:5,
        borderColor:"white",
        borderWidth:2,
        marginTop:200
    },
    fill : {
        height : 30,
        backgroundColor : `#40257a`
    },
})
export default About
