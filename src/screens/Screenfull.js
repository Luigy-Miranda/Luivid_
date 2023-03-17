
import { StyleSheet, Image, SafeAreaView, Dimensions, Text, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import React, { useEffect } from 'react';
import WebView from 'react-native-webview';
import * as ScreenOrientation from 'expo-screen-orientation';

import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';




export default function Screenfull({ route }) {
  const navigation = useNavigation();
  ///Presionas la pelicula y aparece la descripcion\
  ///Bajar opacidad y que sea mas fina
  const { id } = route.params;
  const [Estado, SetEstado] = React.useState(true)
  //console.log(id);


  const [Cap, setCap] = React.useState([]);
  useEffect(() => {
    ///const jsonData = require('../json/series.json'); 
    ///console.log(jsonData[id]);
    ///setCap(jsonData[id]);
    /*const detectOrientation= async () => {
      let orientation = await ScreenOrientation.getOrientationAsync();

      SetEstado({ orientation });
    };
    detectOrientation()

    */
    const url = "https://pbx.expresito.com/series.json";

    fetch(url)
      .then(response => response.json())
      .then(datos_obtenido => setCap(datos_obtenido[id]))
      .catch(error => alert(error))

  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <WebView
        source={{ uri: Cap.url }}

      />


    </SafeAreaView >
  );
}

const styles = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: '#000',


  },
  container_encabezado: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginStart: 10,
    marginEnd: 10,
    marginTop: 0
  },
  titulos: {
    justifyContent: 'center',
    marginEnd: 10,
    marginStart: 10
  },
  titulosx: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginEnd: 10,
    marginStart: 10
  },
  scroll: {
    flex: 1
  },
  contenedor_varios: {
    flex: 1,
    flexWrap: 'wrap',
    marginBottom: 20
  },
  touch: {
    margin: 5
  },
  texto_titulo_portadax: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  posterImage: {
    height: 200,
    width: 150,
    flex: 1,
    alignSelf: "center",
    justifyContent: 'center',
    alignItems: 'center',

  },
  texto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  item: {
    marginBottom: 10,
    marginEnd: 10,
    marginStart: 10,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: '#ACACAC'
  },
  siguiente: {
    backgroundColor: '#00407D',
    borderRadius: 10,
    padding: 5,
    justifyContent: 'center',
    width: 160,
    marginBottom: 10,
    marginStart: 10
  },
  texto_titulo_portada: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5
  },
  texto_titulo_portada2: {
    color: '#ACACAC',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5
  }
});
