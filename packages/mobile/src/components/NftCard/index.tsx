import React from 'react';
import { View } from 'react-native';
import { Box, Image, Avatar, Text, Pressable, Flex } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import Colors from '../../theme/colors';

interface Props {
  item: any;
}

const NftCard: React.FC<Props> = ({ item }) => {
  return (
    <Box style={styles.container}>
      <Image source={item.image} alt="nft" style={styles.image} borderTopRadius={10} />
      <Box style={styles.bidsContainer}>
        {item.bids.map((bid: any) => (
          <Avatar key={bid.id} source={bid.image} />
        ))}
      </Box>
      <View style={styles.counterContainer}>
        <Text>Ending in</Text>
        <Text>12h 30m</Text>
      </View>
      <Box pb={4} pt={2} pl={3} bg="gray.100" borderBottomRadius={10}>
        <Text mt={8} fontWeight="bold" fontSize="2xl" textTransform="capitalize">
          {item.name}
        </Text>
        <Text>by {item.creator}</Text>
        <Box pt={2} flexDirection="row" w="100%" justifyContent="space-between">
          <Flex direction="row">
            <MaterialCommunityIcons name="ethereum" size={20} color="black" />
            <Text>{item.price}</Text>
          </Flex>
          <Pressable style={styles.button}>
            <Text alignSelf="center" color={Colors.white}>
              Place a bid
            </Text>
          </Pressable>
        </Box>
      </Box>
    </Box>
  );
};

export default NftCard;
