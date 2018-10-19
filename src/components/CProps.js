import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class CProps extends Component {
  render() {
    return (
      <View>
        <Text>1</Text>
        <Text>2</Text>
        <Text>{this.props.escolha}</Text>
      </View>
    );
  }
}
