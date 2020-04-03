import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
 
export default function Navbar() {
    return (
            <View style={styles.nav}>
                <Text style={styles.h1}>Weather App</Text>
            </View>
    );
}

const styles = StyleSheet.create({
    nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
      height: 90,
      width: '100%',
      backgroundColor: 'black',

    },

    h1: {
        marginTop: 30,
        fontSize: 20,
        color: 'white'
    }
  });