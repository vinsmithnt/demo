import { TextStyle } from "react-native";

export type CustomProps = {
    text: string;
    style?: TextStyle;
    numberOfLines?: number | undefined;
  };