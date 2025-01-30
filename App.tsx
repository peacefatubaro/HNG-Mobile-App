import React from "react";
import { View, Text, Button, Linking, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My App</Text>

      {/* GitHub Button */}
      <Button
        title="Visit GitHub Repo"
        onPress={() => Linking.openURL("https://github.com/peacefatubaro/HNG-Mobile-App")}
      />

      {/* HNG Hire Button */}
      <Button
        title="Visit HNG Hire"
        onPress={() => Linking.openURL("https://hng.tech/hire")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default App;

