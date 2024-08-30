import { StyleSheet, Text, ImageBackground, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Libraryplaylists from "./Libraryplaylists";

const LibraryScreen = () => {
  return (
    <ImageBackground
      source={require("@/assets/Background img/library-bg.png")}
      resizeMode="cover"
    >
      <Text style={styles.pagetitle}>Library</Text>
      <View style={styles.libraryBar}>
        <View style={styles.titleContainer}>
          <Text style={styles.libraryTitles}>Playlists</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.libraryTitles}>Artists</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.libraryTitles}>Albums</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Libraryplaylists
          playlistFrame={require("@/assets/Button img/playlist-bg.png")}
          pictureFrame={require("@/assets/Library page/kpop-classic.png")}
          playlistTitle="Classic KPOP"
          playlistSub="Playlist - John Doe"
        />
        <Libraryplaylists
          playlistFrame={require("@/assets/Button img/playlist-bg.png")}
          pictureFrame={require("@/assets/Library page/kpop-classic.png")}
          playlistTitle="Classic KPOP"
          playlistSub="Playlist - John Doe"
        />
      </View>
      <View style={styles.container}>
        <Libraryplaylists
          playlistFrame={require("@/assets/Button img/playlist-bg.png")}
          pictureFrame={require("@/assets/Library page/kpop-classic.png")}
          playlistTitle="Classic KPOP"
          playlistSub="Playlist - John Doe"
        />
        <Libraryplaylists
          playlistFrame={require("@/assets/Button img/playlist-bg.png")}
          pictureFrame={require("@/assets/Library page/kpop-classic.png")}
          playlistTitle="Classic KPOP"
          playlistSub="Playlist - John Doe"
        />
      </View>
    </ImageBackground>
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
  libraryBar: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
    columnGap: 24,
  },
  libraryTitles: {
    fontFamily: "Syne-Regular",
    fontSize: 20,
    color: "white",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  titleContainer: {
    borderStyle: "solid",
    borderColor: "#09de6e",
    borderBottomWidth: 2,
  },
});

export default LibraryScreen;
