import { StyleSheet } from 'react-native';
import Colors from '../../theme/colors';

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 25,
    left: 50,
    right: 50,
    elevation: 0,
    backgroundColor: Colors.darkGray,
    borderRadius: 20,
    height: 70,
  },
  tabBarItem: {
    height: '100%',
    marginTop: 15,
  },
  homeHeader: {
    height: 110,
  },
});

export default styles;
