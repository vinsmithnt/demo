import React from 'react';
import {StyleSheet, Text, TextStyle, View} from 'react-native';

export type Props = {
  text: string;
  style?: TextStyle;
  numberOfLines?: number | undefined;
};

const CustomText: React.FC<Props> = props => {
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
