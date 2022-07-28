
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView,Image,TouchableOpacity} from "react-native";
import axios from "axios";

const MovieDetails = ({navigation,route})=>{
    const [details, setDetails] = useState({});
   // alert(route.params.id);
    useEffect(() => {
      
        axios.get(`https://api.themoviedb.org/3/movie/${route.params.id}?api_key=2a2a8de4b0f174e641b3beaf70912273`)
            .then((res) => setDetails(res.data))
            .catch((error) => console.log(error));


    }, [details])
    //alert(route.params.id);
    return(
        <>
               <TouchableOpacity style={MovieDetailsStyle.detailsContainer}>
                <View key={details.id} style={MovieDetailsStyle.movieItem} >
                    <View style={MovieDetailsStyle.movieTitleContainer}>
                        <Text style={{textAlign:'center',fontSize:15,color:'#614ad3'}}>{details.original_title}</Text>
                    </View>
                    <View style={MovieDetailsStyle.moviePosterContainer}>
                    <Image
                        style={{ width:'100%',height:'80%', resizeMode: 'contain',}}
                        source={{
                            uri:`https://image.tmdb.org/t/p/w500${details.backdrop_path}`,
                        }}
                    />
                    </View>
                    <View style={MovieDetailsStyle.movieOverView}>
                    <Text style={{textAlign:'justify',fontSize:16,color:'#000'}}>{details.overview}</Text>
                    </View>
                </View>
                </TouchableOpacity>
        </>
    )
}
const MovieDetailsStyle = StyleSheet.create({
    detailsContainer:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    movieItem:{
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
        width:300,
        height:600,
        borderRadius:15,
        backgroundColor:'#FFFFFF'
        
    },
    movieTitleContainer:{
        width:'100%',
        height:'10%',
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center'
    },
    moviePosterContainer:{
        width:'100%',
        height:'40%',
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',

    },
    movieOverView:{
        width:'100%',
        height:'50%',
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
        padding:5,
    }
})
export default MovieDetails;