import React from 'react'
import { View,ScrollView, Text,StyleSheet,CheckBox, Image, TouchableOpacity} from 'react-native'

function TodoList({data,handleToggle,handleDelete}) {
    return (
        <ScrollView style={styles.container} >
            {data.map(item=>(<View key={item.id} style={styles.subContainer} >
                <Text style={{flex:1,color:"white",textDecorationLine:item.status?"line-through":"none"}}>{item.title}</Text>
                <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                <CheckBox tintColors={{ true: '#979797'}} value={item.status} onValueChange={()=>handleToggle(item.id)}/>
                <TouchableOpacity onPress={()=>handleDelete(item.id)}>
                <Image source={require(`./delete.png`)} style={{width: 25, height: 25,marginLeft:20,overlayColor : "white"}}/>
                </TouchableOpacity>
                </View>
                </View>))}
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container : {
        backgroundColor : `#424242`,
        padding : 10,
        flex:1,
        marginBottom:80

    },
    subContainer:{
        padding : 10,
        margin:5,
        borderColor : "black",
        borderBottomWidth:2,
        borderLeftWidth:1,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    }
})

export default TodoList
