import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Button, Alert} from 'react-native';

 
export default function Previsions() {

    const [icon1, setIcon1] = useState('');
    const [date1, setDate1] = useState('');
    const [max1, setTempMax1] = useState('');

    const [icon2, setIcon2] = useState('');
    const [date2, setDate2] = useState('');
    const [max2, setTempMax2] = useState('');

    const [icon3, setIcon3] = useState('');
    const [date3, setDate3] = useState('');
    const [max3, setTempMax3] = useState('');

    const [icon4, setIcon4] = useState('');
    const [date4, setDate4] = useState('');
    const [max4, setTempMax4] = useState('');

   fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Madrid&appid=89d629057f74251d4d9874908dd2ea9b&units=metric&lang=fr`)
      .then((response) => response.json())
      .then(r => { 
         setIcon1(r.list[0].weather[0].icon)
         setDate1(r.list[0].dt_txt)
         setTempMax1(r.list[0].main.temp_max)

         setIcon2(r.list[1].weather[0].icon)
         setDate2(r.list[1].dt_txt)
         setTempMax2(r.list[1].main.temp_max)

         setIcon3(r.list[2].weather[0].icon)
         setDate3(r.list[2].dt_txt)
         setTempMax3(r.list[18].main.temp_max)

         setIcon4(r.list[3].weather[0].icon)
         setDate4(r.list[3].dt_txt)
         setTempMax4(r.list[3].main.temp_max)
      })

    return (
            <View style={styles.content}>
                <View style={styles.weatherCol}>
                        <Image style={styles.iconWeather} source={{
                            uri: `http://openweathermap.org/img/wn/${icon1}@2x.png`,
                            }} />
                    <View>
                        <Text style={styles.p}>{date1}</Text>
                        <Text style={styles.p}>{max1}°C</Text>
                    </View>
                </View>
                <View style={styles.weatherCol}>
                    <Image style={styles.iconWeather} source={{
                    uri: `http://openweathermap.org/img/wn/${icon2}@2x.png`,
                }} />
                <View>
                    <Text style={styles.p}>{date2}</Text>
                    <Text style={styles.p}>{max2}°C</Text>
                </View>
                </View>
                <View style={styles.weatherCol}>
                <Image style={styles.iconWeather} source={{
                    uri: `http://openweathermap.org/img/wn/${icon3}@2x.png`,
                }} />
                <View>
                    <Text style={styles.p}>{date3}</Text>
                    <Text style={styles.p}>{max3}°C</Text>
                    </View>
                </View>
                <View style={styles.weatherCol}>
                <Image style={styles.iconWeather} source={{
                    uri: `http://openweathermap.org/img/wn/${icon4}@2x.png`,
                }} />
                <View>
                    <Text style={styles.p}>{date4}</Text>
                    <Text style={styles.p}>{max4}°C</Text>
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
        fontSize: 12,
        margin: 5,
        color: 'white'
    },

    weatherCol: {
        marginTop: 20,
        display: 'flex',
        width: 270,
        padding: 0,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderLeftColor: 'white',
        borderRightColor: 'white',
        borderTopWidth: 0,
        borderBottomWidth: 0
    },

    iconWeather: {
        height: 90,
        width: 90,
    },


  });