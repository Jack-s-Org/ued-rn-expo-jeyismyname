import * as React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const SongList = (props) => {
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
          <Text style={[styles.artistName]}>{props.artistName}</Text>
        </View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    // width: 200,
    alignItems: "center",
    flexDirection: "row",
  },

  songTitle: {
    width: 195,
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Syne-SemiBold",
    color: "#fff",
  },
  artistName: {
    fontSize: 16,
    fontFamily: "Syne-Regular",
    color: "#878787",
  },
  artistImage: {
    width: 72,
    height: 72,
    resizeMode: "cover",
  },

  textFrame: {
    height: 47,
    marginLeft: 12,
  },
  songFrame: {
    marginTop: 4,
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
    width: 26,
    height: 26,
  },
});

export default SongList;
