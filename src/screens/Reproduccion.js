
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, SafeAreaView, Dimensions, Text, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import Icon from 'react-native-vector-icons/FontAwesome';

import React, { useEffect } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';

import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;


export default function Reproduccion({ route }) {
  const navigation = useNavigation();
  ///Presionas la pelicula y aparece la descripcion\
  ///Bajar opacidad y que sea mas fina
  const { id } = route.params;
  const idx = id;
  //console.log(id);

  const [Cap, setCap] = React.useState([]);
  useEffect(() => {
    ///const jsonData = require('../json/series.json'); 
    ///console.log(jsonData[id]);
    ///setCap(jsonData[id]);


    const url = "http://clientes.emapad.gob.ec/Manager/Movil_App/series.json";

    fetch(url)
      .then(response => response.json())
      .then(datos_obtenido => setCap(datos_obtenido))
      .catch(error => alert(error))

    ///console.log(jsonData);
    //console.log(jsonData[id][0])
    ///console.log(Cap[0][2]);
    /* Array el objeto 0 lleva hacia las temporadas */
    //console.log(jsonData.temporadas[0][1]);

  })


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        {Cap ?
          <ImageBackground resizeMode="cover" source={{ uri: Cap.portada }} style={styles.container_portada}>
            <LinearGradient
              colors={["transparent", "#000"]}
              style={{
                width: windowWidth,
                height: 900,
                position: "absolute",
                bottom: 0,
              }}
            />
            <SafeAreaView style={styles.contenedor_x_portada}>
              <Text style={styles.texto_titulo_portadax}>{Cap.title}</Text>
              <SafeAreaView style={styles.contenedor_subtitulos}>
                <Text style={styles.texto}>{Cap.autor} |</Text>
                <Text style={styles.texto}> {Cap.genero}</Text>
              </SafeAreaView>
              <TouchableOpacity onPress={() => navigation.navigate("Screenfull", { id: idx })} style={{ backgroundColor: '#fff', padding: 10, borderRadius: 15, flexDirection: 'row', alignItems: 'center' }} >
                <Icon name="play" size={15} color="black"></Icon>
                <Text style={{ fontSize: 15 }}> Reproducir</Text>
              </TouchableOpacity>

            </SafeAreaView>

          </ImageBackground>

          :
          <SafeAreaView>
            <Text style={styles.texto_titulo_portada}>Cargando...</Text>
          </SafeAreaView>
        }




        <Text style={styles.titulos}>Puede que te interesen</Text>

        <ScrollView horizontal={true} style={styles.contenedor_varios}>
          <TouchableOpacity onPress={() => navigation.navigate("Reproduccion", { id: 1 })} style={styles.touch} >
            <ImageBackground imageStyle={{ borderRadius: 15 }} resizeMode="contain" source={{ uri: 'https://img.repelis.id/cover/doctor-strange-en-el-multiverso-de-la-locura.png' }} style={styles.posterImage}>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Reproduccion", { id: 2 })} style={styles.touch} >
            <ImageBackground imageStyle={{ borderRadius: 15 }} resizeMode="contain" source={{ uri: 'https://i.pinimg.com/736x/e2/2f/0e/e22f0e32b529aa4ead81e1f0623f1150.jpg' }} style={styles.posterImage}>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Reproduccion", { id: 4 })} style={styles.touch} >
            <ImageBackground imageStyle={{ borderRadius: 15 }} resizeMode="contain" source={{ uri: 'https://lumiere-a.akamaihd.net/v1/images/p_243_ster_lightyear_9209f1b3.jpeg' }} style={styles.posterImage}>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Reproduccion", { id: 8 })} style={styles.touch} >
            <ImageBackground imageStyle={{ borderRadius: 15 }} resizeMode="contain" source={{ uri: 'https://image.tmdb.org/t/p/w154/gbbZNVuGSD6cPGZ4sfcrA59EKNY.jpg' }} style={styles.posterImage}>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Reproduccion", { id: 9 })} style={styles.touch} >
            <ImageBackground imageStyle={{ borderRadius: 15 }} resizeMode="contain" source={{ uri: 'https://image.tmdb.org/t/p/w154/tQstTS2Q3ZaeWu3fsGDDIr0EBnW.jpg' }} style={styles.posterImage}>
            </ImageBackground>
          </TouchableOpacity>
        </ScrollView>

      </ScrollView >


    </SafeAreaView >
  );
}

const styles = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: '#000',

  },
  titulos: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 5,
    marginBottom: 10,
    fontWeight: 'bold',
  },

  contenedor_x_portada: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: "center",
    textAlign: 'center',

  },
  container_portada: {
    flex: 1,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: "center",
    textAlign: 'center'
  },

  contenedor_subtitulos: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 10
  },
  container_encabezado: {
    marginTop: 40,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginStart: 10,
    marginEnd: 10,
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
    fontSize: 30,
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
    marginTop: 5,
    marginEnd: 10,
    marginStart: 10,
    borderRadius: 10,
    padding: 5,
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
