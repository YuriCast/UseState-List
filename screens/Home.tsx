import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './HomeStyles'

import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation()
  return (
    <View style={styles.main}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Cadastro")} style={styles.btn}>
          <Text style={styles.btnText}>
            Cadastrar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Lista")} style={styles.btn}>
          <Text style={styles.btnText}>
            Lista
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}