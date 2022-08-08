import React from 'react';
import { Box, Text } from 'native-base';
import { FlatList } from 'react-native';
import Colors from '../../theme/colors';
import NFTData from '../../data/mock';
import NftCard from '../../components/NftCard';
import HomeGreetings from '../../components/HomeGreeting';
import styles from './styles';

const HomeScreen = () => {
  return (
    <Box style={styles.container}>
      <FlatList
        data={NFTData}
        renderItem={({ item }) => <NftCard item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.nftListContainer}
        ListHeaderComponent={() => {
          return (
            <Box pb={50} pt={50} bg={Colors.darkBlue}>
              <HomeGreetings />
              <Box>
                <Text textTransform="capitalize">Searcher</Text>
              </Box>
            </Box>
          );
        }}
      />
    </Box>
  );
};

export default HomeScreen;
