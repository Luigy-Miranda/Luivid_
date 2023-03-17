
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, SafeAreaView, Dimensions, Text, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { LinearGradient } from "expo-linear-gradient";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";
import { SearchBar } from '@rneui/themed';


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
export default function Home() {
  const navigation = useNavigation();
  const [Busqueda, setBusqueda] = React.useState({});
  const [Data, setData] = React.useState({});


  ///const jsonData = require('../json/series.json'); 

  const RenderPeliculas = () => {
    ///console.log(jsonData[id]);

    ///const response = Object.values(jsonData)
    //const response = Object.values(jsonData).filter(item => item.id < 6)
    ///setBusqueda(response);
    ///console.log('Entro a RenderPeliculas');
    const url = "https://pbx.expresito.com/series.json";

    fetch(url)
      .then(response => response.json())
      .then(datos_obtenido => setBusqueda(Object.values(datos_obtenido)))
      .catch(error => alert(error))
    setData(Busqueda);

  }
  useEffect(() => {
    RenderPeliculas();
    //Esto es para conectarse al servidor




  }, [])


  const renderItem = ({ item }) => (
    <Item imagen={item.imagen} id_pelicula={item.id} />
  );

  const Item = ({ imagen, id_pelicula }) => (
    <TouchableOpacity style={{ margin: 5 }} onPress={() => navigation.navigate("Screenfull", { id: id_pelicula })}>
      <ImageBackground imageStyle={{ borderRadius: 15 }} resizeMode="contain" source={{ uri: imagen }} style={styles.posterImage}>
      </ImageBackground>
    </TouchableOpacity>
  );


  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);

    const Busqueda_filtrada = Busqueda.filter(item => {

      if (item.title.toLowerCase().includes(search.toLowerCase())) {
        return item;
      }
    });

    if (Busqueda_filtrada.length >= 1) {
      setBusqueda(Busqueda_filtrada);

    } else {
      const response = Object.values(Data)
      setBusqueda(response);
    }
  };

  return (


    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <SearchBar
        placeholder="Que quisieras ver hoy?"
        onChangeText={updateSearch}
        onClear={RenderPeliculas}
        value={search}
        containerStyle={{ marginTop: 20, backgroundColor: 'rgba(0,0,0,0.2)' }}
      />
      <FlatList
        data={Busqueda}
        numColumns={2}
        renderItem={renderItem}
        refreshing={true}
        columnWrapperStyle={{ flex: 1, flexWrap: 'wrap', justifyContent: 'center' }}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <SafeAreaView style={{ width: 5 }} />}
      />
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  posterImage: {
    height: 200,
    width: 150,
    flex: 1

  },
  resultado_tex: {
    color: '#fff',
    fontSize: 20
  }
});
