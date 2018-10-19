import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';

export default class CFlatList extends Component {
  render() {
    return (
      <FlatList
        numColumns={3}
        columnWrapperStyle={{ marginBottom: 10 }}
        data={[
          { key: 'A' },
          { key: 'B' },
          { key: 'C' },
          { key: 'D' },
          { key: 'E' }
        ]}
        renderItem={({ item }) => 
          <Text>{item.key}</Text>
        }
      />
    );
  }
}
