import React from "react";
import { View,StyleSheet,Text } from "react-native";
const Languages = (props)=>{

        return(
            <View style={styles.languageContainer}>
                <View style={styles.languageNameValue}>
                    <Text>{props.langName}</Text>
                    <Text>{props.langValue}</Text>
                </View>
                <View style={styles.progressbarContainer}>
                    <View style={{backgroundColor:'yellow',borderRadius:5,width:`${props.percent}%`}}><Text></Text></View>
                </View>
            </View>
        )
}

const styles = StyleSheet.create({
    languageContainer:{
        width:300,
        marginTop:10,
        padding:5,
    },
    languageNameValue:{
        width:300,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    progressbarContainer:{
        width:300,
        marginTop:10,
       
        borderColor:'yellow',
        borderWidth:1,
        borderRadius:5
    },
    progressbar:{
        width:300,
        backgroundColor:'yellow',
        borderRadius:5
    }
  });

export default Languages;