import React from 'react';
import { Image } from 'react-native';
import assets from '../../data/assets';
import styles from './styles';

const Logo = () => {
  return <Image source={assets.logoSmallWhite} resizeMode="contain" style={styles.logo} />;
};

export default Logo;
