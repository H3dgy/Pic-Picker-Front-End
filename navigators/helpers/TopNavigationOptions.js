import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import CreditHearthComponent from "../../components/CreditHearthComponent";
import Icon from "react-native-vector-icons/Ionicons";


const TopNavigationOptions = navigation => ({
  title: "App",
  headerLeft: (
    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      <View>
        <Icon name="md-menu" size={24} style={styles.menuButton}/>
      </View>
    </TouchableOpacity>
  ),
  headerRight: (
      <View style={{marginRight: 30}}>
         <CreditHearthComponent navigator={navigation}/>
      </View>
  )
});

export default TopNavigationOptions

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  menuButton: {
    marginLeft: 40,
    marginRight: 40
  }
});