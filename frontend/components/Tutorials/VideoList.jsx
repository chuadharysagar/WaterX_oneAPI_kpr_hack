// import React, { useRef } from 'react';
// import { FlatList, StyleSheet, View, Dimensions } from 'react-native';
// import Video from 'react-native-video';

// const screenWidth = Dimensions.get('window').width;

// const videoData = [
//    { id: '1', uri: 'https://path-to-video1.mp4' },
//    { id: '2', uri: 'https://path-to-video2.mp4' },
//    { id: '3', uri: 'https://path-to-video3.mp4' },
 
// ];

// const viewabilityConfig = {
//    viewAreaCoveragePercentThreshold: 50, // Video is considered in view if 50% of it is visible
// };

// const VideoListItem = React.forwardRef(({ uri }, ref) => {
//    return (
//       <View style={styles.videoContainer}>
//          <Video
//             ref={ref}
//             source={{ uri }}
//             resizeMode="contain"
//             paused={true}  // Initially paused
//             style={styles.video}
//             controls={true}
//          />
//       </View>
//    );
// });

// const VideoList = () => {
//    const videoRefs = useRef([]);

//    const onViewableItemsChanged = ({ viewableItems }) => {
//       videoRefs.current.forEach((ref, index) => {
//          if (viewableItems.find(item => item.key === videoData[index].id)) {
//             ref?.play?.();  // Auto-play video when in view
//          } else {
//             ref?.pause?.();  // Pause video when out of view
//          }
//       });
//    };

//    return (
//       <FlatList
//          data={videoData}
//          keyExtractor={(item) => item.id}
//          renderItem={({ item, index }) => (
//             <VideoListItem uri={item.uri} ref={ref => (videoRefs.current[index] = ref)} />
//          )}
//          onViewableItemsChanged={onViewableItemsChanged}
//          viewabilityConfig={viewabilityConfig}
//          contentContainerStyle={styles.listContainer}
//       />
//    );
// };

// const styles = StyleSheet.create({
//    listContainer: {
//       padding: 10,
//    },
//    videoContainer: {
//       marginBottom: 20,
//       justifyContent: 'center',
//       alignItems: 'center',
//       width: screenWidth,
//       height: 200,
//       backgroundColor: '#000',
//    },
//    video: {
//       width: '100%',
//       height: '100%',
//    },
// });

// export default VideoList;
