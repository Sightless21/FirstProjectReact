import { StyleSheet, Text, View, ActivityIndicator, FlatList} from "react-native";
import React, {useEffect,useState} from "react";
import axios from "axios";

interface WeatherState {
    data: any;
    loading: boolean;
    error: string | null;

}

const WeatherLondon = ():React.JSX.Element => {
    const [state,setState] = useState<WeatherState>({
        data: null,
        loading: true,
        error: null
    });

    const fetchWeatherData = async () => {
        const API_KEY = 'd78aaab2d84844433d115114fb3bb62e';
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}&units=metric`;

        try {
            const response = await axios.get(URL);
            setState({
                data: response.data,
                loading: false,
                error: null
            });
        } catch(error){
            setState({
                data: null,
                loading: false,
                error: 'Failed to fetch weather data'
            });
        }
    }

    useEffect(() => {
        fetchWeatherData();
    }, [])

    if(state.error) {
        return(
            <View>
                <Text style = {styles.errorText}>{state.error}</Text>
            </View>
        )
    }
    if (state.loading) {
        return(
            <View>

            </View>
        )
    }

  return (
    <View style = {styles.container}>
     <Text style = {styles.cityName}>{state.data.name}</Text>
     <Text style = {styles.temp}>{state.data.main.temp}°C</Text>
     <Text style = {styles.weatherMain}>{state.data.weather[0].main}</Text>
     <Text style = {styles.weatherDescription}>{state.data.weather[0].description}</Text>
     <FlatList
     // specify only certain values by making a list of data yourself
     data = {[
        {key: 'Feels like', value: `${state.data.main.feels_like} C` },
        {key: 'Min Temp', value: `${state.data.main.temp_min} C` },
        {key: 'Max Temp', value: `${state.data.main.temp_max} C` },
        {key: 'Humidity', value: `${state.data.main.humidity} %` },
        {key: 'Pressure', value: `${state.data.main.pressure} hPa` },
     ]}
     renderItem = {({item}) => (
        <View style = {styles.detailContainer}>
            <Text style = {styles.detailKey}>{item.key}</Text>
            <Text style = {styles.detailValue}>{item.value}</Text>
        </View>
     )}
     keyExtractor={item => item.key.toString()}
     />
    </View>
  );
};

export default WeatherLondon;
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 40,
        backgroundColor: '#f5f5f5',
    },
    centeredContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        fontSize: 18,
        color: 'red',
    },
    cityName: {
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#333',
    },
    temp: {
        fontSize: 64,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#f9cd47',
    },
    weatherMain: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 4,
        color: '#333',
    },
    weatherDescription: {
        fontSize: 20,
        fontStyle: 'italic',
        marginBottom: 16,
        color: '#666',
    },
    details: {
        marginTop: 16,
        paddingHorizontal: 16,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    detailContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 4,
    },
    detailKey: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    detailValue: {
        fontSize: 18,
        color: '#333',
    },
 });