import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import React, {useLayoutEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import {useDebouncedCallback} from 'use-debounce';
import CharacterBox from '../../components/CharacterBox';
import CustomText from '../../components/CustomText';
import {color} from '../../config/colors';
import globalStyles from '../../config/globalStyles';
import {backArrow} from '../../config/imageSources';
import {ListArrayProps} from '../../config/interfaceTypes';

const SearchScreen: React.FC<NativeStackHeaderProps> = props => {
  const {navigation} = props;
  const [searchData, setSearchData] = useState([]);
  const [tmpText, setTmpText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const listing: any = useSelector<ListArrayProps>(
    state => state.listArray.list,
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTintColor: color.white,
      headerBackTitleVisible: false,
      headerTitleAlign: 'left',
      headerStyle: {
        backgroundColor: color.lightBlack,
      },
      headerLeft: () => (
        <HeaderSearchInput
          changeSearch={(text: string) => changeSearch(text)}
        />
      ),
    });
  }, [navigation]);

  const changeSearch = useDebouncedCallback(async text => {
    setTmpText(text);
    if (text === '') {
      setSearchData([]);
      return;
    }
    setIsLoading(true);
    const newArr = await listing.filter((data: {name: any}) => {
      let name = data.name.toLowerCase();
      return name.match(text.trim().toLowerCase());
    });
    setSearchData(newArr);
    setIsLoading(false);
  }, 700);

  const HeaderSearchInput = ({changeSearch}: any) => {
    const [searchText, setSearchText] = useState('');

    return (
      <View style={styles.searchContainer}>
        <TouchableOpacity
          style={styles.backContainer}
          onPress={() => props.navigation.goBack()}>
          <Image source={backArrow} style={styles.backIcon} />
        </TouchableOpacity>
        <View>
          <TextInput
            placeholder="Search"
            style={styles.inputStyles}
            placeholderTextColor={'#ABABAB'}
            autoCapitalize="none"
            autoCorrect={false}
            value={searchText}
            autoFocus={true}
            onChangeText={(text: string) => {
              setSearchText(text);
              changeSearch(text);
            }}
            underlineColorAndroid="transparent"
          />
        </View>
      </View>
    );
  };

  const EmptyList = () => {
    if (tmpText && !isLoading) {
      return (
        <View>
          <CustomText
            text="No character found"
            style={styles.noCharacterText}
          />
          <CustomText text="Try Again" style={styles.tryAgainText} />
        </View>
      );
    }
    return null;
  };

  return (
    <View style={globalStyles.pageContainer}>
      <FlatList
        data={searchData}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={item => <CharacterBox {...item} />}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={() => <EmptyList />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  backContainer: {
    justifyContent: 'center',
  },
  backIcon: {
    height: 22,
    width: 22,
  },
  inputStyles: {
    color: color.white,
    fontSize: 30,
    fontWeight: '100',
    paddingLeft: 10,
    width: wp(85),
  },
  listContainer: {
    marginLeft: wp(5),
    paddingVertical: 20,
  },
  noCharacterText: {
    fontSize: 24,
    color: color.lightGreen,
  },
  tryAgainText: {
    fontSize: 24,
    color: '#C4C4C4',
    marginTop: 5,
  },
});

export default SearchScreen;
