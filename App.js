import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { StyleSheet, Text, View, Image } from "react-native";

import logo from "./assets/logo-imdb.png";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.img} />
      </View>
      <Text style={styles.title}>Interstellar</Text>
      <View style={styles.mainInfo}>
        <Text style={styles.mainInfoText}>2014</Text>
        <Text style={styles.mainInfoText}>PG-13</Text>
        <Text style={styles.mainInfoText}>2h 49min</Text>
        <Text style={styles.mainInfoText}>Adventure, Drama, Sci-Fi</Text>
      </View>
      <Text>we need many many beers</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    color: "white",
    // alignItems: "center",
    // justifyContent: "center",
    marginTop: Constants.statusBarHeight,
  },
  header: {
    height: 80,
    backgroundColor: "grey",
    justifyContent: "center",
  },
  img: {
    height: 40,
    width: 110,
    // transform: [{ scale: 0.55 }],
    marginLeft: 4,
  },
  title: {
    fontSize: 30,
    color: "white",
    marginBottom: 10,
  },
  mainInfo: {
    flexDirection: "row",
  },
  mainInfoText: {
    color: "white",
    marginLeft: 8,
  },
});
