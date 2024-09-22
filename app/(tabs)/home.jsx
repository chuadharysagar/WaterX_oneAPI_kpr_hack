import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './../../components/Home/Header'
import Categories from '../../components/Home/Categories'
import PostList from '../../components/Home/PostList'
import Colors from '../../constants/Colors'

const home = () => {
   return (
      <View>
         <View style={{
            height:130,
            backgroundColor: '#d4d6d6',
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-between'
         }}><Header />
         <Categories></Categories>
         </View>
         <View style={{
            backgroundColor:Colors.GRAY,
            height:'83%',
            width:'100%'
         }}>
         <PostList></PostList>
         </View>
      </View>
   )
}

export default home

const styles = StyleSheet.create({})