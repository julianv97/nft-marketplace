import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Box } from 'native-base';
import { HomeScreen, CartScreen, LikesScreen, ProfileScreen } from '../../screens';
import { Avatar, Logo, TabBarItem, StatusBar } from '../../components';
import RootStackParamList, { Screens } from '../../types/navigation';
import Icons from '../../types/icons';
import styles from './styles';
import Colors from '../../theme/colors';

const Tab = createBottomTabNavigator<RootStackParamList>();

const ContentNavigator = () => {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={() => ({
            headerTitle: '',
            headerLeft: () => <Logo />,
            headerRight: () => <Avatar />,
            headerBackground: () => <Box bg={Colors.darkBlue} style={styles.homeHeader} />,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar,
          })}
        >
          <Tab.Screen
            name={Screens.HOME}
            component={HomeScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <TabBarItem icon={Icons.GRID} color={focused ? Colors.white : Colors.gray} />
              ),
              tabBarItemStyle: styles.tabBarItem,
            }}
          />
          <Tab.Screen
            name={Screens.CART}
            component={CartScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <TabBarItem icon={Icons.CART} color={focused ? Colors.white : Colors.gray} />
              ),
              tabBarItemStyle: styles.tabBarItem,
            }}
          />
          <Tab.Screen
            name={Screens.LIKES}
            component={LikesScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <TabBarItem icon={Icons.HEART} color={focused ? Colors.white : Colors.gray} />
              ),
              tabBarItemStyle: styles.tabBarItem,
            }}
          />
          <Tab.Screen
            name={Screens.PROFILE}
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ focused }) => (
                <TabBarItem icon={Icons.PROFILE} color={focused ? Colors.white : Colors.gray} />
              ),
              tabBarItemStyle: styles.tabBarItem,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default ContentNavigator;
