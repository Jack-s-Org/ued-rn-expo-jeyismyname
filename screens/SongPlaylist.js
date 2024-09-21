import * as React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const SongPlaylist = (props) => {
  const [isAdded, setIsAdded] = React.useState(false);

  const handlePress = () => {
    setIsAdded((prev) => !prev);
  };

  return (
    <View style={[styles.songFrame]}>
      <View style={[styles.parentFlexBox]}>
        <Image style={styles.artistImage} source={props.artistImage} />
        <View style={styles.textFrame}>
          <Text
            style={[styles.songTitle]}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {props.songTitle}
          </Text>
          <Text
            style={[styles.artistName]}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {props.artistName}
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.addBUtton} onPress={handlePress}>
        <Image
          style={styles.buttonStyle}
          source={
            require("@/assets/Button img/more.png") // New image for added state
          }
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    width: 200,
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 8,
  },
  songTitle: {
    width: 195,
    fontSize: 16,
    fontFamily: "Syne-SemiBold",
    color: "#fff",
  },
  artistName: {
    fontSize: 16,
    fontFamily: "Syne-Regular",
    color: "#878787",
    width: 245,
  },
  artistImage: {
    width: 60,
    height: 60,
    resizeMode: "cover",
  },

  textFrame: {
    height: 47,
    marginLeft: 12,
  },
  songFrame: {
    width: "100%",
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  addBUtton: {
    paddingVertical: 24,
    paddingRight: 16,
  },

  buttonStyle: {
    width: 20,
    height: 20,
  },
});

export default SongPlaylist;
