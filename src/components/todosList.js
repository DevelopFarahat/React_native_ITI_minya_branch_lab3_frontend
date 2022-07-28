import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Icon } from "@rneui/themed";
import { Checkbox } from 'react-native-paper';
const TodoList = ({ task, onDeleteTask, setCompletedTask, setInv, setEditable,changeSelectedTask }) => {
    const [checked, setChecked] = useState(false);
    const s = () => {
        setEditable(true);
        task.editable = true;
        setInv(task);
    }
    return (
        <>
            <View style={todoStyle.mainContainer}>
                <ScrollView style={todoStyle.tasksContainer} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={todoStyle.task}>
                        <Text style={{ color: checked ? '#313238' : '#FFFFFF', fontSize: 19, textAlign: 'left', paddingLeft: 5, textDecorationLine: checked ? 'line-through' : 'none' }}>{task.taskValue}</Text>
                       
                        <View style={todoStyle.iconActionContainer}>
                            <Checkbox
                                color="#FF3B1D"
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked(!checked);
                                    changeSelectedTask(!checked);
                                    setCompletedTask(task.id, !checked)
                                }}
                               
                            />
                            <Icon
                                name='edit'
                                type='Entypo'
                                color='#000'
                                size={22}
                                onPress={() => s()}
                                style={{paddingLeft:0}}
                            />
                            <Icon
                                name='trash'
                                type='font-awesome-5'
                                color='#000'
                                size={22}
                                style={{paddingLeft:5}}
                                onPress={() => onDeleteTask(task.id)}
                            />
                        </View>
                    </View>
                    <Text style={{textAlign:'justify',fontSize:18}}>{task.date}</Text>
                </ScrollView>

            </View>
        </>
    )
}
const todoStyle = StyleSheet.create({

    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    tasksContainer: {
        width: '90%',
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,

    },
    task: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
       /* height: 50,*/
        padding: 15,
        
        backgroundColor: '#614ad3',
        borderRadius: 5,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        margin: 10
    },
    iconActionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '40%',
        height: '100%',
        
    }
});
export default TodoList;