import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView,Image,TouchableOpacity} from "react-native";
import axios from "axios";
const Movie = ({navigation}) => {

    const [movies, setMovie] = useState([]);
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=2a2a8de4b0f174e641b3beaf70912273`)
            .then((res) => setMovie(res.data.results))
            .catch((error) => console.log(error));


    }, []);
    return (

        <ScrollView style={MovieStyle.movieMainContainer} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
            {movies?.map((movie) => (
            <TouchableOpacity key={movie.id} onPress={()=>navigation.navigate("MovieDetails",{id:movie.id})}
                >
                <View  style={MovieStyle.movieItem} >
                        <View style={MovieStyle.movieRating}>
                    <Text style={{color:'#FFFFFF'}} >{movie.vote_average}</Text>
                    </View>
                    <View style={MovieStyle.movieTitleContainer}>
                        <Text style={{textAlign:'center',fontSize:15,color:'#614ad3'}}>{movie.title}</Text>
                    </View>
                    <View style={MovieStyle.moviePosterContainer}>
                    <Image
                        style={{ width:'100%',height:'80%', resizeMode: 'contain',}}
                        source={{
                            uri:`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
                        }}
                    />
                    </View>
                </View>
                </TouchableOpacity>
            ))}

        </ScrollView>
    )
}


const MovieStyle = StyleSheet.create({
    movieMainContainer: {
      /*  marginTop: 80,*/
        paddingBottom: 100,
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#0C182D',
    },
    movieItem:{
        marginTop:10,
        marginBottom:10,
        width:300,
        height:200,
        margin:15,
        borderRadius:15,
        backgroundColor:'#FFFFFF'
        
    },
    movieTitleContainer:{
        width:'100%',
        height:'20%',
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center'
    },
    moviePosterContainer:{
        width:'100%',
        height:'80%',
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center'

    },
    movieRating:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width:45,
        height:45,
        borderRadius:45/2,
        backgroundColor:'#614ad3',
        position:'absolute',
        top:'85%',
        left:'40%',
        zIndex:100,
        shadowOffset:80,
        shadowRadius:30,
        shadowColor:'#dadada'

    }
})
export default Movie;