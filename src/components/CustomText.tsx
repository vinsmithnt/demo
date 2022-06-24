import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { CustomTextProps } from '../config/interfaceTypes';

const CustomText: React.FC<CustomTextProps> = props => {
  const {text, style, numberOfLines} = props;

  return (
    <View>
      <Text numberOfLines={numberOfLines} style={[styles.defaultText, style]}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  defaultText: {},
});

export default CustomText;
