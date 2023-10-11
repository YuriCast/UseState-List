import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import styles from './AgendamentoStyles'
import { useState } from 'react';
import navigation from '../navigation';

import { useNavigation } from '@react-navigation/native';

export default function Agendamento() {
  const navigation = useNavigation()

  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ cpf, setCpf ] = useState('')
  const [ data, setData ] = useState('')
  const [ endereco, setEndereco ] = useState('')
  const [ valor, setValor ] = useState('')

  function handleUserAdd(){
    console.log(
        "Nome Completo: " + name + "\nEmail Completo: " + email +
        "\nCPF: " + cpf + "\nData de Nascimento: " + data +
        "\nEndereço: " + endereco + "\nValor da consulta: " + valor
    )

    Alert.alert(
      "Nome Completo: " + name + "\nEmail Completo: " + email +
      "\nCPF: " + cpf + "\nData de Nascimento: " + data +
      "\nEndereço: " + endereco + "\nValor da consulta: " + valor
    )
}

  return (
    <View style={styles.main}>
      <SafeAreaView>
        <Text style={styles.title}>Agendamento</Text>
        <View style={styles.inputs}>
          <TextInput 
                style={styles.input}
                placeholder="Nome Completo"
                value={ name }
                onChangeText={ setName }
            />

            <TextInput 
                style={styles.input}
                placeholder="CPF"
                value={ cpf }
                onChangeText={ setCpf }
            />
                    <TextInput 
                style={styles.input}
                placeholder="Data de Nascimento"
                value={ data }
                onChangeText={ setData }
            />
                    <TextInput 
                style={styles.input}
                placeholder="Endereço"
                value={ endereco }
                onChangeText={ setEndereco }
            />
                    <TextInput 
                style={styles.input}
                placeholder="Valor da Consulta"
                value={ valor }
                onChangeText={ setValor }
            />
          </View>

          <TouchableOpacity onPress={ handleUserAdd } style={styles.btn}>
          <Text style={styles.btnText}>
            Cadastrar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Consulta")} style={styles.btn2}>
          <Text style={styles.btnText2}>
            Ir à Lista de Consulta
          </Text>
        </TouchableOpacity>

        </SafeAreaView>
    </View>
  )
}