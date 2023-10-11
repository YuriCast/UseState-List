import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import styles from './CadastroStyles'
import { useState } from 'react';
import navigation from '../navigation';

import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {
  const navigation = useNavigation()

  const [ name, setName ] = useState('')
  const [ idade, setIdade ] = useState('')
  const [ nacionalidade, setNacionalidade ] = useState('')
  const [ xp, setXp ] = useState('')

  function handleSubmit(){
    console.log(
        "Nome do Técnico: " + name + "\nIdade do Técnico: " + idade +
        "\nNacionalidade do Técnico: " + nacionalidade + "\nExperiência do Técnico: " + xp
    )

    Alert.alert(
      "Nome do Técnico: " + name + "\nIdade do Técnico: " + idade +
      "\nNacionalidade do Técnico: " + nacionalidade + "\nExperiência do Técnico: " + xp
    )
}

  return (
    <View style={styles.main}>
      <SafeAreaView>
        
          <Text style={styles.title}>Cadastro</Text>

          <View style={styles.inputs}>
            <TextInput 
                  style={styles.input}
                  placeholder="Nome do Técnico"
                  value={ name }
                  onChangeText={ setName }
              />

              <TextInput 
                  style={styles.input}
                  placeholder="Idade do Técnico"
                  value={ idade }
                  onChangeText={ setIdade }
              />
              <TextInput 
                  style={styles.input}
                  placeholder="Nacionalidade do Técnico"
                  value={ nacionalidade }
                  onChangeText={ setNacionalidade }
              />
              <TextInput 
                  style={styles.input}
                  placeholder="Experiência do Técnico"
                  value={ xp }
                  onChangeText={ setXp }
              />
            </View>

          <TouchableOpacity onPress={ handleSubmit } style={styles.btn}>
            <Text style={styles.btnText}>
              Cadastrar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Lista")} style={styles.btn2}>
            <Text style={styles.btnText2}>
              Ir à Lista de Jogadores
            </Text>
          </TouchableOpacity>

          <Text style={styles.saida}>Nome do Técnico: { name }</Text>
          <Text style={styles.saida}>Idade do Técnico: { idade }</Text>
          <Text style={styles.saida}>Nacionalidade do Técnico: { nacionalidade }</Text>
          <Text style={styles.saida}>Experiência do Técnico: { xp }</Text>

        </SafeAreaView>
    </View>
  )
}