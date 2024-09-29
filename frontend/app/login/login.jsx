import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import Colors from './../../constants/Colors';

const Login = () => {
   const [isChecked, setIsChecked] = useState(false);
   const handleCheckBox = () => {
      setIsChecked(!isChecked)
   }

   const [showLogin, SetShowLogin] = useState('Sign up')


   return (
      <LinearGradient
         colors={['#8BA9D1', '#3A7BB0', '#2D5E8A']}
         style={styles.background}>

         <View style={styles.container}>
            <Text style={[styles.text, styles.heading]}>Welcome</Text>

            {showLogin === 'Sign up' ? <TextInput
               style={styles.input}
               placeholder='Enter Your Full Name' /> : <></>}

            <TextInput
               style={styles.input}
               placeholder='Enter Phone Or Email' />


            {showLogin === 'Sign up' ? <TextInput
               style={styles.input}
               placeholder='State or Region' /> : <></>}

            <TextInput
               style={styles.input}
               placeholder='Password'
               secureTextEntry
            />
            {showLogin === 'Sign up' && <TextInput
               style={styles.input}
               placeholder='Confrim Password'
               secureTextEntry
            />}
            <View style={styles.termsCondition}>
               <View style={styles.checkboxContainer}>
                  <TouchableOpacity onPress={handleCheckBox}>
                     <View style={[styles.checkBox, isChecked && styles.active]}></View>
                  </TouchableOpacity>
                  <Text style={styles.termsText}>Accept Terms And Conditions</Text>
               </View>

               <TouchableOpacity style={styles.btn}>
                  <Text style={styles.text}>{showLogin}</Text>
               </TouchableOpacity>

               <View>
                  {showLogin === "Sign up" ? <Text style={styles.text}>Already have an account ? <Text style={styles.termsText} onPress={() => SetShowLogin("Login")}>Login here</Text></Text> :
                     <Text style={styles.text}>Create new an account ? <Text style={styles.termsText} onPress={() => SetShowLogin("Sign up")}>Click here</Text></Text>}
               </View>
            </View>
         </View>
      </LinearGradient>
   );
};

export default Login;

const styles = StyleSheet.create({
   background: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   container: {
      padding: 30,
      backgroundColor: "#CFA96E",
      borderRadius: 16,
      borderWidth: 1,
      borderColor: 'black',
      width: '90%',
   },
   heading: {
      fontSize: 20,
      color: '#333',
      fontWeight: '600', // Change to a valid weight
      textAlign: 'center',
      marginBottom: 30,
   },
   text: {
      fontFamily: 'outfit',
      textAlign: 'center',
   },
   input: {
      fontFamily: 'outfit',
      backgroundColor: Colors.LIGHTORANGE,
      fontSize: 15,
      padding: 8,
      borderRadius: 10,
      borderWidth: 0.3,
      marginBottom: 20,
   },
   termsCondition: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
   },
   checkboxContainer: {
      marginTop: 25,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      marginBottom: 10
   },

   btn: {
      backgroundColor: '#3A7BB0', // Example button color
      padding: 10,
      borderRadius: 10,
      width: 180,
      marginBottom: 10,
   },
   checkBox: {
      height: 20,
      width: 20,
      backgroundColor: 'white',
      marginRight: 10,
      borderRadius: 3,
   },
   active: {
      backgroundColor: "#0A8287",
   },
   termsText: {
      fontFamily: 'outfit',
      color: "#56A5A8",
   },
});
