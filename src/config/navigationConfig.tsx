import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { color } from "./colors";

export const defaultHeaderOptions: NativeStackNavigationOptions = {
    headerTintColor: color.white,
    headerBackTitleVisible: false,
    headerTitleAlign: 'left',
    headerStyle: {
        backgroundColor: color.themeBlack
    },
};