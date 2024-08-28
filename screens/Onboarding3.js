import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import Onboarding_anim2 from "@/Components/Onboarding_anim3";

const Onboarding3 = ({ navigation }) => {
  return (
    // image background
    <View style={styles.container}>
      <ImageBackground
        source={require("@/assets/Background img/Onboarding_bg.png")}
        resizeMode="cover"
        style={styles.image}
      >
        {/* playback video */}
        <Onboarding_anim2 />
        {/* Text */}
        <Text style={styles.title}>Smart notifications will alert you</Text>
        <Text style={styles.subtitle}>
          When your stop is approaching, ensuring you never miss a beat!
        </Text>

        {/* Button */}
        <Pressable
          onPress={() => {
            navigation.replace("Main", { screen: "MainScreens" });
          }}
        >
          <Image
            style={styles.btnimage}
            source={require("@/assets/Button img/OB_button-start.png")}
          ></Image>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    marginHorizontal: 20,
    color: "white",
    fontSize: 20,
    fontFamily: "Syne-Bold",
    textAlign: "center",
    marginTop: 28,
  },
  subtitle: {
    marginHorizontal: 20,
    color: "white",
    fontSize: 16,
    fontFamily: "Syne-Regular",
    textAlign: "center",
    marginTop: 28,
  },
  btnimage: {
    width: 294,
    height: 49,
    alignSelf: "center",
    marginTop: 28,
  },
});

export default Onboarding3;
