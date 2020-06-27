import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import React from "react";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { Drawer as PaperDrawer } from "react-native-paper";
import { TouchableOpacity } from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUserPlus, faKey, faHome } from "@fortawesome/free-solid-svg-icons";
import HomeScreen from "../screens/HomeScreen";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const { descriptors, state, navigation } = props;
  return (
    <DrawerContentScrollView {...props}>
      {state.routes.map((item, index) => {
        let active = props.state.index == index;
        return (
          <TouchableOpacity
            key={item.key}
            onPress={() => navigation.navigate(item.name)}
          >
            <PaperDrawer.Item
              style={{ backgroundColor: active ? "#ede0fc" : "#fff" }}
              icon={getIcon(item.name)}
              label={item.name}
              active={active}
            />
          </TouchableOpacity>
        );
      })}
    </DrawerContentScrollView>
  );
};

const getIcon = (name) => {
  switch (name) {
    case "Home":
      return ({ size, color }) => (
        <FontAwesomeIcon icon={faHome} size={size} color={color} />
      );
    case "CreateProduct":
      return "pencil";
    case "Login":
      return ({ size, color }) => (
        <FontAwesomeIcon icon={faKey} size={size} color={color} />
      );
    case "Logout":
      return "exit-to-app";
    case "Register":
      return ({ size, color }) => (
        <FontAwesomeIcon icon={faUserPlus} size={size} color={color} />
      );
  }
};

const MainNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="Register" component={RegisterScreen} />
    </Drawer.Navigator>
  );
};

export default MainNavigator;
