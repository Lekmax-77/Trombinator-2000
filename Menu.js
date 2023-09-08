import React from 'react';
import { NavigationContainer, useRoute } from '@react-navigation/native'; // Ajout de useRoute
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Svg, { Path } from 'react-native-svg';
import { View, Text } from 'react-native';
import { Image } from 'react-native';
import TrombiScreen from './(tabs)/Trombi';
import EventsScreen from './(tabs)/Events';

const Tab = createBottomTabNavigator();

const HomeIcon = ({ color, size }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke-width="1.5"
    stroke={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
    />
  </Svg>
);
const SettingsIcon = ({ color, size, backgroundColor }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke={color}>
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
    />
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </Svg>
);

const EventsIcon = ({ color, size }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke-width="1.5"
    stroke={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
    />
  </Svg>
);

const ForumIcon = ({ color, size }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke-width="1.5"
    stroke={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
    />
  </Svg>
);

const TrombiIcon = ({ color, size }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke-width="1.5"
    stroke={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
    />
  </Svg>
);


const HomeScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Home</Text>
  </View>
);



const ForumScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Forum</Text>
  </View>
);


const SettingsScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Settings</Text>
  </View>
);

const Menu = () => {
  const route = useRoute();

  // Accédez aux paramètres passés depuis l'écran de connexion
  const { email, token } = route.params;
  
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen 
        name="Events" 
        options={{
          title: 'Events',
          tabBarIcon: ({ color, size }) => (
            <EventsIcon color={color} size={size} />
          ),
        }}
      >
        {() => <EventsScreen token={token} />}
      </Tab.Screen>
      <Tab.Screen 
        name="Forum" 
        component={ForumScreen} 
        options={{
          title: 'Forum',

          tabBarIcon: ({ color, size }) => (
            <ForumIcon color={color} size={size} />
          ),
      
      }} // Définir le titre de l'écran
      />
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <HomeIcon color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Trombi" 
        options={{
          title: 'Trombinoscope',
          tabBarIcon: ({ color, size }) => (
            <TrombiIcon color={color} size={size} />
          ),
        }}
      >
        {() => <TrombiScreen token={token} />}
      </Tab.Screen>
      <Tab.Screen 
        name="Settings" 
        component={SettingsScreen}
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <SettingsIcon color={color} size={size} />
          ),
      
      }} // Définir le titre de l'écran
      />
    </Tab.Navigator>
  );
};

export default Menu;
