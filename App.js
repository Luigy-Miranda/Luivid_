
import { StatusBar } from 'expo-status-bar';
import React ,{ useEffect, useState }from 'react';
import Navigation from "./src/Tabs.js";
import { StyleSheet,SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [Estado, SetEstado] = useState(true);
  const storeData = async () => {
      await AsyncStorage.setItem('@storage_Key')
  }

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
          <Navigation/>
      </SafeAreaView >
  );
}
      
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#000',
  }

});
