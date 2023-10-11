import { View, SafeAreaView, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useState } from "react";

import styles from './ConsultaStyles'

import { useNavigation } from '@react-navigation/native';

export default function Consulta() {
  const navigation = useNavigation()

  const [data, setData] = useState([
    { name: 'Yuri Castilho', date: '2023-10-09', time: '11:15', price: 'R$100' },
    { name: 'Yasmin Castilho', date: '2023-10-10', time: '16:00', price: 'R$200' },
    { name: 'Enzo Castilho', date: '2023-10-11', time: '09:30', price: 'R$120' },
]);

  return (
    <View style={styles.main}>
      <SafeAreaView>

        <Text style={styles.title}>Pacientes Agendados</Text>

        <View style={styles.body}>
        {data.map(item => (
          <View key={item.name} style={styles.itemList}>
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Text style={styles.itemText}>Data da Consulta: {item.date}</Text>
            <Text style={styles.itemText}>Horário da Consulta: {item.time}</Text>
            <Text style={styles.itemText}>Valor: {item.price}</Text>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>Editar</Text>
            </TouchableOpacity>
          </View>
        ))}
        </View>
        
          <TouchableOpacity onPress={() => navigation.navigate("Agendamento")} style={styles.btn}>
              <Text style={styles.btnText}>
                Voltar à Lista de Agendamento
              </Text>
          </TouchableOpacity>

      </SafeAreaView>
    </View>
  )
}