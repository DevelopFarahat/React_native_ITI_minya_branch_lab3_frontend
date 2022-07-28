import React from "react";
import { View,StyleSheet,Text } from "react-native";

const PersonDetails = (props)=>{

   
        return(
            <View style={styles.personDetailsContainer}>
                <View style={styles.characteristicName}>
                    <Text>{props.property}</Text>
                </View >
                <Text style={styles.characteristicValue}>{props.value}</Text>
            </View>
        )
    
}
const styles = StyleSheet.create({
    personDetailsContainer:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width:300,
        marginTop:20,
        padding:15
    },
    characteristicName:{
        width:150,
        backgroundColor:'yellow',
        padding:20,
        fontSize:20,
        textAlign:'center'
    },
    characteristicValue:{
       justifyContent:'flex-end',
       width:150,
       textAlign:'right',
       padding:20,
       fontSize:15
     
    }
  });
export default PersonDetails;