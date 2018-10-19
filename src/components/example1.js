import React, { Component } from 'react';
import { Text, View } from 'react-native';

class CompExample1 extends Component {
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

export default CompExample1;
