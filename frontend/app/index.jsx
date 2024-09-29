import { Text, View } from "react-native";
import {Link} from 'expo-router'
import WelcomePage from './../app/login/index'

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <WelcomePage />
    </View>
  );
}
