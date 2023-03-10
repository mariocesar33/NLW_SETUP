import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { 
  useFonts, 
  Inter_400Regular, 
  Inter_600SemiBold, 
  Inter_700Bold,
  Inter_800ExtraBold
} from "@expo-google-fonts/inter";

import { Loanding } from './src/components/Loanding';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular, 
    Inter_600SemiBold, 
    Inter_700Bold,
    Inter_800ExtraBold
  });

  if(!fontsLoaded) {
    return <Loanding />
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ola mundo!</Text>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09090A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "#FFF",
    fontFamily: "Inter_800ExtraBold"
  }
});
