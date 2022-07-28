import React, { useEffect, useState } from "react";
import { Text, View, Button, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
const AddTodo = ({ addTask, inV, edit, initialEditableValue }) => {
    
    return (
        <>
            <View style={addTodoStyle.mainContainer}>
                <View style={addTodoStyle.addTodoContainer}>
                    {
                        <Formik
                            enableReinitialize
                            initialValues={{ taskName: inV.taskValue }}


                            validationSchema={Yup.object({
                                taskName: Yup.string().required("Required"),
                            })}


                            onSubmit={values => {
                          
                                initialEditableValue == false ? addTask(values.taskName) : edit(inV, values.taskName);






                            }}

                        >

                            {props => (
                                <>

                                    <TextInput style={{
                                        width: '90%',
                                        borderWidth: 1,
                                        borderColor: '#000',
                                        borderStyle: 'solid',
                                        padding: 5,
                                        fontSize: 16,
                                        borderRadius: 5,
                                        margin: 10,
                                        borderColor: props.touched.taskName && props.errors.taskName ? "red" : "#ccd6df",
                                    }}
                                        value={props.values.taskName}
                                        // defaultValue={inV.taskValue}

                                        onChangeText={props.handleChange("taskName")}

                                        placeholder={"Task Name "}


                                    />
                                    {props.touched.taskName && props.errors.taskName ? (
                                        <Text style={{ color: 'red' }}>{props.errors.taskName}</Text>
                                    ) : null}

                                    <TouchableOpacity style={addTodoStyle.submitBtn}>
                                        <Button onPress={/*() => initialEditableValue == false ? addTask(task) : edit(inV, task)*/ props.handleSubmit} title={initialEditableValue == false ? 'Add Task' : 'Update Task'} color={'#614ad3'} />
                                    </TouchableOpacity>

                                </>
                            )}
                        </Formik>
                    }
                </View>
            </View>



        </>
    )
}
const addTodoStyle = StyleSheet.create({
    mainContainer: {
        flexDirection: 'column',
        height: 230,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    addTodoContainer: {
        width: '90%',
        height: 150,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        marginTop: 50
    },
    inputText: {
        width: '90%',
        borderWidth: 1,
        borderColor: '#000',
        borderStyle: 'solid',
        padding: 5,
        fontSize: 16,
        borderRadius: 5,
        margin: 10
    },
    submitBtn: {
        width: '90%',
        backgroundColor: '#614ad3',
        borderRadius: 5,
        margin: 10,
        padding: 5,
    }
});
export default AddTodo;

