
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Movie from './src/components/movie';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './src/components/profile';
import MovieDetails from './src/components/movieDetails';
import ContactUs from './src/components/contactUs';
import Todo from './src/components/todo';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'Movies') {
              iconName = focused ? 'tv' : 'tv';
            }
            else if (route.name === 'ContactUs') {
              iconName = focused ? 'call' : 'call';
            }
            else if (route.name === 'To do Tasks') {
              iconName = focused ? 'add-circle-sharp' : 'add-circle-sharp';
            }
            return <Ionicons name={iconName} size={30} color={color} />;
            
           
          },
          tabBarActiveTintColor: '#614ad3',
          tabBarInactiveTintColor: 'gray',
          
          
        })}>
      <Tab.Screen name="Home" component={Profile}  />
      <Tab.Screen name="Movies" component={Movie} />
     <Tab.Screen name="MovieDetails" component={MovieDetails}  />
      <Tab.Screen name="ContactUs" component={ContactUs}  />
      <Tab.Screen name="To do Tasks" component={Todo}  />
    </Tab.Navigator>
  </NavigationContainer>
  );
}


