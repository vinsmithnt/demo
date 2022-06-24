import {TextStyle} from 'react-native';

export type CustomTextProps = {
  text: string;
  style?: TextStyle;
  numberOfLines?: number | undefined;
};

export type ListProps = {
  char_id: Number;
  name: string;
  birthday: string;
  occupation: Array<string>;
  img: string;
  status: string;
  nickname: string;
  appearance: Array<Number>;
  portrayed: string;
  category: string;
  better_call_saul_appearance: Array<Number> | null | undefined;
  isLiked: boolean;
};

export type CharacterBoxProps = {
  item: ListProps;
  index: Number;
};

export type ListArrayProps = {
  listArray: {
    list: Array<ListProps> | [];
  };
};
