import { StyleSheet, Text, ImageBackground, View, Image } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

const Libraryplaylists = (props) => {
  return (
    <View style={[{ paddingBottom: 100 }]}>
      <View style={styles.container}>
        <View style={styles.artistContainer}>
          <Image
            source={require("@/assets/Library page/rex orange county.png")}
            style={styles.artistPic}
          />
          <Text style={styles.artistsName}>Rex Orange County</Text>
        </View>
        <View style={styles.artistContainer}>
          <Image
            source={require("@/assets/Library page/Moses Summary.png")}
            style={styles.artistPic}
          ></Image>
          <Text style={styles.artistsName}>Moses Summary</Text>
        </View>
        <View style={styles.artistContainer}>
          <Image
            source={require("@/assets/Library page/Charli XCX.png")}
            style={styles.artistPic}
          ></Image>
          <Text style={styles.artistsName}>Charli XCX</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.artistContainer}>
          <Image
            source={require("@/assets/Library page/rex orange county.png")}
            style={styles.artistPic}
          />
          <Text style={styles.artistsName}>Rex Orange County</Text>
        </View>
        <View style={styles.artistContainer}>
          <Image
            source={require("@/assets/Library page/Moses Summary.png")}
            style={styles.artistPic}
          ></Image>
          <Text style={styles.artistsName}>Moses Summary</Text>
        </View>
        <View style={styles.artistContainer}>
          <Image
            source={require("@/assets/Library page/Charli XCX.png")}
            style={styles.artistPic}
          ></Image>
          <Text style={styles.artistsName}>Charli XCX</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.artistContainer}>
          <Image
            source={require("@/assets/Library page/rex orange county.png")}
            style={styles.artistPic}
          />
          <Text style={styles.artistsName}>Rex Orange County</Text>
        </View>
        <View style={styles.artistContainer}>
          <Image
            source={require("@/assets/Library page/Moses Summary.png")}
            style={styles.artistPic}
          ></Image>
          <Text style={styles.artistsName}>Moses Summary</Text>
        </View>
        <View style={styles.artistContainer}>
          <Image
            source={require("@/assets/Library page/Charli XCX.png")}
            style={styles.artistPic}
          ></Image>
          <Text style={styles.artistsName}>Charli XCX</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.artistContainer}>
          <Image
            source={require("@/assets/Library page/rex orange county.png")}
            style={styles.artistPic}
          />
          <Text style={styles.artistsName}>Rex Orange County</Text>
        </View>
        <View style={styles.artistContainer}>
          <Image
            source={require("@/assets/Library page/Moses Summary.png")}
            style={styles.artistPic}
          ></Image>
          <Text style={styles.artistsName}>Moses Summary</Text>
        </View>
        <View style={styles.artistContainer}>
          <Image
            source={require("@/assets/Library page/Charli XCX.png")}
            style={styles.artistPic}
          ></Image>
          <Text style={styles.artistsName}>Charli XCX</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  artistPic: {
    width: 108,
    height: 108,
  },
  artistContainer: {
    width: 108,
    alignItems: "center",
    marginTop: 36,
    marginLeft: 18,
  },
  artistsName: {
    fontFamily: "Syne-Regular",
    color: "white",
    marginTop: 12,
    fontSize: 16,
  },
});

export default Libraryplaylists;
