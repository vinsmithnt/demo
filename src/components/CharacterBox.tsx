import React from 'react';
import {StyleSheet, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import CustomText from './CustomText';
import FastImage from 'react-native-fast-image';
import {CharacterBoxProps} from '../config/interfaceTypes';
import {color} from '../config/colors';

const CharacterBox: React.FC<CharacterBoxProps> = props => {
  const {item, index} = props;

  return (
    <View key={Number(index)} style={styles.boxContainer}>
      <FastImage
        style={styles.userImage}
        source={{
          uri: item.img,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />

      <View style={styles.desContainer}>
        <View>
          <CustomText
            text={item.name}
            numberOfLines={1}
            style={styles.nameText}
          />
          <CustomText
            text={item.nickname}
            numberOfLines={1}
            style={styles.nickNameText}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    width: wp(42),
    marginRight: wp(5),
    marginBottom: 15,
    padding: 10,
    alignItems: 'center',
  },
  userImage: {
    height: wp(50),
    width: wp(40),
    borderRadius: 7,
  },
  desContainer: {
    width: wp(40),
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameText: {
    color: color.white,
    width: wp(40) - 30,
    fontWeight: '700',
    fontSize: 16,
  },
  nickNameText: {
    color: color.white,
    fontSize: 14,
  },
  heartIcon: {
    height: 22,
    width: 22,
  },
});

export default CharacterBox;
