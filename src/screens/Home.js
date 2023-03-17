
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Dimensions, Text, ImageBackground, FlatList, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { LinearGradient } from "expo-linear-gradient";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation, useScrollToTop } from "@react-navigation/native";
import axios from 'react-native-axios';
import Alerta from './Alert_security';
export default function Home() {
  const navigation = useNavigation();
  const windowWidth = Dimensions.get('window').width;

  const [DATA, setData] = React.useState({});
  const [Contenido, SetContenido] = React.useState({
    "id": "0",
    "title": "Avatar: El sentido del agua",
    "autor": "Century Studio",
    "genero": "Acción/Aventura",
    "ano": "2022",
    "portada": "https://static.esplay.io/movie/gallery/original/198vrF8k7mfQ4FjDJsBmdQcaiyq.webp",
  });
  useEffect(() => {
    //const jsonData = require('../json/series.json'); 
    //const response = Object.values(jsonData)
    //setData(response);


    const obtener = async () => {
      try {
        const response = await axios({
          url: "https://pbx.expresito.com/series.json",
        });
        setData(response.data)
      } catch (error) {
        alert(error);
      }
    };
    obtener();

    ///Esto de aca abajo no se que pedo pero dejalo comentado socio
    /*
    fetch(url)
      .then(response => response.json())
      .then(datos_obtenido => setData(datos_obtenido))
      .catch(error => alert(error))
    */
    ///console.log(jsonData[id]);
    //

  }, [])
  const scrollViewRef = useRef(null)
  //console.log(DATA);

  const DATA_1 = Object.values(DATA).filter(item => item.id_g == 1)
  /////Terror
  const DATA_2 = Object.values(DATA).filter(item => item.id_g == 2)
  /////Comedia
  const DATA_3 = Object.values(DATA).filter(item => item.id_g == 3)

  const DATA_4 = Object.values(DATA).filter(item => item.id_g == 4)



  const renderItem = ({ item }) => (
    <Item imagen={item.imagen} id_pelicula={item.id} />
  );

  const Item = ({ imagen, id_pelicula }) => (

    <TouchableOpacity key={id_pelicula} style={{ margin: 5 }} onPress={() => Seleccionar_Pelicula(id_pelicula)}>
      {
        DATA ?
          <ImageBackground imageStyle={{ borderRadius: 15 }} resizeMode="contain" source={{ uri: imagen }} style={styles.posterImage} />
          :
          <ActivityIndicator size={'large'} color={'#fff'} />
      }
    </TouchableOpacity>
  );

  ///console.log([DATA.slice(0, 6)]);



  const Seleccionar_Pelicula = (id) => {
    ///navigation.navigate("Screenfull", {id : id})
    SetContenido(DATA[id]);
    ///alert(Seleccion);
    ///console.log(Contenido);
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: 0, animated: true })
    }

  }


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView ref={scrollViewRef}>
        <ImageBackground resizeMode="cover" source={{ uri: Contenido.portada }} style={styles.container_portada}>
          <LinearGradient
            colors={["transparent", "#000"]}
            style={{
              width: '100%',
              height: 900,
              position: "absolute",
              bottom: 0,
            }}
          />
          <SafeAreaView style={styles.contenedor_x_portada}>
            <Text style={styles.texto_titulo_portada}>{Contenido.title}</Text>
            <SafeAreaView style={styles.contenedor_subtitulos}>
              <Text style={styles.texto_autor_portada}>{Contenido.autor} |</Text>
              <Text style={styles.texto_autor_portada}> {Contenido.ano}</Text>
            </SafeAreaView>
            <TouchableOpacity style={{ backgroundColor: '#fff', padding: 10, borderRadius: 15, flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.navigate("Screenfull", { id: Contenido.id })}>
              <Icon name="play" size={15} color="black"></Icon>
              <Text style={{ fontSize: 15 }}> Reproducir</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </ImageBackground>
        <Text style={styles.texto}>Más vistas</Text>
        <FlatList
          data={DATA_1}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal={true}
          extraData={DATA_1}
          refreshing={true}
        />
        <TouchableOpacity style={{ margin: 5 }} onPress={() => Seleccionar_Pelicula(30)}>
          <ImageBackground imageStyle={{ borderRadius: 15 }} resizeMode="cover" source={{ uri: 'https://www.xtrafondos.com/wallpapers/black-adam-2021-poster-6173.jpg' }} style={{ width: '100%', height: 200 }} />
        </TouchableOpacity>
        <Text style={styles.texto}>Terror</Text>
        <FlatList
          data={DATA_2}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal={true}
          extraData={DATA_2}
          refreshing={true}
        />
        <Text style={styles.texto}>Comedia</Text>
        <FlatList
          data={DATA_3}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal={true}
          extraData={DATA_3}
          refreshing={true}
        />
        <Text style={styles.texto}> Animación - Live Action</Text>
        <FlatList
          data={DATA_4}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal={true}
          extraData={DATA_4}
          refreshing={true}
        />
        <Alerta />
      </ScrollView>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: '#000'
  },

  container_portada: {
    flex: 1,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: "center",
    textAlign: 'center'
  },
  contenedor_x_portada: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: "center",
    textAlign: 'center'
  },
  texto: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',

  },
  texto_catalogo: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0.6)',

  },
  touch: {
    height: 200,
    width: 150,
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  texto_titulo_portada: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  texto_autor_portada: {
    color: '#fff',
    fontSize: 15,
    marginBottom: 20

  },
  contenedor_varios: {
    flex: 3,
    flexWrap: 'wrap'
  },
  posterImage: {
    height: 200,
    width: 150,
    flex: 1,
    alignSelf: "center",
    justifyContent: 'center',
    alignItems: 'center',

  },
  logo: {
    height: 125,
    width: 200,
    resizeMode: 'contain'
  },
  botonx: {
    borderRadius: 25
  },
  contenedor_subtitulos: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  titulos: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 5,
    marginBottom: 10,
    fontWeight: 'bold',
  }
});
