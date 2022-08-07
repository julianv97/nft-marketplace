import React, { useState } from 'react';
import { Avatar as AvatarNB, Pressable } from 'native-base';
import assets from '../../data/assets';
import Colors from '../../theme/colors';
import styles from './styles';

const Avatar = () => {
  const [userState, setUserState] = useState(true);

  const handlePress = () => {
    setUserState((prevState) => !prevState);
  };

  return (
    <Pressable onPress={handlePress}>
      <AvatarNB source={assets.person01} style={styles.avatar}>
        <AvatarNB.Badge bg={userState ? Colors.greenActive : Colors.gray} />
      </AvatarNB>
    </Pressable>
  );
};

export default Avatar;
