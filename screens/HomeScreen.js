import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";
import API from "../constants/API";
import MainLayout from "../layouts/MainLayout";

const HeaderBox = () => {
  return (
    <View style={styles.header}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 30, fontWeight: "bold" }}>
          E-COMMERCE
        </Text>
        <View
          style={{
            width: "80%",
            backgroundColor: "#fff",
            flexDirection: "row",
            borderRadius: 5,
            overflow: "hidden",
          }}
        >
          <TextInput
            placeholder="Search Products"
            style={{ padding: 10, flex: 1, fontSize: 18 }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: "#000",
              paddingVertical: 10,
              paddingHorizontal: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon icon={faSearch} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const ItemBox = ({ title, seller, price, imgUrl }) => {
  return (
    <View style={styles.itemContainer}>
      <Image
        source={{
          uri: imgUrl,
        }}
        style={{ width: "100%", height: 200 }}
      />
      <View style={{ padding: 10 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{seller}</Text>
        <Text style={styles.text}>{price} ฿</Text>
      </View>
    </View>
  );
};

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    // Axios.get(API.PRODUCT_GET).then((res) => {
    //   this.setState({ products: res.data.data.rows });
    // });

    let res = await Axios.get(API.PRODUCT_GET);
    this.setState({ products: res.data.data.rows });
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: "#fff",
        }}
      >
        <MainLayout>
          <FlatList
            data={this.state.products}
            renderItem={({ item }) => (
              <ItemBox
                title={item.nama}
                seller={item.seller.nama}
                price={item.harga}
                imgUrl={item.photoUrl}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
            ListHeaderComponent={<HeaderBox />}
            numColumns={2}
          />
        </MainLayout>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#6200ee",
    height: 300,
  },
  itemContainer: {
    borderRadius: 5,
    overflow: "hidden",
    flex: 1,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: "#fff",
    // padding: 2
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  text: {
    fontSize: 18,
  },
});
