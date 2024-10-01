import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React, { useRef } from 'react';
import Video from 'react-native-video';

const screenWidth = Dimensions.get('window').width;

const VideoItems = ({ uri }) => {
   const videoRef = useRef(null);

   return (
      <View style={styles.videoContainer}>
         <Video
            ref={videoRef}
            source={{ uri }}
            controls={true} 
            resizeMode="contain"
            paused={true}  
            style={styles.video}
         />
      </View>
   );
};

export default VideoItems;

const styles = StyleSheet.create({
   videoContainer: {
      marginBottom: 20,
      justifyContent: 'center',
      alignItems: 'center',
      width: screenWidth,
      height: 200,
      backgroundColor: '#000',
   },
   video: {
      width: '100%',
      height: '100%',
   },
});
