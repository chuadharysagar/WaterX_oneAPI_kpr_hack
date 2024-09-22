import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { post_list } from './../../assets/images/assests'
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';




const PostList = () => {
   const test1 = post_list[0];
   return (
      <View style={styles.postContainer}>
         <View style={styles.postCard} >
            <View style={styles.postUserNameContainer}>
               <Image
                  source={require('./../../assets/images/profile.jpg')}
                  style={{
                     height: 45,
                     width: 45,
                     borderRadius: 99
                  }}
               />
               <Text style={{
                  fontFamily: 'outfit-bold',
                  fontSize: 18
               }}>Sagar Chaudhary</Text></View>
            <View
               style={{
                  height: 1,
                  backgroundColor: 'gray',
                  width: '100%',
                  marginTop: 4
               }}
            />
            <Text style={styles.heading}>{test1.heading}</Text>
            <Text style={styles.tags}>{test1.hashTags}</Text>
            <View style={{
               padding: 10,
            }}>
               <Image source={test1.img} style={styles.image} />
            </View>
            <View
               style={{
                  height: 1,
                  backgroundColor: 'gray',
                  width: '100%',
                  marginTop: 4
               }} />

            <View style={styles.socialContainer}>
               <View style={styles.socialContainerLeft}>
                  <View style={styles.btnContainer}>
                     <Text>{test1.upVote}</Text>
                     <Entypo name="arrow-bold-up" size={26} color="black" />
                  </View>

                  <View style={styles.btnContainer}>
                     <Text>{test1.downVote}</Text>
                     <Entypo name="arrow-bold-down" size={26} color="black" />
                  </View>

                  <View style={styles.btnContainer}>
                     <FontAwesome name="comment-o" size={26} color="black" />
                  </View>
               </View>
               <View style={{
                  paddingRight:18
               }}>
                <AntDesign name="sharealt" size={26} color="black"/>
               </View>
            </View>
         </View>
      </View>
   )
}

export default PostList

const styles = StyleSheet.create({
   postContainer: {
      display: 'flex',
      alignItems: 'center',
      paddingTop: 10
   },
   postCard: {
      height: '90%',
      width: '95%',
      backgroundColor: 'red',
      borderRadius: 10
   },
   postUserNameContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 20,
      paddingLeft: 10,
      paddingTop: 10

   },
   heading: {
      fontFamily: 'outfit-bold',
      padding: 4,
      fontSize: 16,
      hyphenationFrequency: 'full',
      paddingLeft: 8,
      paddingRight: 8,
   },
   tags: {
      fontFamily: 'outfit',
      fontSize: 13,
      hyphenationFrequency: 'full',
      paddingLeft: 8,
      paddingRight: 8,
   },
   image: {
      height: 300,
      width: '100%',
      borderRadius: 10
   },
   socialContainer: {
      marginTop: 14,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
   },
   socialContainerLeft: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '60%'
   },
   btnContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '20%',
      alignItems: 'center'
   }
})