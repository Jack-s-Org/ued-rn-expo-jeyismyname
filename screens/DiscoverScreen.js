import {
  StyleSheet,
  Text,
  ImageBackground,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
import { React, useEffect, useState } from "react";
import { Audio } from "expo-av";

const DiscoverScreen = ({ navigation }) => {
  //audio playback
  const [sound, setSound] = useState();
  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("@/assets/Audio files/Tip Toe - HYBS.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  async function pauseSound() {
    console.log("Pausing Sound");
    if (sound) {
      await sound.pauseAsync();
    }
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("wait Sound");
          sound.pauseAsync();
        }
      : undefined;
  }, [sound]);

  const [isAdded, setIsAdded] = useState(false);
  const [isPlayed, setIsPlayed] = useState(false);
  const [text, onChangeText] = useState("What do you want to play?");
  const handlePress = () => {
    setIsAdded((prev) => !prev);
  };

  //toggle pause play button with audio
  const handlePress2 = async () => {
    if (isPlayed) {
      await pauseSound();
    } else {
      await playSound();
    }
    setIsPlayed((prev) => !prev);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ImageBackground
        source={require("@/assets/Background img/search-bg.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.pagetitle}>Search</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />

        <Text style={styles.subtitle}>Picked for you</Text>
        <View style={styles.container1}>
          <ImageBackground
            style={styles.ticketBox}
            source={require("@/assets/Discover page/ticket-box.png")}
          >
            <Image
              style={styles.imgLarge}
              source={require("@/assets/test images/tiptoe-hybs.png")}
            ></Image>
            <View>
              <View>
                <Text style={styles.songTitle}>TipToe</Text>
                <Text style={styles.artistName}>Single-HYBS</Text>
              </View>
              <View style={styles.container2}>
                <TouchableOpacity
                  style={styles.addBUtton}
                  onPress={handlePress}
                >
                  <Image
                    style={styles.buttonStyle}
                    source={
                      isAdded
                        ? require("@/assets/Button img/done-add-button.png") // New image for added state
                        : require("@/assets/Button img/add-button.png") // Default image
                    }
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.addBUtton2}
                  onPress={handlePress2}
                >
                  <Image
                    style={styles.buttonStyle2}
                    source={
                      isPlayed
                        ? require("@/assets/Button img/pause-button.png") // New image for added state
                        : require("@/assets/Button img/play-button.png") // Default image
                    }
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>

        <Text style={styles.subtitle}>Browse all genres</Text>
        <View style={styles.genreContainer}>
          <Pressable
            onPress={() => {
              navigation.push("Genre", { screen: "DiscoverScreen" });
            }}
          >
            <View style={styles.box}>
              <Image
                style={styles.genreBox}
                source={require("@/assets/Discover page/New releases.png")}
              ></Image>
            </View>
          </Pressable>
          <View style={styles.box}>
            <Image
              style={styles.genreBox}
              source={require("@/assets/Discover page/Made for you.png")}
            ></Image>
          </View>
        </View>
        <View style={styles.genreContainer}>
          <View style={styles.box}>
            <Image
              style={styles.genreBox}
              source={require("@/assets/Discover page/Hiphop.png")}
            />
          </View>

          <View style={styles.box}>
            <Image
              style={styles.genreBox}
              source={require("@/assets/Discover page/Kpop.png")}
            ></Image>
          </View>
        </View>
        <View style={styles.genreContainer}>
          <View style={styles.box}>
            <Image
              style={styles.genreBox}
              source={require("@/assets/Discover page/Mandopop.png")}
            ></Image>
          </View>
          <View style={[styles.box, { marginBottom: 180 }]}>
            <Image
              style={styles.genreBox}
              source={require("@/assets/Discover page/Rock.png")}
            ></Image>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  genreBox: {
    width: 173,
    height: 110,
  },
  box: {
    width: 173,
    height: 110,
    marginLeft: 16,
    marginTop: 12,
  },
  pagetitle: {
    color: "white",
    fontSize: 48,
    fontFamily: "Syne-Bold",
    marginLeft: 16,
    marginTop: 57,
  },

  image: {
    width: 390,
    // height: 844,
  },

  input: {
    borderColor: "white",
    borderRadius: 24,
    height: 40,
    marginTop: 20,
    marginHorizontal: 16,
    borderWidth: 1,
    paddingLeft: 24,
    fontFamily: "Syne-Regular",
    color: "white",
    fontSize: 16,
  },

  subtitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "500",
    fontFamily: "Syne-SemiBold",
    marginLeft: 16,
    marginTop: 20,
  },

  container1: {
    // backgroundColor: "white",
    width: 362,
    height: 178,
    margin: 16,
  },
  ticketBox: {
    width: 362,
    height: 178,
    display: "flex",
    flexDirection: "row",
  },
  container2: {
    flexDirection: "row",
  },

  addBUtton: {
    paddingTop: 57,
    paddingLeft: 12,
  },
  addBUtton2: {
    paddingTop: 36,
    paddingLeft: 80,
  },

  buttonStyle: {
    width: 26,
    height: 26,
  },
  buttonStyle2: {
    width: 48,
    height: 48,
  },

  imgLarge: {
    width: 160,
    height: 160,
    borderRadius: 8,
    marginVertical: 8,
    marginLeft: 12,
  },
  songTitle: {
    fontFamily: "Syne-SemiBold",
    fontSize: 20,
    marginTop: 24,
    marginLeft: 12,
  },

  artistName: {
    fontFamily: "Syne-Regular",
    fontSize: 16,
    marginTop: 8,
    marginLeft: 12,
  },
  genreContainer: {
    flexDirection: "row",
  },
  container: {
    backgroundColor: "#121212",
    width: "100%",
  },
});

export default DiscoverScreen;
