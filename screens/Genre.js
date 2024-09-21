import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";

import SongPlaylist from "./SongPlaylist";

const Genre = ({ navigation }) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Pressable onPress={() => navigation.goBack()}>
        {/* <Image
            style={styles.backButton}
            source={require("@/assets/Button img/back-button-dark.png")}
          /> */}
        <Image
          source={require("@/assets/Discover page/genre bg.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </Pressable>
      <View style={[{ backgroundColor: "#121212" }]}>
        <Text style={styles.pagetitle}>Genre Selection</Text>
      </View>
      <Text style={styles.subtitle}>Picked For You</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          maxHeight: 230,
        }}
      >
        <View style={styles.albumContainer}>
          <Image
            source={require("@/assets/Discover page/youngman.png")}
            style={styles.albumCover}
          />
          <Text style={styles.albumTitle}>Young Man</Text>
          <Text style={styles.artistName}>HYUKOH, 落...</Text>
        </View>
        <View style={styles.albumContainer}>
          <Image
            source={require("@/assets/Discover page/lunch.png")}
            style={styles.albumCover}
          />
          <Text style={styles.albumTitle}>LUNCH</Text>
          <Text style={styles.artistName}>Billie Eillish</Text>
        </View>
        <View style={styles.albumContainer}>
          <Image
            source={require("@/assets/Discover page/leehi.png")}
            style={styles.albumCover}
          />
          <Text style={styles.albumTitle}>What is Love?</Text>
          <Text style={styles.artistName}>LEE HI</Text>
        </View>
        <View style={styles.albumContainer}>
          <Image
            source={require("@/assets/Discover page/flower.png")}
            style={styles.albumCover}
          />
          <Text style={styles.albumTitle}>Flower Garden</Text>
          <Text style={styles.artistName}>Bilyrroom</Text>
        </View>
      </ScrollView>
      <Text style={styles.subtitle}>New Releases</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          maxHeight: 230,
        }}
      >
        <View style={styles.albumContainer}>
          <Image
            source={require("@/assets/Discover page/dream.png")}
            style={styles.albumCover}
          />
          <Text style={styles.albumTitle}>Dream</Text>
          <Text style={styles.artistName}>keshi</Text>
        </View>
        <View style={styles.albumContainer}>
          <Image
            source={require("@/assets/Discover page/smile.png")}
            style={styles.albumCover}
          />
          <Text style={styles.albumTitle}>Die with a Smile</Text>
          <Text style={styles.artistName}>Bruno Mars,</Text>
        </View>
        <View style={styles.albumContainer}>
          <Image
            source={require("@/assets/Discover page/woman.png")}
            style={styles.albumCover}
          />
          <Text style={styles.albumTitle}>New Woman</Text>
          <Text style={styles.artistName}>LISA, ROSALIA</Text>
        </View>
        <View style={styles.albumContainer}>
          <Image
            source={require("@/assets/Discover page/smith.png")}
            style={styles.albumCover}
          />
          <Text style={styles.albumTitle}>Love Goes</Text>
          <Text style={styles.artistName}>Sam Smith</Text>
        </View>
      </ScrollView>
      <Text style={styles.subtitle}>Best of Genres</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          maxHeight: 230,
          marginBottom: 50,
        }}
      >
        <View style={styles.albumContainer}>
          <Image
            source={require("@/assets/Discover page/firdhaus.png")}
            style={styles.albumCover}
          />
          <Text style={styles.albumTitle}>能遇见，就很...</Text>
          <Text style={styles.artistName}>Firdhaus</Text>
        </View>
        <View style={styles.albumContainer}>
          <Image
            source={require("@/assets/Discover page/falling.png")}
            style={styles.albumCover}
          />
          <Text style={styles.albumTitle}>Falling For You</Text>
          <Text style={styles.artistName}>Devin Kennedy</Text>
        </View>
        <View style={styles.albumContainer}>
          <Image
            source={require("@/assets/Discover page/please.png")}
            style={styles.albumCover}
          />
          <Text style={styles.albumTitle}>Please Please..</Text>
          <Text style={styles.artistName}>Sabrina Carpenter</Text>
        </View>
        <View style={styles.albumContainer}>
          <Image
            source={require("@/assets/Discover page/bikelane.png")}
            style={styles.albumCover}
          />
          <Text style={styles.albumTitle}>Bike Lane</Text>
          <Text style={styles.artistName}>Kuma Overdose</Text>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 393,
    height: 115,
  },
  backButton: {
    width: 46,
    height: 46,
    marginTop: 24,
    marginLeft: 8,
  },
  pagetitle: {
    color: "white",
    fontSize: 32,
    fontFamily: "Syne-SemiBold",
    marginLeft: 16,
  },
  subtitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "500",
    fontFamily: "Syne-SemiBold",
    marginLeft: 16,
    marginTop: 25,
  },
  albumContainer: {
    width: 108,
    alignItems: "flex-start",
    marginTop: 16,
    marginLeft: 16,
  },
  albumTitle: {
    fontFamily: "Syne-Regular",
    color: "white",
    marginTop: 4,
    fontSize: 16,
  },
  artistName: {
    fontFamily: "Syne-Regular",
    color: "#A5A5A7",
    marginTop: 4,
    fontSize: 16,
  },
  albumCover: {
    width: 110,
    height: 110,
  },
  container: {
    backgroundColor: "#121212",
    // display: "flex",
  },
});

export default Genre;
