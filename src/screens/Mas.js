
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, SafeAreaView, Dimensions, Text, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Image } from '@rneui/themed';
import * as Linking from 'expo-linking';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Mas() {

  return (


    <SafeAreaView style={styles.container}>

      <StatusBar style="auto" />
      <SafeAreaView style={styles.contenedero}>
        <SafeAreaView style={styles.contenedero_imagen}>
          <Image style={styles.posterImage} source={require('./../../assets/adaptive-icon.png')} />
          <SafeAreaView>
            <Text style={styles.titulo}>Luivid</Text>
            <Text style={styles.subtitulo}>App sin fines de lucro</Text>
          </SafeAreaView>

        </SafeAreaView>

        <SafeAreaView style={{ borderTopColor: '#fff', borderBottomColor: '#fff', borderTopWidth: 0.5, borderBottomWidth: 0.5, marginTop: 10, marginBottom: 10, padding: 10 }}>
          <Text style={{ color: '#fff', fontSize: 20, fontWeight: '900', textAlign: 'center' }}>Colaboradores</Text>
          <SafeAreaView style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
            <Text style={styles.creditos_t}>Desarrollador:</Text>
            <Text style={styles.creditos_t}>Luigy Miranda S.</Text>

          </SafeAreaView>
        </SafeAreaView>

        <TouchableOpacity style={{ flexDirection: 'row', margin: 5, backgroundColor: '#3B3B3B', padding: 10, borderRadius: 5 }} onPress={() => Linking.openURL('https://series-ln.web.app/')}>
          <Icon name="folder-o" size={30} color="white"></Icon>
          <Text style={styles.botones_texto}>Politicas de Privacidad/Legal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row', margin: 5, backgroundColor: '#3B3B3B', padding: 10, borderRadius: 5 }} onPress={() => Linking.openURL('https://firebasestorage.googleapis.com/v0/b/series-ln.appspot.com/o/Politicas_Spansih.html?alt=media&token=aa1e2404-65d5-42d8-8d4d-01cee020abf3')}>
          <Icon name="folder-o" size={30} color="white"></Icon>
          <Text style={styles.botones_texto}>Politicas de Privacidad/Legal - ES </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row', margin: 5, backgroundColor: '#3B3B3B', padding: 10, borderRadius: 5 }} onPress={() => Linking.openURL('https://portafolio-9c685.web.app/')} >
          <Icon name="user" size={30} color="white"></Icon>
          <Text style={styles.botones_texto}>Contacto con el desarrollador</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flexDirection: 'row', margin: 5, backgroundColor: '#3B3B3B', padding: 10, borderRadius: 5 }} onPress={() => Linking.openURL('https://wa.me/593980543329?text=Hola!%0AQuisiera%20que%20agregues%20una%20pelicula%20')} >
          <Icon name="send" size={25} color="white"></Icon>

          <Text style={styles.botones_texto}>Sugerir contenido / Reportar</Text>
        </TouchableOpacity>

        <SafeAreaView style={{ margin: 20, flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <TouchableOpacity style={{ margin: 5, backgroundColor: '#3B3B3B', padding: 10, paddingHorizontal: 20, borderRadius: 5 }} onPress={() => Linking.openURL('https://www.instagram.com/luivid_/')} >
            <Icon name="instagram" size={30} color="white"></Icon>
          </TouchableOpacity>
          <TouchableOpacity style={{ margin: 5, backgroundColor: '#3B3B3B', padding: 10, paddingHorizontal: 20, borderRadius: 5 }} onPress={() => Linking.openURL('https://www.linkedin.com/in/luigymiranda/')} >
            <Icon name="linkedin" size={30} color="white"></Icon>
          </TouchableOpacity>
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: '#000',

  },
  contenedero: {
    margin: 10,
    marginTop: 75
  },
  contenedero_imagen: {
    paddingHorizontal: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  botones_texto: {
    color: '#fff',
    fontSize: 17,
    marginLeft: 10
  },
  posterImage: {
    height: 100,
    width: 100,
    borderRadius: 30
  },
  titulo: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subtitulo: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center'

  },
  creditos_t: {
    color: '#fff',
    fontSize: 19,
    textAlign: 'center'
  }
});
