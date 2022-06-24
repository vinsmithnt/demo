import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import CharacterBox from '../../components/CharacterBox';
import CustomText from '../../components/CustomText';
import globalStyles from '../../config/globalStyles';
import {ListArrayProps} from '../../config/interfaceTypes';

const FavoriteScreen: React.FC = props => {
  const listing: any = useSelector<ListArrayProps>(
    state => state.listArray.list,
  );
  const [favoriteData, setFavoriteData] = useState([]);

  useEffect(() => {
    let tmpList = listing.filter(
      (item: {isLiked: boolean}) => item.isLiked === true,
    );
    setFavoriteData(Object.assign([], tmpList));
  }, [listing]);

  const EmptyList = () => {
    return (
      <View style={styles.emptyContainer}>
        <CustomText text="No favorites" style={styles.tryAgainText} />
      </View>
    );
  };

  return (
    <View style={globalStyles.pageContainer}>
      <FlatList
        data={favoriteData}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={item => <CharacterBox {...item} />}
        contentContainerStyle={globalStyles.listContainer}
        ListEmptyComponent={() => <EmptyList />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(70),
  },
  tryAgainText: {
    fontSize: 24,
    color: '#C4C4C4',
    marginTop: 5,
  },
});

export default FavoriteScreen;
