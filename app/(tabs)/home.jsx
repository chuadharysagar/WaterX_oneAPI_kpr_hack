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
            height: 130,
            backgroundColor: '#d4d6d6',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
         }}><Header />
            <Categories></Categories>
         </View>
         <PostList></PostList>
      </View>
   )
}

export default home

const styles = StyleSheet.create({})