import { StyleSheet, Text, ImageBackground, View, Image } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

const Libraryplaylists = (props) => {
  return (
    <View style={[{ paddingBottom: 190 }]}>
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
            source={require("@/assets/Library page/BillieEillish.png")}
            style={styles.artistPic}
          />
          <Text style={styles.artistsName}>Billie Eillish</Text>
        </View>
        <View style={styles.artistContainer}>
          <Image
            source={require("@/assets/Library page/Stray Kids.png")}
            style={styles.artistPic}
          ></Image>
          <Text style={styles.artistsName}>Stray Kids</Text>
        </View>
        <View style={styles.artistContainer}>
          <Image
            source={require("@/assets/Library page/Fuji Kaze.png")}
            style={styles.artistPic}
          ></Image>
          <Text style={styles.artistsName}>Fuji Kaze</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.artistContainer}>
          <Image
            source={require("@/assets/Library page/MAMSC.png")}
            style={styles.artistPic}
          />
          <Text style={styles.artistsName}>Me and My Sandcastle</Text>
        </View>
        <View style={styles.artistContainer}>
          <Image
            source={require("@/assets/Library page/Doja Cat.png")}
            style={styles.artistPic}
          ></Image>
          <Text style={styles.artistsName}>Doja Cat</Text>
        </View>
        <View style={styles.artistContainer}>
          <Image
            source={require("@/assets/Library page/Adele 1.png")}
            style={styles.artistPic}
          ></Image>
          <Text style={styles.artistsName}>Adele</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.artistContainer}>
          <Image
            source={require("@/assets/Library page/Laufey.png")}
            style={styles.artistPic}
          />
          <Text style={styles.artistsName}>Laufey</Text>
        </View>
        <View style={styles.artistContainer}>
          <Image
            source={require("@/assets/Library page/Conan Gray.png")}
            style={styles.artistPic}
          ></Image>
          <Text style={styles.artistsName}>Conan Gray</Text>
        </View>
        <View style={styles.artistContainer}>
          <Image
            source={require("@/assets/Library page/Sabrina.png")}
            style={styles.artistPic}
          ></Image>
          <Text style={styles.artistsName}>Sabrina Carpenter</Text>
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
