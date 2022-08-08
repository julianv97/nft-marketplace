import React from 'react';
import { Flex, Heading, Text } from 'native-base';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../../theme/colors';

const HomeGreetings = () => {
  return (
    <Flex direction="column" pl={3}>
      <Flex direction="row">
        <Text textTransform="capitalize" mr={2} color={Colors.white}>
          hello victoria
        </Text>
        <MaterialCommunityIcons name="hand-wave-outline" size={20} color="orange" />
      </Flex>
      <Heading textTransform="capitalize" mt={4} color={Colors.white}>
        lets find marterpiece art
      </Heading>
    </Flex>
  );
};

export default HomeGreetings;
