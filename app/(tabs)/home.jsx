import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './../../components/Home/Header'

const home = () => {
   return (
      <View>
         <View style={{
            height:130,
            backgroundColor: '#d4d6d6',
         }}><Header /></View>

      </View>
   )
}

export default home

const styles = StyleSheet.create({})