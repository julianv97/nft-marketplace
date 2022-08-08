import { Pressable, Text } from 'native-base';
import React from 'react';
import Colors from '../../theme/colors';
import styles from './styles';

const BidButton = () => {
  return (
    <Pressable style={styles.button}>
      <Text alignSelf="center" color={Colors.white}>
        Place a bid
      </Text>
    </Pressable>
  );
};

export default BidButton;
