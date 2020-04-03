import React from 'react';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Previsions from './components/previsions.js';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
          <Navbar></Navbar>
          <Home></Home>
          <Previsions></Previsions>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#0288d1',
  },
});
