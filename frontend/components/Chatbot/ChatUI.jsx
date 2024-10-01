import React, { useState, useRef, } from 'react';
import {
   View,
   Text,
   TextInput,
   TouchableOpacity,
   FlatList,
   StyleSheet,
   KeyboardAvoidingView,
   Platform,
   SafeAreaView,
} from 'react-native';
import Colors from './../../constants/Colors'

const ChatUI = () => {
   const [messages, setMessages] = useState([]);
   const [inputText, setInputText] = useState('');
   const flatListRef = useRef(null);

   const handleSend = () => {
      if (inputText.trim()) {
         // Add user message
         const userMessage = {
            id: messages.length.toString(),
            text: inputText.trim(),
            isUser: true,
         };

         setMessages([...messages, userMessage]);

         // Simulate bot response
         setTimeout(() => {
            const botMessage = {
               id: (messages.length + 1).toString(),
               text: `This is a response to: ${inputText}`,
               isUser: false,
            };
            setMessages(prevMessages => [...prevMessages, botMessage]);
         }, 1000);

         setInputText('');
      }
   };

   const renderMessage = ({ item }) => (
      <View style={[
         styles.messageBubble,
         item.isUser ? styles.userMessage : styles.botMessage
      ]}>
         <Text style={styles.messageText}>{item.text}</Text>
      </View>
   );

   return (
         <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
         >
            <View style={styles.headerContainer}>
               <Text style={styles.headerText}>WaterX</Text>
            </View>
            <FlatList
               ref={flatListRef}
               data={messages}
               renderItem={renderMessage}
               keyExtractor={item => item.id}
               contentContainerStyle={styles.messageList}
               onContentSizeChange={() => flatListRef.current.scrollToEnd()}
            />
            <View style={styles.inputContainer}>
               <TextInput
                  style={styles.input}
                  value={inputText}
                  onChangeText={setInputText}
                  placeholder="Type a message..."
                  placeholderTextColor="#666"
               />
               <TouchableOpacity
                  style={styles.sendButton}
                  onPress={handleSend}
               >
                  <Text style={styles.sendButtonText}>Send</Text>
               </TouchableOpacity>
            </View>
         </KeyboardAvoidingView>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
   },
   headerContainer: {
      backgroundColor: '#fff',
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
   },
   headerText: {
      fontFamily:'outfit-bold',
      fontSize:20,
      paddingTop:20,
   },
   messageList: {
      paddingVertical: 10,
      paddingHorizontal: 10,
   },
   messageBubble: {
      maxWidth: '80%',
      padding: 10,
      borderRadius: 15,
      marginBottom: 10,
   },
   userMessage: {
      fontFamily: 'outfit',
      alignSelf: 'flex-end',
      backgroundColor: Colors.PRIMARY,
   },
   botMessage: {
      fontFamily: 'outfit',
      alignSelf: 'flex-start',
      backgroundColor: '#B7B2B2',
   },
   messageText: {
      fontSize: 16,
      color: '#FFFFFF',
   },
   inputContainer: {
      flexDirection: 'row',
      padding: 10,
      backgroundColor: "#4682B4 ",
      borderTopWidth: 1,
      borderTopColor: '#E5E5EA',
   },
   input: {
      fontFamily: 'outfit',
      flex: 1,
      backgroundColor: '#F2F2F7',
      borderRadius: 20,
      paddingHorizontal: 15,
      paddingVertical: 10,
      marginRight: 10,
      fontSize: 16,
   },
   sendButton: {
      fontFamily: 'outfit',
      backgroundColor: Colors.PRIMARY,
      borderRadius: 20,
      paddingHorizontal: 20,
      justifyContent: 'center',
   },
   sendButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
   },
});

export default ChatUI;