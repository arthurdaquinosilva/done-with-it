import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text>Hello React Native</Text>
        <Image
          source={require("./assets/icon.png")}
          style={{ width: 80, height: 80 }}
        />
        <TouchableWithoutFeedback onPress={() => console.log("Image tapped")}>
          <Image
            source={{
              width: 100,
              height: 100,
              uri: "https://picsum.photos/100",
            }}
          />
        </TouchableWithoutFeedback>
        <TouchableOpacity onPress={() => console.log("Image tapped")}>
          <Image
            source={{
              width: 100,
              height: 100,
              uri: "https://picsum.photos/100",
            }}
          />
        </TouchableOpacity>
        <TouchableHighlight onPress={() => console.log("Image tapped")}>
          <Image
            source={{
              width: 100,
              height: 100,
              uri: "https://picsum.photos/100",
            }}
          />
        </TouchableHighlight>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
