import { StyleSheet } from "react-native";

const AgendamentoStyles = StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center'
    },
    title: {
      fontSize: 30,
      fontWeight: '700',
      textAlign: 'center',
    },
    inputs: {
      marginTop: 30
    },
    input: {
      color: '#000',
      backgroundColor: '#f9f9f9',
      borderRadius: 6,
      fontWeight: '400',
      marginHorizontal: 60,
      margin: 10,
      padding: 14,
    },
    btn: {
      backgroundColor: '#6E07F3',
      paddingHorizontal: 20,
      paddingVertical: 12,
      borderRadius: 6,
      marginHorizontal: 60,
      marginTop: 30
    },
    btn2: {
      backgroundColor: 'white',
      paddingHorizontal: 20,
      paddingVertical: 12,
      borderRadius: 6,
      marginHorizontal: 60,
      marginTop: 30,
      borderWidth: 1,
      borderColor: '#6E07F3',
      borderStyle: 'solid'
    },
    btnText: {
      color: 'white',
      fontWeight: '700',
      textAlign: 'center'
    },
    btnText2: {
      color: '#6E07F3',
      fontWeight: '700',
      textAlign: 'center'
    }
  });

  export default AgendamentoStyles