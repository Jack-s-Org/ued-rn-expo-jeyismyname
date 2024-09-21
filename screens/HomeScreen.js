import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  SafeAreaView,
} from "react-native";

import SongLists from "@/screens/SongList";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ImageBackground
        source={require("@/assets/Background img/home-bg.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.pagetitle}>Discover</Text>
        <Text style={styles.subtitle}>Recently played</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            margin: 16,
            maxHeight: 230,
          }}
        >
          <Image
            style={styles.songCards}
            source={require("@/assets/home page/song-card.png")}
          />
          <Image
            style={styles.songCards}
            source={require("@/assets/home page/song-card-stray kids.png")}
          />
          <Image
            style={styles.songCards}
            source={require("@/assets/home page/song-card-sza.png")}
          />
          <Image
            style={styles.songCards}
            source={require("@/assets/home page/song-card-louie.png")}
          />
        </ScrollView>

        <Text style={styles.subtitle}>Playlist just for you</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ margin: 16, maxHeight: 259 }}
        >
          <Pressable
            onPress={() => {
              navigation.push("Playlists", { screen: "HomeScreen" });
            }}
          >
            <Image
              source={require("@/assets/home page/playlist.png")}
              style={styles.playlistDisk}
            />
          </Pressable>
          <Image
            source={require("@/assets/home page/playlist 2.png")}
            style={styles.playlistDisk}
          />
          <Image
            source={require("@/assets/home page/playlist 3.png")}
            style={styles.playlistDisk}
          />
          <Image
            source={require("@/assets/home page/playlist 4.png")}
            style={styles.playlistDisk}
          />
        </ScrollView>
        <Text style={styles.subtitle}>For your daily remix</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ margin: 16, maxHeight: 231 }}
        >
          <Image
            source={require("@/assets/home page/daily-remix 2.png")}
            style={styles.playlistRemix}
          />
          <Image
            source={require("@/assets/home page/daily-remix.png")}
            style={styles.playlistRemix}
          />
          <Image
            source={require("@/assets/home page/daily-remix 3.png")}
            style={styles.playlistRemix}
          />
          <Image
            source={require("@/assets/home page/daily-remix 4.png")}
            style={styles.playlistRemix}
          />
        </ScrollView>
        <Text style={styles.subtitle}>New release</Text>
        <SongLists
          artistImage={require("@/assets/test images/Falling-for-you.png")}
          songTitle="Falling For You"
          artistName="Devin Kennady"
        />
        <SongLists
          artistImage={require("@/assets/test images/die-with-a-smile.png")}
          songTitle="Die With a Smile"
          artistName="Lady Gaga, Bruno Mars"
        />
        <SongLists
          artistImage={require("@/assets/test images/Laufey.png")}
          songTitle="What Love Will Do to You"
          artistName="Laufey"
        />
        <Text style={styles.subtitle}>Your mood disks</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ margin: 16, maxHeight: 260, marginBottom: 180 }}
        >
          <Image
            source={require("@/assets/home page/mood-disks.png")}
            style={styles.moodDisks}
          />
          <Image
            source={require("@/assets/home page/mood-disks 2.png")}
            style={styles.moodDisks}
          />
          <Image
            source={require("@/assets/home page/mood-disks 3.png")}
            style={styles.moodDisks}
          />
          <Image
            source={require("@/assets/home page/mood-disks 4.png")}
            style={styles.moodDisks}
          />
        </ScrollView>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
    // display: "flex",
    // flex: 1,
  },

  pagetitle: {
    color: "white",
    fontSize: 48,
    fontFamily: "Syne-Bold",
    marginLeft: 16,
    marginTop: 57,
  },

  subtitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "500",
    fontFamily: "Syne-SemiBold",
    marginLeft: 16,
    marginTop: 12,
  },

  songCards: {
    marginRight: 4,
    width: 164,
    height: 230,
  },

  playlistDisk: {
    marginRight: 8,
    width: 249,
    height: 259,
  },

  playlistRemix: {
    marginRight: 12,
    width: 176,
    height: 230.5,
  },

  moodDisks: {
    marginRight: 8,
    width: 249,
    height: 259,
  },

  image: {
    width: 393,
  },
});

export default HomeScreen;
