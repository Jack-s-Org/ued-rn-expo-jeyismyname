import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { BlurView } from "expo-blur"; // Import BlurView

function CustomTabBar({ state, descriptors, navigation }) {
  return (
    // Wrapping the whole tab bar in BlurView
    <BlurView intensity={100} tint="dark" style={styles.blurContainer}>
      <View style={styles.tabBar}>
        {/* Loop through each Tab.Screen in MainScreen.js */}
        {state.routes.map((route, index) => {
          const descriptor = descriptors[route.key];
          const { options } = descriptor;

          const isFocused = state.index === index;
          const color = isFocused
            ? options.tabBarActiveTintColor
            : options.tabBarInactiveTintColor;

          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;
          const labelText = label instanceof Function ? label() : label;

          const icon = options.tabBarIcon({ focused: isFocused, color });

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabBarItem}
              key={index} // Add a key to prevent warnings
            >
              {icon}
            </TouchableOpacity>
          );
        })}
      </View>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  blurContainer: {
    position: "absolute",
    bottom: 0,
    margin: 16,
    borderRadius: 50,
    overflow: "hidden",
  },
  tabBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#dadada",
    width: 362,
    height: 78,
    borderRadius: 50,
    padding: 16,
    backgroundColor: "transparent",
  },
  tabBarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CustomTabBar;
