// Render Error: A date or time must be specified as 'value' prop


import * as React from "react";
import { StyleSheet, View, Text, SafeAreaView, Dimensions, TextInput, TouchableOpacity, Pressable, Modal } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import Button from '../components/Button';
import { ScrollView } from "react-native-gesture-handler";
import { useState, useEffect } from "react";
import CalendarPicker from "react-native-calendar-picker";
import { FontAwesome5 } from '@expo/vector-icons';
import DateTimePicker from "@react-native-community/datetimepicker";
import {Dropdown} from 'react-native-element-dropdown';






const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const data = [
  {label: '8:00 AM ', value: '1'},
  {label: '9:00 AM', value: '2'},
  {label: '10:00 AM ', value: '3'},
  {label: '11:00 AM ', value: '4'},
  {label: '12:00 AM ', value: '5'},

  {label: '1:00 PM ', value: '5'},
  {label: '2:00 PM ', value: '5'},
  {label: '3:00 PM ', value: '5'},
  {label: '4:00 PM ', value: '5'},
  {label: '5:00 PM ', value: '5'},
]


const BookingScreen = () => {
  const [location, setLocation] = React.useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [isFocus, setIsFocus] = useState(false);


  
  const handleContinue = () => {
    // Handle continue button press
  };
  const onDateChange = (selectedDate) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
  
    const month = monthNames[selectedDate.getMonth()];
    const day = selectedDate.getDate();
    const year = selectedDate.getFullYear();
  
    const formattedDate = `${month} ${day}, ${year}`;
    setDate(formattedDate);
  };

  return (
    // <SafeAreaView style={{ flex: 1, marginTop: 25 }}>
    <SafeAreaView style={{ flex: 1}}>
      <ScrollView>
    <View style={[styles.bookingscreen2, { marginBottom: 0 }]}>
        <View style={[styles.bookingscreen2Child, styles.childPosition]} />

        
        <Text style={[styles.bookingtext]}>{`Start Booking`}</Text>

        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          
          
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <Text style={{  left: windowWidth *0.05, fontSize: 15,fontWeight: '500', position: "relative", bottom: 10, }}>Select your preferred date and time-slot</Text>
          
          <View style={styles.calenderContainer}>
          <CalendarPicker
                onDateChange={onDateChange}
                width={windowWidth * 0.8}
                minDate={Date.now()}
                todayBackgroundColor="white"
                todayTextStyle={{ color: "black" }}
                selectedDayColor="#07374d"
                selectedDayTextColor="white"
                
              />
          </View>


          
          <View style={styles.inputRow}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Start Time</Text>
              <Dropdown
                style={[styles.dropdown1, isFocus && {borderColor: 'blue'}]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? '' : '...'}
                value={startTime}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setStartTime(item.value);
                  setIsFocus(false);
                }}
              />
            </View>
          
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel1}>End Time</Text>
              <Dropdown
                style={[styles.dropdown2, isFocus ]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? '' : '...'}
                value={endTime}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setEndTime(item.value);
                  setIsFocus(false);
                }}
              />
            </View>
          </View>

          <Text style={styles.inputLabel}>Date</Text>
            <TextInput
              style={styles.input}
              value={date }  
              editable={false} 
            />
          
          <Text style={styles.inputLabel}>Location</Text>
          <View style={styles.locationInput}>
            <TextInput
              style={styles.input}
              placeholder="Choose Location"
              value={location}
              onChangeText={setLocation}
            />
            <FontAwesome5 name="map-marker-alt" size={15} color="gray" style={styles.locationIcon} />
          </View>
        </View>
        
        <Button title="Continue" filled Color={Color.colorWhite} 
        style={{ height: 53,
            width: windowWidth * 0.890, 
            top: 850,
            position: "absolute", 
             }} 
            onPress={handleContinue} 
        />

      </View>
      
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  childPosition: {
    backgroundColor: Color.colorDarkslategray_500,
    left: 0,
    position: "absolute",
  },
  groupChildLayout: {
    height: 650,
    width: windowWidth * 0.890,
    position: "absolute",

    
  },
  
  groupLayout: {
    width: 293,
    height: 34,
    borderWidth: 0.2,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  zipCodePosition: {
    left: 26,
    position: "absolute",
  },
  
  continuebutton: {
    top: 780,
    height: 53,
    width: 358,
    left: 36,
    position: "absolute",
  },
  bookingscreen2Child: {
    top: -19,
    width: 430,
    height: 378,
  },
  groupChild: {
    shadowColor: "rgba(0, 0, 0, 1s)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 4,
    elevation: 5,
    shadowOpacity: 0.5,
    left: 0,
    height: 534,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
 
  rectangleParent: {
    justifyContent: 'center',
    top:170,
    // marginTop:10,
    //alignItems: 'center',
  },
  bookingtext: {
    top: 47,
    fontSize: 55,
    width: 210,
    textAlign: "left",
    
    left: windowWidth * 0.05,
    color: Color.colorWhite,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    lineHeight: 53,
    position: "absolute", 
   
    
    
  },
  bookingscreen2: {
    flex: 1,
    width: "100%",
    height: 925,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  

  input: {
    height: windowHeight * 0.045, 
    width:windowWidth * 0.77, 
    borderColor: Color.colorDarkgray,
    borderRadius: 5,
    borderWidth: 1,
    marginVertical: windowHeight * 0.008, 
    paddingHorizontal: windowWidth * 0.025, 
    fontSize: 14,
    color: 'black',
    left: 25,
  },
  
  inputLabel: {
    marginBottom: 0,
    fontWeight: "bold",
    textAlign: "left",
    width: windowWidth * 0.7, 
    left: 25,
    color: Color.colorBlack,
    fontFamily: FontFamily.quicksandSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    
  },
  inputLabel1: {
    marginBottom: 0,
    fontWeight: "bold",
    textAlign: "left",
    width: windowWidth * 0.7, 
    // left: 175,
    color: Color.colorBlack,
    fontFamily: FontFamily.quicksandSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    
    
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginBottom: 20,
    
  },
  inputContainer: {
    flex: 1,
    marginRight: 10,
  },

  
  calenderContainer: {
    backgroundColor: "white",
    padding:20,
    borderRadius: 15,
    bottom: 10,
    marginBottom:5,
    
  },
  locationInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    marginLeft: 5,
  },


  dropdown1: {
    height: windowHeight * 0.045, 
    width: windowWidth * 0.37,
    borderColor: Color.colorDarkgray,
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: windowHeight * 0.008, 
    paddingHorizontal: windowWidth * 0.025, 
    marginTop:8,
    left: 25,
  },
  dropdown2: {
    height: windowHeight * 0.045, 
    width: windowWidth * 0.39,
    borderColor: Color.colorDarkgray,
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: windowHeight * 0.008, 
    paddingHorizontal: windowWidth * 0.025, 
    marginTop:8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 14,
    color:'gray'
  },
  selectedTextStyle: {
    fontSize: 14,
  }
  
});

export default BookingScreen;