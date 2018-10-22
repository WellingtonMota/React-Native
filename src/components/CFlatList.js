import React, { Component } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

export default class CFlatList extends Component {
  render() {
    return (
      <View>
        <FlatList
          numColumns={3}
          columnWrapperStyle={{ marginBottom: 10 }}
          data={[
            { key: 'A', image: 'https://raw.githubusercontent.com/WellingtonMota/Project-Horoscope-RN/master/src/assets/images/signs/aquarius.jpg' },
            { key: 'B', image: 'https://raw.githubusercontent.com/WellingtonMota/Project-Horoscope-RN/master/src/assets/images/signs/aquarius.jpg' },
            { key: 'C', image: 'https://raw.githubusercontent.com/WellingtonMota/Project-Horoscope-RN/master/src/assets/images/signs/aquarius.jpg' },
            { key: 'D', image: 'https://raw.githubusercontent.com/WellingtonMota/Project-Horoscope-RN/master/src/assets/images/signs/aquarius.jpg' },
            { key: 'E', image: 'https://raw.githubusercontent.com/WellingtonMota/Project-Horoscope-RN/master/src/assets/images/signs/aquarius.jpg' }
          ]}
          renderItem={({ item }) => 
            <View>
              <Text>{item.key}</Text>
              <Image
                source={{ uri: item.image }}
                style={styles.imageView}
              />
            </View>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageView: {
    width: 100,
    height: 100,
    margin: 7,
    borderRadius: 7
  }
});
