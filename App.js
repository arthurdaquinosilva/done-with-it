import { StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const handlePress = () => console.log("Text pressed");

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text numberOfLines={2}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et voluptate
          quisquam blanditiis quidem dicta praesentium, beatae assumenda sed
          temporibus vel dignissimos excepturi ipsam optio, unde sequi placeat.
          Eos iste quibusdam ut ipsam necessitatibus expedita. Sit rem minima
          molestiae minus, dignissimos obcaecati autem beatae omnis
          necessitatibus similique quibusdam doloribus voluptatibus facilis
          aliquam sunt quae non quam alias aspernatur animi est! Temporibus
          ipsum dolores modi magnam aliquid totam iste, accusantium accusamus,
          nihil tenetur quam illo aspernatur esse, nostrum rem veritatis neque
          velit optio expedita recusandae! Cupiditate voluptatem, incidunt iure,
          iste commodi modi quasi, architecto deserunt reiciendis ratione hic.
          Eaque a aliquam corporis?
        </Text>

        <Text onPress={handlePress}>Press this text</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
