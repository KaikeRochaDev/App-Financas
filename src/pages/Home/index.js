import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from "../../components/Header/index.js"
import Balance from '../../components/Balance/index.js';
import Movements from '../../components/Movements/index.js';
import Actions from '../../components/Actions/index.js';

const list = [
    {
        id: 1,
        label: "Boleto conta luz",
        value: "300,50",
        date: "18/12/2022",
        type: 0 // despesas
    },
    {
        id: 2,
        label: "Pix Cliente X",
        value: "2.500,00",
        date: "25/12/2022",
        type: 1 // receitas
    },
    {
        id: 3,
        label: "Salário",
        value: "7.200,00",
        date: "07/01/2023",
        type: 1 // receitas
    },
]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Kaike Rocha"/>

        <Balance saldo="9,250.90" gastos="-527,00"/>

        <Actions/>

        <Text style={styles.title}>Ultimas movimentações</Text>

        <FlatList
            style={styles.list}
            data={list}
            keyExtractor={ (item) => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <Movements data={item}/>}
        
        />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 14
  },
  list: {
    marginStart: 14,
    marginEnd: 14
  }
});
