import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import Onboarding_anim2 from "@/Components/Onboarding_anim2";

const Onboarding2 = ({ navigation }) => {
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
        <Text style={styles.title}>
          Track your location in real-time all within the app.
        </Text>
        <Text style={styles.subtitle}>
          Simply enter your destination, and we'll suggest the best public
          transport routes.
        </Text>

        {/* Button */}
        <Pressable
          onPress={() => {
            navigation.replace("Onboarding3", { screen: "Home" });
          }}
        >
          <Image
            style={styles.btnimage}
            source={require("@/assets/Button img/OB_button.png")}
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
    marginHorizontal: 16,
    color: "white",
    fontSize: 20,
    fontFamily: "Syne-Bold",
    textAlign: "center",
    marginTop: 28,
  },
  subtitle: {
    marginHorizontal: 16,
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

export default Onboarding2;
