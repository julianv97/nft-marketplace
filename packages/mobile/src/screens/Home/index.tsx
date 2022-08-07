import { Box, FlatList, Flex, Heading, Image, Text } from 'native-base';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../../theme/colors';
import NFTData from '../../data/mock';

const HomeScreen = () => {
  return (
    <Box h="100%" pt={100} bg={Colors.darkBlue}>
      <Box h="25%" mt={10}>
        <Flex direction="row">
          <Text textTransform="capitalize" mr={2} color={Colors.white}>
            hello victoria
          </Text>
          <MaterialCommunityIcons name="hand-wave-outline" size={20} color="orange" />
        </Flex>
        <Heading textTransform="capitalize" color={Colors.white}>
          lets find marterpiece art
        </Heading>
        <Box>
          <Text textTransform="capitalize">Searcher</Text>
        </Box>
      </Box>
      <Box
        style={{
          backgroundColor: Colors.white,
          width: '100%',
        }}
      >
        <FlatList
          data={NFTData}
          renderItem={({ item }) => (
            <Box>
              <Text textTransform="capitalize">{item.name}</Text>
              <Image source={item.image} w="100%" h="sm" />
            </Box>
          )}
          contentContainerStyle={{
            width: '90%',
            alignSelf: 'center',
          }}
        />
      </Box>
    </Box>
  );
};

export default HomeScreen;
