import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {search} from '../config/imageSources';
import NavigationService from '../services/NavigationService';

const HeaderSearch: React.FC = () => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => NavigationService.navigate('SearchScreen')}>
      <Image source={search} style={styles.searchIcon} resizeMode="contain" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  searchIcon: {
    height: 22,
    width: 22,
  },
});

export default HeaderSearch;
