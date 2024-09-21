import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import { Audio } from "expo-av";

const MusicPlayer = () => {
  const handlePress = () => {
    setIsAdded((prev) => !prev);
  };
  const [isAdded, setIsAdded] = React.useState(false);
  const [sound, setSound] = React.useState();
  const [isPlayed, setIsPlayed] = React.useState(false);
  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("@/assets/Audio files/annie.m4a")
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
    <ImageBackground
      source={require("@/assets/Button img/musicPlayer.png")}
      style={styles.musicPlayer}
    >
      <View style={styles.container}>
        {/* Music Player UI */}
        <Image
          source={require("@/assets/Button img/song-cover.png")}
          style={styles.albumArt}
        />
        <View style={styles.songDetails}>
          <Text style={styles.songTitle}>annie.</Text>
          <Text style={styles.artistName}>wave to earth</Text>
        </View>
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
        <TouchableOpacity onPress={handlePress2}>
          <Image
            style={styles.playPauseButton}
            source={
              isPlayed
                ? require("@/assets/Button img/pause.png") // New image for added state
                : require("@/assets/Button img/play.png") // Default image
            }
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "#000",
    padding: 16,
    // marginHorizontal: 12,
    marginBottom: 16,
    borderRadius: 20,
  },
  buttonStyle: {
    width: 28,
    height: 28,
    marginRight: 28,
  },
  albumArt: {
    width: 56,
    height: 56,
  },
  songDetails: {
    flex: 1,
    paddingHorizontal: 10,
  },
  songTitle: {
    fontFamily: "Syne-Regular",
    color: "white",
    fontSize: 16,
  },
  artistName: {
    fontFamily: "Syne-Regular",
    color: "gray",
    fontSize: 16,
    // marginTop: 4,
  },
  playPauseButton: {
    width: 24,
    height: 24,
    margin: 12,
  },
  musicPlayer: {
    width: 362,
    height: 90,
    alignSelf: "center",
  },
});

export default MusicPlayer;
