
import { Modal, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Alerta() {

  const [modalVisible, setModalVisible] = useState(false);

  const guardar_data = async () => {

    try {
      setModalVisible(false)
      await AsyncStorage.setItem('@estado', 'Ocultar')
    } catch (e) {
      // saving error
    }
  }
  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('@estado')

        if (value !== null) {
          setModalVisible(false)
        } else {
          setModalVisible(true)

        }
      } catch (e) {
        // error reading value
      }
    }
    getData()
  })


  return (
    <View style={styles.centeredView}>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <ScrollView style={styles.modalView}>
            <Text style={styles.modalText}>Esta aplicación "Luivid" está de acuerdo con 17 USC § 512 y la Ley de Derechos de Autor del Milenio Digital ("DMCA"). Es nuestra política responder a cualquier notificación de infracción y tomar las medidas apropiadas en virtud de la Ley de Derechos de Autor del Milenio Digital ("DMCA") y otras leyes de propiedad intelectual aplicables. Los enlaces que aparecen en esta aplicación se han encontrado en páginas como: Youtube.com, Yourupload.com, ok.ru, serieslan.com, gnula.nu, www.pelisplus.lat, pelisplushd.is, mega.nz, uqload.com, v9.pelispluss.org, pelisplus, drive.com, etc. Se desconoce si las citadas páginas tienen contratos de compraventa o cesión de derechos sobre el material para reproducir, alojar o permitir su descarga, por lo que son totalmente responsables del contenido que publican.
              Esta aplicación (Luivid) funciona como un motor de búsqueda de videos y no almacena ni aloja ningún archivo u otro material con derechos de autor. El material se reproduce a través de enlaces externos que se han encontrado en las páginas antes mencionadas, por lo que este material se considera de distribución gratuita. En ningún artículo legal se menciona la prohibición de material gratuito, por lo que esta aplicación no viola la ley en ningún caso.
              Todas las marcas aquí mencionadas, descripciones, imágenes y logotipos están registrados por sus legítimos propietarios y fueron recogidos de la web, sólo se utilizan en referencia a las mismas y con fines de cita o comentario, de conformidad con el artículo 32 LPI. "Luivid" no atribuye la calidad del autor, no altera el contenido, no elimina ni cambia el nombre del autor, no modifica el título, no respalda los productos, servicios, contenido, información, datos, opiniones, archivos y cualquier tipo de material existente en las páginas citadas anteriormente.
              No nos hacemos responsables del uso indebido que puedas hacer del contenido de nuestra página.
              En ningún caso o circunstancia los titulares o colaboradores podrán ser considerados directa o indirectamente responsables del uso ilícito de la información contenida en "Luivid".
              Asimismo, no podemos responsabilizarnos directa o indirectamente del uso incorrecto o mala interpretación que se haga de la información y servicios incluidos. Asimismo, el material al que pueda acceder desde nuestros enlaces estará fuera de nuestra responsabilidad.
              Toda la información y programas aquí recogidos están destinados al efectivo cumplimiento de los derechos contenidos en el artículo 31 RD/1/1996, por el que se aprueba el texto refundido de la Ley de Propiedad Intelectual (LPI), en particular la referencia al artículo 31.2 LPI, y de conformidad con lo dispuesto en el artículo 100.2 de esta misma ley.
              Si en su país, este tipo de página está prohibida, usted y solo usted es responsable para entrar y permanecer en la Aplicación
              "Luivid" Si decide permanecer en nuestro sitio web, significa que ha leído, entendido y aceptado las condiciones de esta página.
              Nos reservamos el derecho de vetar el ingreso de cualquier tema a nuestro sitio web y a su vez nos reservamos el derecho de prohibir el uso de cualquier programa y/o información, de conformidad con los derechos de autor otorgados por el artículo 14 LPI.
              Visitar o acceder a esta aplicación, que es privada y no pública, requiere la aceptación de este aviso.</Text>


          </ScrollView>
          <TouchableOpacity style={styles.button} onPress={() => guardar_data()}>
            <Text style={styles.textStyle}>Aceptar</Text>
          </TouchableOpacity>
        </View>
      </Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    marginTop: 10,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    padding: 10,
    paddingHorizontal: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2196F3',
    marginBottom: 10,
    marginRight: 20,
    marginLeft: 20,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,

  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: "justify"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "justify"

  },
});