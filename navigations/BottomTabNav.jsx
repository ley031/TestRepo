import { View } from "react-native";
import React from "react";
import { SimpleLineIcons, Feather, MaterialCommunityIcons, FontAwesome6, Entypo } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from "../constants/theme.jsx";
import { Home, Message, Profile, Booking, Create } from "./../Screens/ProviderScreens"
import { HomePage, ProfilePage, MessagePage, BookingPage} from "./../Screens/SeekerScreens"

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarHideOnKeyboard: true,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    backgroundColor: COLORS.white,
  },
};

export default BottomTabNav = ({route}) => {

  const { userRole, userEmail } = route.params;

  // console.log("User Email: ", userEmail);

  if (userRole === 'Provider') {
    return (

     
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            
            tabBarIcon: ({ focused }) => {
              return (
                <SimpleLineIcons
                  name="home"
                  size={24}
                  color={focused ? COLORS.primary : COLORS.black}
                />
                
              );
              
            },
            
          }}
          initialParams={{userEmail: userEmail}}
        />
  
        <Tab.Screen
          name="Booking"
          component={Booking}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Entypo
                  name="calendar"
                  size={24}
                  color={focused ? COLORS.primary : COLORS.black}
                />
              );
            },
          }}
          initialParams={{userEmail: userEmail}}
        />
  
        <Tab.Screen
          name="Create"
          component={Create}
  
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: COLORS.primary,
                    borderWidth: 19,
                    borderRadius: 65,
                    borderColor: COLORS.primary,
                  }}
                >
                  <FontAwesome6 name="add" size={24} color="white" />
                </View>
              );
            },
          }}
          initialParams={{userEmail: userEmail}}
        />
  
        <Tab.Screen
          name="Message"
          component={Message}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                  <Feather name="message-square" 
                  size={24} 
                  color={focused ? COLORS.primary : COLORS.black}
                  />
              );
            },
          }}
          initialParams={{userEmail: userEmail, userRole: userRole}}
        />
  
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <MaterialCommunityIcons
                  name="account"
                  size={24}
                  color={focused ? COLORS.primary : COLORS.black}
                />
              );
            },
          }}
          initialParams={{userEmail: userEmail}}
        />
      </Tab.Navigator>
     
    );
  } else if (userRole === 'Seeker'){
    return (
      
      <Tab.Navigator screenOptions={screenOptions}>

        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <SimpleLineIcons
                  name="home"
                  size={24}
                  color={focused ? COLORS.primary : COLORS.black}
                />
              );
            },
          }}
          initialParams={{userEmail: userEmail}}
        />
        <Tab.Screen
          name="Booking"
          component={BookingPage}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Entypo
                  name="calendar"
                  size={24}
                  color={focused ? COLORS.primary : COLORS.black}
                />
              );
            },
          }}
          initialParams={{userEmail: userEmail}}
        />
  
        <Tab.Screen
          name="Message"
          component={MessagePage}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                  <Feather name="message-square" 
                  size={24} 
                  color={focused ? COLORS.primary : COLORS.black}
                  />
              );
            },
          }}
          initialParams={{userEmail: userEmail}}
        />
  
        <Tab.Screen
          name="Profile"
          component={ProfilePage}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <MaterialCommunityIcons
                  name="account"
                  size={24}
                  color={focused ? COLORS.primary : COLORS.black}
                />
              );
            },
          }}
          initialParams={{userEmail: userEmail}}
        />
      </Tab.Navigator>
    )
  }

  
};