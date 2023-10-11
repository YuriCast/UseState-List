import { StyleSheet } from "react-native";

const ConsultaStyles = StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center'
    },
    title: {
      fontSize: 30,
      fontWeight: '700',
      textAlign: 'center',
    },
    body: {
      justifyContent: 'center',
      marginTop: 30,
      marginHorizontal: 60,

    },
    itemList: {
      borderRadius: 6,
      marginTop: 20,
      backgroundColor: '#6E07F3',
      justifyContent: 'center',
      alignContent: 'center',
      padding: 10
    },
    itemTitle: {
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      marginBottom: 6
    },
    itemText: {
      color: 'white',
      marginTop: 4
    },
    editButton: {
      padding: 10,
      marginTop: 10,
      backgroundColor: 'white',
      borderRadius: 6,
      borderWidth: 1,
      borderColor: '#6E07F3',
      borderStyle: 'solid'
    },
    editButtonText: {
      color: '#6E07F3',
      fontWeight: '700',
      textAlign: 'center',
    },
    btn: {
      backgroundColor: '#6E07F3',
      paddingHorizontal: 20,
      paddingVertical: 12,
      borderRadius: 6,
      marginHorizontal: 60,
      marginTop: 40
    },
    btnText: {
      color: 'white',
      fontWeight: '700',
      textAlign: 'center'
    },
  });

  export default ConsultaStyles