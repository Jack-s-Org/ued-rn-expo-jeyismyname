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
            source={require("@/assets/Library page/to die for.png")}
            style={styles.albumCover}
          />
          <Text style={styles.albumTitle}>TO DIE FOR</Text>
          <Text style={styles.artistName}>B.I.</Text>
        </View>
        <View style={styles.albumContainer}>
          <Image
            source={require("@/assets/Library page/who are you.png")}
            style={styles.albumCover}
          />
          <Text style={styles.albumTitle}>What Are You?</Text>
          <Text style={styles.artistName}>Frank Sinatra</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.albumContainer}>
          <Image
            source={require("@/assets/Library page/talent.png")}
            style={styles.albumCover}
          />
          <Text style={styles.albumTitle}>TALENT</Text>
          <Text style={styles.artistName}>The Crane</Text>
        </View>
        <View style={styles.albumContainer}>
          <Image
            source={require("@/assets/Library page/dprian.png")}
            style={styles.albumCover}
          />
          <Text style={styles.albumTitle}>Moodswings in This Order</Text>
          <Text style={styles.artistName}>DPR IAN</Text>
        </View>
        <View style={styles.albumContainer}>
          <Image
            source={require("@/assets/Library page/tiptoe.png")}
            style={styles.albumCover}
          />
          <Text style={styles.albumTitle}>Tip Toe</Text>
          <Text style={styles.artistName}>Single | HYBS</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.albumContainer}>
          <Image
            source={require("@/assets/Library page/inside.png")}
            style={styles.albumCover}
          />
          <Text style={styles.albumTitle}>Inside</Text>
          <Text style={styles.artistName}>Bo Burnham</Text>
        </View>
        <View style={styles.albumContainer}>
          <Image
            source={require("@/assets/Library page/good thing.png")}
            style={styles.albumCover}
          />
          <Text style={styles.albumTitle}>To Let A Good Thing Die</Text>
          <Text style={styles.artistName}>Bruno Major</Text>
        </View>
        <View style={styles.albumContainer}>
          <Image
            source={require("@/assets/Library page/oppenheimer.png")}
            style={styles.albumCover}
          />
          <Text style={styles.albumTitle}>Oppenheimer Soundtrack</Text>
          <Text style={styles.artistName}>Ludwig</Text>
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
