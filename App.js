import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

// IMPORT IMAGES
import logo from "./assets/logo-imdb.png";
import film from "./assets/film.jpg";
import matthew from "./assets/matthew.jpg";
import anne from "./assets/anne.jpg";
import jessica from "./assets/jessica.jpg";
import mackenzie from "./assets/mackenzie.jpg";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* ------- HEADER -----*/}
        <View style={styles.header}>
          <Image source={logo} style={styles.img} />
        </View>
        {/* ------- MAIN INFO -----*/}
        <View style={styles.secondContainer}>
          <Text style={styles.title}>Interstellar</Text>
          <View style={styles.mainInfo}>
            <Text style={[styles.mainInfoText, styles.whiteText]}>2014</Text>
            <Text style={[styles.mainInfoText, styles.whiteText]}>PG-13</Text>
            <Text style={[styles.mainInfoText, styles.whiteText]}>
              2h 49min
            </Text>
            <Text style={[styles.mainInfoText, styles.whiteText]}>
              Adventure, Drama, Sci-Fi
            </Text>
          </View>
          {/* -------- cover and synopsis --------- */}
          <View style={styles.coverSynopsis}>
            <Image source={film} style={styles.poster} />
            <View>
              <Text style={[styles.whiteText, styles.synopsis]}>
                When Earth becomes uninhabitable in the future, a farmer and
                ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft.
              </Text>
              <TouchableOpacity style={styles.addWatchList}>
                <Text style={styles.whiteText}>+ ADD TO WATCH LIST</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* -------- rating system --------- */}
          <View style={styles.ratingSystem}>
            <View style={styles.oneRating}>
              <Ionicons name="star-sharp" size={24} color="yellow" />
              <Text style={[styles.whiteText, styles.currentRating]}>
                8.6<Text style={styles.whiteText}>/10</Text>
              </Text>
              <Text style={[styles.whiteText, styles.ratersNumber]}>1.1M</Text>
            </View>
            <View style={styles.oneRating}>
              <Ionicons name="star-outline" size={24} color="white" />
              <Text style={styles.whiteText}>RATE THIS</Text>
            </View>
            <View style={styles.oneRating}>
              <View style={styles.metascoreRating}>
                <Text style={styles.whiteText}>74</Text>
              </View>
              <Text style={styles.whiteText}>Metascore</Text>
              <Text style={[styles.whiteText, styles.ratersNumber]}>
                46 critic reviews
              </Text>
            </View>
          </View>
        </View>
        {/*  ------- CAST and CO ------- */}
        <View style={styles.secondContainer}>
          {/* -------- intro cast --------- */}
          <View style={styles.introCast}>
            <Text style={[styles.titleCast]}>TOP BILLED CAST</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>SEE ALL</Text>
            </TouchableOpacity>
          </View>
          {/* -------- cast --------- */}
          <View style={styles.allCast}>
            <View style={styles.castMember}>
              <Image source={matthew} style={styles.castPic} />
              <Text style={styles.castName}>Matthew Mcconaughey</Text>
              <Text>Cooper</Text>
            </View>
            <View style={styles.castMember}>
              <Image source={anne} style={styles.castPic} />
              <Text style={styles.castName}>Anne Hathaway</Text>
              <Text>Brand</Text>
            </View>
            <View style={styles.castMember}>
              <Image source={jessica} style={styles.castPic} />
              <Text style={styles.castName}>Jessica Chastain</Text>
              <Text>Murph</Text>
            </View>
            <View style={styles.castMember}>
              <Image source={mackenzie} style={styles.castPic} />
              <Text style={styles.castName}>Mackenzie Foy</Text>
              <Text>Young Murph</Text>
            </View>
          </View>
          {/* -------- prod --------- */}

          <View></View>
        </View>
      </ScrollView>
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
  secondContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "pink",
    marginBottom: 20,
  },
  whiteText: {
    color: "white",
    fontSize: 14,
    fontWeight: "normal",
  },
  // -------- HEADER ---------
  header: {
    height: 80,
    backgroundColor: "grey",
    justifyContent: "center",
  },
  img: {
    height: 40,
    width: 110,
    // transform: [{ scale: 0.55 }],
  },
  // -------- MAIN INFO ---------
  title: {
    fontSize: 30,
    color: "white",
    paddingBottom: 10,
  },
  mainInfo: {
    flexDirection: "row",
    gap: 10,
  },
  mainInfoText: {
    marginBottom: 5,
  },

  // -------- cover and synopsis ---------
  coverSynopsis: {
    flexDirection: "row",
  },
  poster: {
    height: 150,
    width: 100,
    marginRight: 10,
  },
  synopsis: {
    marginBottom: 10,
    width: 220,
  },
  addWatchList: {
    height: 50,
    width: 220,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  // -------- rating system ---------
  ratingSystem: {
    flexDirection: "row",
    gap: 20,
    paddingTop: 5,
    paddingBottom: 5,
  },
  oneRating: {
    alignItems: "center",
    gap: 2,
    width: 100,
    // height: 100,
    // backgroundColor: "pink",
  },
  currentRating: {
    fontSize: 20,
    fontWeight: "bold",
  },
  ratersNumber: {
    fontSize: 10,
  },
  metascoreRating: {
    height: 30,
    width: 30,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  // ------- CAST AND CO-------
  // -------- intro cast ---------
  introCast: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 5,
  },
  titleCast: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  seeAllText: {
    color: "blue",
    fontWeight: "bold",
  },
  // -------- all cast ---------
  allCast: {
    flexDirection: "row",
    gap: 5,
  },
  castMember: {
    // width: 150,
    backgroundColor: "green",
    flexWrap: "nowrap",
  },
  castPic: {
    height: 200,
    width: 150,
  },
  castName: {
    fontWeight: "bold",
    overflow: "hidden",
  },
});
