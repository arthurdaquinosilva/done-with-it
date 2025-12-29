import { Alert, Button, Platform, StatusBar, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Button
          title="Click me"
          onPress={() =>
            Alert.alert("Attention", "Are you sure you want to delete it", [
              { text: "Yes", onPress: () => console.log("Yes pressed") },
              { text: "No", onPress: () => console.log("No pressed") },
            ])
          }
        />

        <Button
          title="Click me 2"
          onPress={() =>
            Alert.prompt(
              "Attention",
              "Are you sure you want to delete it",
              (text) => console.log("The user prompt the following: ", text),
            )
          }
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
