import { View, SafeAreaView, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useState } from "react";

import styles from './ListaStyles'

import { useNavigation } from '@react-navigation/native';

export default function Lista() {
  const navigation = useNavigation()

  const [data, setData] = useState([
    {
      name: "Cristiano Ronaldo",
      position: "Forward",
      age: 36,
      },
      {
      name: "Lionel Messi",
      position: "Attacking Midfielder",
      age: 34,
      },
      {
      name: "Neymar Jr.",
      position: "Forward",
      age: 29,
      },
      {
      name: "Kylian Mbappé",
      position: "Forward",
      age: 23,
      },
      {
      name: "Sergio Ramos",
      position: "Defender",
      age: 35,
      },
      {
      name: "Kevin De Bruyne",
      position: "Midfielder",
      age: 30,
      },
      {
      name: "Robert Lewandowski",
      position: "Forward",
      age: 32,
      },
      {
      name: "Virgil van Dijk",
      position: "Defender",
      age: 30,
      },
      {
      name: "Luka Modric",
      position: "Midfielder",
      age: 35,
      },
      {
      name: "Erling Haaland",
      position: "Forward",
      age: 21,
      },
]);

  return (
    <View style={styles.main}>
      <SafeAreaView>

        <Text style={styles.title}>Jogadores Cadastrados</Text>

        <ScrollView style={styles.body}>
        {data.map(item => (
          <View key={item.name} style={styles.itemList}>
            <Text style={styles.itemTitle}>{item.name}</Text>
            {/* <Text style={styles.itemText}>Data da Consulta: {item.age}</Text> */}
            <Text style={styles.itemText}>Posição: {item.position}</Text>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>Editar</Text>
            </TouchableOpacity>
          </View>
        ))}
        </ScrollView>
        
          <TouchableOpacity onPress={() => navigation.navigate("Cadastro")} style={styles.btn}>
              <Text style={styles.btnText}>
                Voltar à Lista de Agendamento
              </Text>
          </TouchableOpacity>

      </SafeAreaView>
    </View>
  )
}