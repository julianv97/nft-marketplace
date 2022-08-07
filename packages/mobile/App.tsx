import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
};

const CartScreen = () => {
  return (
    <SafeAreaView>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>Cart Screen</Text>
      </View>
    </SafeAreaView>
  );
};

const LikesScreen = () => {
  return (
    <SafeAreaView>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>Likes Screen</Text>
      </View>
    </SafeAreaView>
  );
};

const Settings = () => {
  return (
    <SafeAreaView>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings Screen</Text>
      </View>
    </SafeAreaView>
  );
};

interface TabBarIconProps {
  icon: any;
  color: string;
}

const TabBarItem: React.FC<TabBarIconProps> = ({ icon, color }) => {
  return <Ionicons name={icon} size={28} color={color} />;
};

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <Tab.Navigator
        screenOptions={() => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 25,
            left: 50,
            right: 50,
            elevation: 0,
            backgroundColor: '#040A0F',
            borderRadius: 20,
            height: 70,
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarItem icon="ios-grid-outline" color={focused ? 'white' : 'gray'} />
            ),
            tabBarItemStyle: { height: '100%', marginTop: 15 },
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarItem icon="ios-cart-outline" color={focused ? 'white' : 'gray'} />
            ),
            tabBarItemStyle: { height: '100%', marginTop: 15 },
          }}
        />
        <Tab.Screen
          name="Likes"
          component={LikesScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarItem icon="ios-heart-outline" color={focused ? 'white' : 'gray'} />
            ),
            tabBarItemStyle: { height: '100%', marginTop: 15 },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarItem icon="ios-settings-outline" color={focused ? 'white' : 'gray'} />
            ),
            tabBarItemStyle: { height: '100%', marginTop: 15 },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
