

import * as React from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height


const RealTimeInfoProvider = () => {
  return (
    <View style={styles.providerrealtimeinfo}>
      <View
        style={[styles.providerrealtimeinfoChild, styles.providerimageIconPosition]}
      />

      <View style={[styles.providerinfo, styles.providerinfoLayout]}>
        <View style={styles.information}>
          <Text style={styles.location}>Lahug, Cebu City</Text>
          <Text style={[styles.role, styles.roleTypo]}>Provider</Text>
          <Text style={[styles.provider, styles.roleTypo]}>Daniel Cruz</Text>
        </View>
        <Image
          style={[styles.seekerimageIcon, styles.providerinfoLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-372.jpg")}
        />
      </View>


      {/* <View style={{right: windowWidth * 0.03, top: 12}}> */}
        <View style={[styles.message, styles.messageLayout]}>
          <MaterialCommunityIcons name="message-text" size={25} color="#07374d"  style={[styles.smsIcon]} />
        </View>
        
      {/* </View> */}
      
    </View>
  );
};

const styles = StyleSheet.create({
  providerimageIconPosition: {
    borderRadius: Border.br_mini,
    left: 0,
    top: 0,
  },
  messageLayout: {
    height: 42,
    width: 42,
    borderRadius: 25,
    position: "absolute",
    backgroundColor:"#D9D9D9"
  },
  iconLayout: {
    height: 23,
    width: 23,
    top: 14,
    position: "absolute",
  },
  providerinfoLayout: {
    height: 76,
    position: "absolute",
  },
  roleTypo: {
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    lineHeight: 19.5,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },




  providerrealtimeinfoChild: {
    shadowColor: "rgba(0, 0, 0, 0.31)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    backgroundColor: Color.colorWhite,
    position: "relative",
    borderRadius: Border.br_mini,
    height: 101,
    width: windowWidth * 0.890, 
  },
  messageChild: {
    width: 52,
    left: 0,
    top: 0,
  },
  
  message: {
    right: windowWidth * 0.03,
    top: 45,
    width: 52,
  },
  smsIcon: {
    left: 10,
    top: 9,
  },
  callIcon: {
    left: 9.5,
    top: 9 ,
  },
  call: {
    right: windowWidth * 0.03,
    top: 45,
    width: 52,
  },
  location: {
    top: 48,
    fontSize: FontSize.size_xs,
    letterSpacing: 0.6,
    lineHeight: 14,
    fontWeight: "500",
    fontFamily: FontFamily.quicksandMedium,
    height: 15,
    textAlign: "left",
    color: Color.colorBlack,
    width: 240,
    left: 0,
    position: "absolute",
  },
  role: {
    top: 22,
    fontSize: FontSize.size_smi,
    color: Color.colorDarkslategray_500,
    width: 55,
    height: 16,
    
  },
  provider: {
    fontSize: FontSize.size_xl,
    width: windowWidth * 0.8,
    height: 50,
    color: Color.colorBlack,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    lineHeight: 15,
    // top: 0,
  },

  

  information: {
    top: 6,
    left: 90,
    height: 61,
    width: 128,
    position: "absolute",
  },

  
  seekerimageIcon: {
    width: 76,
    borderRadius: Border.br_mini,
    left: 0,
    top: 0,
  },
  providerinfo: {
    top: 12,
    left: windowWidth * 0.03, 
    width: 250,
    
  },
  providerrealtimeinfo: {
    height: 101,
    width: windowWidth * 0.890, 
  },
});

export default RealTimeInfoProvider;