import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {heartRed} from '../config/imageSources';
import NavigationService from '../services/NavigationService';

const HeaderFavorite: React.FC = () => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => NavigationService.navigate('FavoriteScreen')}>
      <Image source={heartRed} style={styles.heartIcon} resizeMode="contain" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  heartIcon: {
    height: 22,
    width: 22,
  },
});

export default HeaderFavorite;
