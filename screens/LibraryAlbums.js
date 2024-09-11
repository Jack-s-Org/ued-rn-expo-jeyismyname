import { StyleSheet, Text, ImageBackground, View, Image } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

const Libraryplaylists = (props) => {
  return (
    <View style={[{ paddingBottom: 100 }]}>
      <View style={styles.container}>
        <View style={styles.albumContainer}>
          <Image
            source={require("@/assets/Library page/Adele 25.png")}
            style={styles.albumCover}
          />
          <Text style={styles.albumTitle}>25</Text>
          <Text style={styles.artistName}>Adele</Text>
        </View>
        <View style={styles.albumContainer}>
          <Image
            source={require("@/assets/Library page/Adele 25.png")}
            style={styles.albumCover}
          />
          <Text style={styles.albumTitle}>The Thrill of it All</Text>
          <Text style={styles.artistName}>Sam Smith</Text>
        </View>
        <View style={styles.albumContainer}>
          <Image
            source={require("@/assets/Library page/Adele 25.png")}
            style={styles.albumCover}
          />
          <Text style={styles.albumTitle}>What Are You?</Text>
          <Text style={styles.artistName}>Frank Sinatra</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.albumContainer}>
          <Image
            source={require("@/assets/Library page/Adele 25.png")}
            style={styles.albumCover}
          />
          <Text style={styles.albumTitle}>25</Text>
          <Text style={styles.artistName}>Adele</Text>
        </View>
        <View style={styles.albumContainer}>
          <Image
            source={require("@/assets/Library page/Adele 25.png")}
            style={styles.albumCover}
          />
          <Text style={styles.albumTitle}>The Thrill of it All</Text>
          <Text style={styles.artistName}>Sam Smith</Text>
        </View>
        <View style={styles.albumContainer}>
          <Image
            source={require("@/assets/Library page/Adele 25.png")}
            style={styles.albumCover}
          />
          <Text style={styles.albumTitle}>What Are You?</Text>
          <Text style={styles.artistName}>Frank Sinatra</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.albumContainer}>
          <Image
            source={require("@/assets/Library page/Adele 25.png")}
            style={styles.albumCover}
          />
          <Text style={styles.albumTitle}>25</Text>
          <Text style={styles.artistName}>Adele</Text>
        </View>
        <View style={styles.albumContainer}>
          <Image
            source={require("@/assets/Library page/Adele 25.png")}
            style={styles.albumCover}
          />
          <Text style={styles.albumTitle}>The Thrill of it All</Text>
          <Text style={styles.artistName}>Sam Smith</Text>
        </View>
        <View style={styles.albumContainer}>
          <Image
            source={require("@/assets/Library page/Adele 25.png")}
            style={styles.albumCover}
          />
          <Text style={styles.albumTitle}>What Are You?</Text>
          <Text style={styles.artistName}>Frank Sinatra</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  albumCover: {
    width: 110,
    height: 110,
  },
  albumContainer: {
    width: 108,
    alignItems: "flex-start",
    marginTop: 24,
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
});

export default Libraryplaylists;
