import React from 'react'
import { StyleSheet,Text, TouchableOpacity, View } from 'react-native'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import  AsyncStorage  from '@react-native-async-storage/async-storage';

function Todo({navigation}) {
    const [todo,setTodo] = React.useState([])
    const firstLoad = React.useRef(false)
    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem("todo")
          if(value != null){
              console.log(value)
           setTodo(JSON.parse(value))
          }         
        } catch(e) {
          // error reading value
        }
      }

    const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem("todo", jsonValue)
        } catch (e) {
          console.log("error")
        }
      }

    const handleAdd =(title)=>{
            const payLoad = {
                title,
                status : false,
                id: todo.length+1
            }
            title && setTodo([...todo,payLoad])
    }
    const handleToggle =(id)=>{
        setTodo(todo.map(item=>item.id === id? {...item,status : !item.status}:item))
    }
    const handleDelete =(id)=>{
        setTodo(todo.filter(item=>item.id !== id))
    }

    React.useEffect(()=>{
        if(firstLoad.current){
            storeData(todo)
        }
        firstLoad.current = true;
    },[todo])
    React.useEffect(()=>{
        getData()
    },[])

    return (

            <View style={{flex:1,backgroundColor : `#424242`}}>
                <View style={styles.fill}></View>
                <View style={styles.head}>
                    <Text style={styles.headText} >ToDo</Text>
                    <Text style={{color:"white"}}> {new Date().toDateString()}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('about')} style={styles.button}><Text style={styles.about}>!</Text></TouchableOpacity>
                    
                </View>
                <TodoList data={todo} handleToggle={handleToggle} handleDelete={handleDelete} />
                <TodoInput handleAdd={handleAdd}/>
            </View>

    )
}

const styles = StyleSheet.create({
    fill : {
        height : 30,
        backgroundColor : `#40257a`
    },
    head : {
        height : 60,
        backgroundColor : `#5e35b1`,
        padding : 10,
        flexDirection: "row",
        justifyContent : "space-between",
        alignItems:"flex-end"
    },
    headText :{
        fontWeight : 'bold',
        fontSize:30,
        color:"white"
    },
    about:{
        fontWeight : 'bold',
        fontSize:30,
        color:"white"      
    },
    button:{
        width:30,
        height:30,
        borderRadius:30/2,
        borderColor:"white",
        borderWidth:1 ,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    }
})

export default Todo
