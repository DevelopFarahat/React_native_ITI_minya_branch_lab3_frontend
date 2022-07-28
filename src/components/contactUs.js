import React from "react";
import { Text, Button, TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import { Formik } from "formik";


const ContactUs = () => {
    return (
        <>
            <View style={contactUsFormStyle.mainContainer}>
                <View style={contactUsFormStyle.contactUsMainContainer}>
                    <Formik
                        initialValues={{ firstName: '', lastName: '', email: '', message: '' }}
                        onSubmit={values => alert(JSON.stringify(values))}
                    >
                        {({ handleChange, handleSubmit, values }) => (
                            <View style={contactUsFormStyle.inputsContainer}>
                                <TextInput style={contactUsFormStyle.inputText}
                                    onChangeText={handleChange('firstName')}
                                    value={values.firstName}
                                    placeholder={"First Name"}
                                />
                                <TextInput style={contactUsFormStyle.inputText}
                                    onChangeText={handleChange('lastName')}
                                    value={values.lastName}
                                    placeholder={"Last Name"}
                                />
                                <TextInput style={contactUsFormStyle.inputText}
                                    onChangeText={handleChange('email')}
                                    value={values.email}
                                    placeholder={"Email"}
                                />
                                <TextInput style={contactUsFormStyle.inputText}
                                    onChangeText={handleChange('message')}
                                    value={values.message}
                                    multiline={true}
                                    numberOfLines={4}
                                    placeholder={"Message"}
                                />
                                <TouchableOpacity style={contactUsFormStyle.submitBtn}>
                                    <Button onPress={handleSubmit} title="Submit" color={'#614ad3'} />
                                </TouchableOpacity>

                            </View>


                        )}
                    </Formik>
                </View>
            </View>

        </>
    )
}

const contactUsFormStyle = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contactUsMainContainer: {
        width: 280,
        height: 400,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    inputsContainer: {
        width: '100%',
        height: '90%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10

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
})
export default ContactUs;