import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Tabs } from 'expo-router'
import Colors from './../../constants/Colors'
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import Foundation from '@expo/vector-icons/Foundation';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const Tablayout = () => {


   return (
      <Tabs screenOptions={{
         tabBarActiveTintColor: "#01898E",
         tabBarInactiveTintColor: 'black',
         tabBarStyle: {
            backgroundColor: "#B9C0C0",
            height: 55,
         },

      }}>
         <Tabs.Screen name='home' options={{
            headerShown: false,
            title: 'Home',
            tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
         }}

         />
         <Tabs.Screen name='tools' options={{
            headerShown: false,
            title: 'Tools',
            tabBarIcon: ({ color }) => <Entypo name="tools" size={24} color={color} />,
            contentStyle: {
               backgroundColor: '#f8f8f8',
            },
         }} />
         <Tabs.Screen name='chatbot' options={{
            headerShown: false,
            title: 'Ask Me',
            tabBarIcon: ({ color }) => <Ionicons name="chatbox-ellipses-outline" size={24} color={color} />
         }} />
         <Tabs.Screen name='tutorials' options={{
            headerShown: false,
            title: 'Tutorial',
            tabBarIcon: ({ color }) => <Foundation name="play-video" size={24} color={color} />
         }} />
         <Tabs.Screen name='community' options={{
            headerShown: false,
            title: 'Community',
            tabBarIcon: ({ color }) => <MaterialIcons name="groups" size={24} color={color} />
         }} />
      </Tabs>
   )
}

export default Tablayout

const styles = StyleSheet.create({})