import { StyleSheet, Text, ImageBackground, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Libraryplaylists = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={props.playlistFrame}
        style={styles.playlistFrame}
      >
        <Image source={props.pictureFrame} style={styles.pictureFrame} />
        <Text style={styles.playlistTitle}>{props.playlistTitle}</Text>
        <Text style={styles.playlistSub}>{props.playlistSub}</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  pagetitle: {
    color: "white",
    fontSize: 48,
    fontFamily: "Syne-Bold",
    marginLeft: 16,
    marginTop: 16,
  },
  playlistFrame: {
    width: 164,
    height: 205,
    alignItems: "center",
    marginLeft: 20,
    marginTop: 36,
  },
  pictureFrame: {
    width: 144,
    height: 129,
    marginTop: 10,
  },
  playlistTitle: {
    fontFamily: "Syne-Regular",
    fontSize: 16,
    color: "white",
    alignSelf: "flex-start",
    marginLeft: 15,
    marginTop: 10,
  },
  playlistSub: {
    fontFamily: "Syne-Regular",
    fontSize: 12,
    alignSelf: "flex-start",
    marginLeft: 15,
    marginTop: 4,
    color: "#07D260",
  },
});

export default Libraryplaylists;
