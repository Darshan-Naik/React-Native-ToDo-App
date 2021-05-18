import React from 'react'
import { View,TextInput, Text, StyleSheet,TouchableOpacity } from 'react-native'

function TodoInput({handleAdd}) {
    const [title,setTitle]=React.useState("")
    return (
        <View style={styles.inputBox}>
            <TextInput placeholder="Add Task..." style={styles.input} placeholderTextColor={`#c0c0c0`} value={title} onChangeText={setTitle}/>
           <TouchableOpacity onPress={()=>{handleAdd(title);setTitle("")}} style={styles.button}><Text style={{fontSize:45,color : "white"}}>+</Text></TouchableOpacity> 
        </View>
    )
}

const styles = StyleSheet.create({
    inputBox:{
        height:70,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding:10,
        backgroundColor:"#1c54b2",
        borderRadius: 70/2,
        position:"absolute",
        bottom:5,
        right:5,
        width:"80%"
    },
    input:{
        height:70,
        flex:1,
        padding:10,
        fontSize:20,
        color : "white"
    },
    button:{
        height: 70,
        width: 70,
        borderRadius: 70/2,
        backgroundColor:"#1c54b2",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        color : "white"
    }
})

export default TodoInput
