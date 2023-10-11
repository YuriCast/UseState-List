import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './HomeStyles'

import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation()
  return (
    <View style={styles.main}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Agendamento")} style={styles.btn}>
          <Text style={styles.btnText}>
            Agendamento
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Consulta")} style={styles.btn}>
          <Text style={styles.btnText}>
            Consulta
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}