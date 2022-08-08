import { StyleSheet } from 'react-native';
import Colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 20,
    paddingTop: 20,
    borderRadius: 10,
  },
  bidsContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingLeft: 8,
    position: 'absolute',
    top: '54%',
    zIndex: 100,
  },
  image: {
    width: '100%',
    height: 200,
  },
  counterContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '54%',
    left: 240,
    backgroundColor: Colors.white,
    width: 90,
    zIndex: 100,
    shadowColor: '#000',
    borderRadius: 10,
    padding: 5,
  },
});

export default styles;
