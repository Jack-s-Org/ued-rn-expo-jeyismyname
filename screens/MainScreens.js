import { useState } from "react";
import { StyleSheet, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeScreen from "./HomeScreen";
import LibraryScreen from "./Library";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import Account from "./Account";
import DiscoverScreen from "./DiscoverScreen";
import AppDrawer from "./AppDrawer";
import SettingsScreen from "./SettingsScreen";
import { useNavigation } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import React from "react";
import CommuteScreen from "./CommuteScreen";
import CustomTabBar from "@/Components/CustomTabBar";
import PlaylistPage from "./PlaylistPage";

const MainStacks = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = ({ navigation }) => {
  const [unreadCount, setUnreadCount] = useState(3);

  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#121212",
        },
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveBackgroundColor: "#a0a0a0",
      }}
    >
      <Tab.Screen
        name="Discover"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/icomoon/Discover-white.png")
                  : require("@/assets/icomoon/Discover-gray.png")
              }
              style={{ width: 38, height: 38 }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={DiscoverScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/icomoon/Search-white.png")
                  : require("@/assets/icomoon/Search-gray.png")
              }
              style={{ width: 38, height: 38 }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Add"
        component={CommuteScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/icomoon/Commute-white.png")
                  : require("@/assets/icomoon/Commute-gray.png")
              }
              style={{ width: 38, height: 38 }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Inbox"
        component={LibraryScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/icomoon/Library-white.png")
                  : require("@/assets/icomoon/Library-gray.png")
              }
              style={{ width: 38, height: 38 }}
            />
          ),
          // tabBarLabel: "Library",
          // tabBarBadge: unreadCount,
        }}
        listeners={{
          tabPress: () => {
            setUnreadCount(null);
          },
        }}
      />

      <Tab.Screen
        name="SettingsDrawer"
        component={Account}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("@/assets/icomoon/Account-white.png")
                  : require("@/assets/icomoon/Account-gray.png")
              }
              style={{ width: 38, height: 38 }}
            />
          ),
          // tabBarLabel: "Account",
        }}
      />
    </Tab.Navigator>
  );
};

const MainScreens = () => {
  return (
    <MainStacks.Navigator>
      <MainStacks.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <MainStacks.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ animation: "fade_from_bottom" }}
      />
      <MainStacks.Screen
        name="Playlists"
        component={PlaylistPage}
        options={{ animation: "fade_from_bottom", headerShown: false }}
      />
    </MainStacks.Navigator>
  );
};

export default MainScreens;
