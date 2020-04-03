import React, { useState } from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';




 
export default function Home() {

    var d = new Date().getDate();
    var date = d.toString().padStart(2, '0');
    var m = new Date().getMonth() + 1;
    var month = m.toString().padStart(2, '0'); 
    var year = new Date().getFullYear();
    var h = new Date().getHours();
    var heure = h.toString().padStart(2, '0');
    var mi = new Date().getMinutes();
    var minu = mi.toString().padStart(2, '0');

    const [city, setCity] = useState('');
    const [desc, setDesc] = useState('');
    const [icon, setIcon] = useState('');
    const [temp, setTemp] = useState('');
    const [min, setMin] = useState('');
    const [max, setMax] = useState('');
    // const [country, setCountry] = useState('F');

   fetch(`https://api.openweathermap.org/data/2.5/weather?q=Madrid&units=metric&appid=89d629057f74251d4d9874908dd2ea9b&lang=fr`)
      .then((response) => response.json())
      .then(r => { 
         setCity(r.name) 
         setDesc(r.weather[0].description)
         setIcon(r.weather[0].icon)
         setTemp(r.main.temp.toFixed(1))
         setMin(r.main.temp_min.toFixed(1))
         setMax(r.main.temp_max.toFixed(1))
        //  setCountry(getCountryName(r.sys.country))
      })

    return (

            <View style={styles.content}>
                <Text style={styles.h1}>Prévisions pour aujourd'hui à</Text>
                <Text style={styles.h2}>{city}</Text>
                <View style={styles.weather}>
                    <Image style={styles.iconWeather} source={{
                    uri: `http://openweathermap.org/img/wn/${icon}@2x.png`,
                }}/>
                        <View>
                            <Text style={styles.p}>{temp}°C</Text>
                            <Text style={styles.p}>{desc}</Text>
                            <Text style={styles.p}>{date}/{month}/{year}</Text>
                        </View>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    content: {
        display: 'flex',
        alignItems: 'center',
        width: '100%'
    },

    h1: {
        fontSize: 18,
        marginTop: 40,
        color: 'white'
    },

    h2: {
        marginTop: 10,
        fontSize: 25,
        color: 'white'
    },

    p: {
        fontSize: 18,
        margin: 5,
        color: 'white'
    },

    weather: {
        marginTop: 20,
        display: 'flex',
        padding: 20,
        flexDirection: 'row',
        borderStyle: 'solid',
        borderWidth: 4,
        borderRadius: 5,
        borderColor: 'white' 
    },

    iconWeather: {
        height: 100,
        width: 100,
        marginRight: 20
    },

    prevButton: {
        color: 'black',
        backgroundColor: 'white',
        width: 100,
        height: 100
    }

  });