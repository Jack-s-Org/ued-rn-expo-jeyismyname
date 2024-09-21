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
import { Audio } from "expo-av";

import SongPlaylist from "./SongPlaylist";

const PlaylistPage = ({ navigation }) => {
  const handlePress = () => {
    setIsAdded((prev) => !prev);
  };
  const [isAdded, setIsAdded] = React.useState(false);
  const [sound, setSound] = React.useState();
  const [isPlayed, setIsPlayed] = React.useState(false);
  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("@/assets/Audio files/ALPHARD.mp3")
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

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("wait Sound");
          sound.pauseAsync();
        }
      : undefined;
  }, [sound]);

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
      <Pressable onPress={() => navigation.goBack()}>
        {/* <Image
          style={styles.backButton}
          source={require("@/assets/Button img/back-button-dark.png")}
        /> */}
        <Image
          source={require("@/assets/Background img/Playlist cover.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </Pressable>
      <View style={[{ backgroundColor: "#121212" }]}>
        <Text style={styles.pagetitle}>This is a Playlist</Text>
        <Text style={styles.greenText}>45 minutes</Text>
      </View>
      <View style={[{ flexDirection: "row", backgroundColor: "#121212" }]}>
        <TouchableOpacity style={styles.addBUtton} onPress={handlePress}>
          <Image
            style={styles.buttonStyle}
            source={
              isAdded
                ? require("@/assets/Button img/done-add-button.png") // New image for added state
                : require("@/assets/Button img/add-button.png") // Default image
            }
          />
        </TouchableOpacity>
        <Image
          source={require("@/assets/Button img/add-song.png")}
          style={styles.buttonStyle}
        />
        <Image
          source={require("@/assets/Button img/more.png")}
          style={styles.buttonStyle}
        />
        <TouchableOpacity onPress={handlePress2}>
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

      <View style={[{ backgroundColor: "#121212" }]}>
        <SongPlaylist
          artistImage={require("@/assets/Playlist/alphard.png")}
          songTitle="ALPHARD"
          artistName="Kuma Overdose"
        />
        <SongPlaylist
          artistImage={require("@/assets/Playlist/life.png")}
          songTitle="So life goes on"
          artistName="Heo Hoy Kyung"
        />
        <SongPlaylist
          artistImage={require("@/assets/Playlist/musuem.png")}
          songTitle="The Musuem"
          artistName="Colde"
        />
        <SongPlaylist
          artistImage={require("@/assets/Playlist/lullaby.png")}
          songTitle="Lullaby for a Cat"
          artistName="Epik High"
        />
        <SongPlaylist
          artistImage={require("@/assets/Playlist/destroy.png")}
          songTitle="Destroy Myself Just For You"
          artistName="Montell Fish"
        />
        <SongPlaylist
          artistImage={require("@/assets/Playlist/curl up.png")}
          songTitle="Curl Up & Die"
          artistName="Matt Maltese"
        />
        <SongPlaylist
          artistImage={require("@/assets/Playlist/lovers.png")}
          songTitle="for lovers who hesitate"
          artistName="JANNABI"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonStyle2: {
    width: 48,
    height: 48,
    marginLeft: 180,
  },
  buttonStyle: {
    width: 28,
    height: 28,
    marginLeft: 20,
    marginTop: 12,
  },
  image: {
    width: 393, // Full width of the screen
    height: 201, // Set your desired height
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
  greenText: {
    color: "#39DB80",
    fontSize: 16,
    fontFamily: "Syne-Regular",
    marginTop: 12,
    marginLeft: 18,
  },
  container: {
    backgroundColor: "#121212",
    // display: "flex",
  },
});

export default PlaylistPage;
