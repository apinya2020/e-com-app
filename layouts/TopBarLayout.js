import React from "react";
import { View, Text } from "react-native";
import { Appbar } from "react-native-paper";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";

export default function TopBarLayout({ children, navigation, title }) {
  const _goBack = () => navigation.toggleDrawer();
  return (
    <>
      <Appbar.Header>
        {/* <Appbar.BackAction onPress={_goBack} /> */}
        <Appbar.Action
          icon={({ size, color }) => (
            <FontAwesomeIcon icon={faBars} size={size} color={color} />
          )}
          onPress={_goBack}
        />
        <Appbar.Content title={title} />
      </Appbar.Header>
      {children}
    </>
  );
}
