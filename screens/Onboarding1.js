import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import Onboarding_anim1 from "@/Components/Onboarding_anim1";

// const image = { uri: "https://legacy.reactjs.org/logo-og.png" };

const Onboarding1 = ({ navigation }) => {
  return (
    // image background
    <View style={styles.container}>
      <ImageBackground
        source={require("@/assets/Background img/Onboarding_bg.png")}
        resizeMode="cover"
        style={styles.image}
      >
        {/* playback video */}
        <Onboarding_anim1 />
        {/* Text */}
        <Text style={styles.title}>
          Introducing the all-new Commute Feature!
        </Text>
        <Text style={styles.subtitle}>
          Now you can ditch the stress and focus on the music. We'll guide you
          every step of the way.
        </Text>

        {/* Button */}
        <Pressable
          onPress={() => {
            navigation.replace("Onboarding2", { screen: "Home" });
          }}
        >
          <Image
            style={styles.btnimage}
            source={require("@/assets/Button img/OB_button.png")}
          ></Image>
        </Pressable>
      </ImageBackground>
    </View>
    // <SafeAreaView>
    //   <View style={styles.container}>
    //     <ImageBackground
    //       source={require("@/assets/Background img/Onboarding_bg.png")}
    //       resizeMode="cover"
    //       style={styles.image}
    //     >
    //       <Text style={styles.text}>Inside</Text>
    //     </ImageBackground>
    //   </View>
    //   <Text>Onboarding1</Text>

    // </SafeAreaView>
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
    color: "white",
    fontSize: 20,
    fontFamily: "Syne-Bold",
    textAlign: "center",
  },
  subtitle: {
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

export default Onboarding1;
