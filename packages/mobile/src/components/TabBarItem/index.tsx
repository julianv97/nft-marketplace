import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

interface Props {
  icon: any;
  color: string;
}

const TabBarItem: React.FC<Props> = ({ icon, color }) => {
  return <Ionicons name={icon} size={28} color={color} />;
};

export default TabBarItem;
