import React  from "react";
import { StatusBar } from 'expo-status-bar';
import PersonDetails from "./personDetails";
import Languages from "./languages";
import { StyleSheet, View, Image, Text, ScrollView, Button, Touchable, TouchableOpacity } from 'react-native';
import { Icon } from "@rneui/themed";
const Profile = ()=>{
    return(
        <>
                 <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
              <View style={styles.roundedView}>
      
                <Image
                  style={{ height: 100, resizeMode: 'contain', marginTop: 50 }}
                  source={{
                    uri: 'https://cdn-icons.flaticon.com/png/512/3001/premium/3001764.png?token=exp=1658405912~hmac=132c1f95521a1affccba54f44521a45a',
                  }}
                />
              </View>
              <Text style={{ color: '#000', fontSize: 30 }}>Mohamed Farahat</Text>
              <Text style={{ color: '#dadada', fontSize: 20 }}>Front End Developer</Text>
              <View style={styles.iconContainer}>
                <Icon
                  name='sc-linkedin'
                  type='evilicon'
                  color='#eec60a'
                  size={50}
                />
                <Icon
                  name='sc-facebook'
                  type='evilicon'
                  color='#eec60a'
                  size={50}
                />
                <Icon
                  name='sc-twitter'
                  type='evilicon'
                  color='#eec60a'
                  size={50}
                />
                <Icon
                  name='sc-telegram'
                  type='evilicon'
                  color='#eec60a'
                  size={50}
                />
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', width: 300 }}>
                <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
              </View>
              <PersonDetails property="age" value="22" />
              <PersonDetails property="residence" value="Bo" />
              <PersonDetails property="Freelancer" value="Available" />
              <PersonDetails property="Address" value="Benha Qalyubia Egypt" />
      
              <View style={{ flexDirection: 'row', alignItems: 'center', width: 300 }}>
                <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
              </View>
              <Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'left', width: 300 }}>Languages</Text>
      
              <Languages langName="English" langValue="90%" percent='90' style={{with:10}}/>
              <Languages langName="Spanish" langValue="30%" percent="30" />
              <Languages langName="German" langValue="55%" percent="55" />
              <Languages langName="Hindi" langValue="60%" percent="60" />
              <View style={{ flexDirection: 'row', alignItems: 'center', width: 300 }}>
                <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
              </View>
              <View style={styles.btnContainer}>
                <TouchableOpacity>
                   <Text style={styles.btnTxt}>Download Cv</Text>
                </TouchableOpacity>
      
              </View>

            </ScrollView>
        
        </>
    )
}

export default Profile;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#FFFFFF',
    },
    roundedView: {
      borderRadius: 200 / 2,
      backgroundColor: '#fae3d9',
      width: 200,
      height: 200,
      marginTop: 50
    },
    iconContainer: {
  
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      marginTop: 10,
      padding: 10
    },
  
    btnContainer: {
      flex: 1,
      justifyContent: "center",
      padding: 5,
      width: 300,
      backgroundColor: 'yellow',
      margin: 20,
      borderRadius: 5
  
  
    },
    btnTxt: {
      color: '#000',
      textAlign: 'center',
    }
  
  }
  );