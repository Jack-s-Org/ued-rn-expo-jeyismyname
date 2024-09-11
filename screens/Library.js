import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TabView, SceneMap } from "react-native-tab-view";
import Libraryplaylists from "./Libraryplaylists";
import LibraryArtists from "./LibraryArtists";
import LibraryAlbums from "./LibraryAlbums";
import { ScrollView } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");

const PlaylistsRoute = () => (
  <ScrollView>
    <View style={styles.container}>
      <Libraryplaylists
        playlistFrame={require("@/assets/Button img/playlist-bg.png")}
        pictureFrame={require("@/assets/Library page/kpop-classic.png")}
        playlistTitle="Classic KPOP"
        playlistSub="Playlist - John Doe"
      />
      <Libraryplaylists
        playlistFrame={require("@/assets/Button img/playlist-bg.png")}
        pictureFrame={require("@/assets/Library page/love-songs.png")}
        playlistTitle="Love Songs"
        playlistSub="Playlist - John Doe"
      />
    </View>
    <View style={styles.container}>
      <Libraryplaylists
        playlistFrame={require("@/assets/Button img/playlist-bg.png")}
        pictureFrame={require("@/assets/Library page/K R&B.png")}
        playlistTitle="K R&B"
        playlistSub="Playlist - John Doe"
      />
      <Libraryplaylists
        playlistFrame={require("@/assets/Button img/playlist-bg.png")}
        pictureFrame={require("@/assets/Library page/jazz effect.png")}
        playlistTitle="Jazz Effect"
        playlistSub="Playlist - John Doe"
      />
    </View>
    <View style={[styles.container, { paddingBottom: 100 }]}>
      <Libraryplaylists
        playlistFrame={require("@/assets/Button img/playlist-bg.png")}
        pictureFrame={require("@/assets/Library page/Last summer.png")}
        playlistTitle="Summer Time"
        playlistSub="Playlist - John Doe"
      />
      <Libraryplaylists
        playlistFrame={require("@/assets/Button img/playlist-bg.png")}
        pictureFrame={require("@/assets/Library page/love-songs.png")}
        playlistTitle="Love Songs"
        playlistSub="Playlist - John Doe"
      />
    </View>
  </ScrollView>
);

const ArtistsRoute = () => (
  <ScrollView>
    <View style={styles.container}>
      <LibraryArtists />
    </View>
  </ScrollView>
);

const AlbumsRoute = () => (
  <ScrollView>
    <View style={styles.container}>
      <Text style={styles.emptyText}>
        <LibraryAlbums />
      </Text>
    </View>
  </ScrollView>
);

const renderScene = SceneMap({
  playlists: PlaylistsRoute,
  artists: ArtistsRoute,
  albums: AlbumsRoute,
});

const LibraryScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "playlists", title: "Playlists" },
    { key: "artists", title: "Artists" },
    { key: "albums", title: "Albums" },
  ]);

  return (
    <ImageBackground
      source={require("@/assets/Background img/library-bg.png")}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      <Text style={styles.pagetitle}>Library</Text>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width }}
        renderTabBar={(props) => (
          <View style={styles.libraryBar}>
            {props.navigationState.routes.map((route, i) => (
              <View
                key={route.key}
                style={[
                  styles.titleContainer,
                  {
                    borderColor: i === index ? "#09de6e" : "transparent",
                  },
                ]}
              >
                <Text
                  onPress={() => setIndex(i)}
                  style={[
                    styles.libraryTitles,
                    { color: i === index ? "white" : "#878787" },
                  ]}
                >
                  {route.title}
                </Text>
              </View>
            ))}
          </View>
        )}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  emptyText: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "Syne-Regular",
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
    alignItems: "center",
    columnGap: 24,
  },
  libraryTitles: {
    fontFamily: "Syne-Regular",
    fontSize: 16,
    marginHorizontal: 18,
    marginVertical: 10,
  },
  titleContainer: {
    borderStyle: "solid",
    borderBottomWidth: 2,
    paddingHorizontal: 10,
  },
});

export default LibraryScreen;
