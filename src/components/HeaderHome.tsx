import React from 'react';
import {StyleSheet, View} from 'react-native';
import HeaderFavorite from './HeaderFavorite';
import HeaderSearch from './HeaderSearch';

const HeaderHome: React.FC = () => {
  return (
    <View style={styles.container}>
      <HeaderSearch />
      <HeaderFavorite />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    alignItems:"center"
  },
});

export default HeaderHome;
