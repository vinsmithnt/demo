import React from 'react';
import {FlatList, View} from 'react-native';
import {useSelector} from 'react-redux';
import CharacterBox from '../../components/CharacterBox';
import globalStyles from '../../config/globalStyles';
import {ListArrayProps} from '../../config/interfaceTypes';

const HomeScreen: React.FC = () => {
  const listing: any = useSelector<ListArrayProps>(
    state => state.listArray.list,
  );

  return (
    <View style={globalStyles.pageContainer}>
      <FlatList
        data={listing}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={item => <CharacterBox {...item} />}
        contentContainerStyle={globalStyles.listContainer}
      />
    </View>
  );
};

export default HomeScreen;
