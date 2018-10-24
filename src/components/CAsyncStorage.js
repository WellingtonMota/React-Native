import React, { Component } from 'react';
import { AsyncStorage, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default class CAsyncStorage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myKey: null
    };
  }

  async getKey() {
    try {
      const value = await AsyncStorage.getItem('@test');
      this.setState({ myKey: value });
    } catch (error) {
      alert(`Error retrieving data${error}`);
    }
  }

  async saveKey() {
    const json = {
      1: 'teste 1',
      2: 'teste 2',
      3: 'teste 3'
    };

    try {
      await AsyncStorage.setItem('@test', JSON.stringify(json));
    } catch (error) {
      alert(`Error saving data${error}`);
    }
  }

  async resetKey() {
    try {
      await AsyncStorage.removeItem('@test');
      const value = await AsyncStorage.getItem('@test');
      this.setState({ myKey: value });
    } catch (error) {
      alert(`Error resetting data${error}`);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Demo AsyncStorage!
        </Text>

        <Button
          style={styles.formButton}
          onPress={this.saveKey.bind(this)}
          title="Save Key"
          color="#DCFDCF"
          accessibilityLabel="Save Key"
        />

        <Button
          style={styles.formButton}
          onPress={this.getKey.bind(this)}
          title="Get Key"
          color="#2196f3"
          accessibilityLabel="Get Key"
        />

        <Button
          style={styles.formButton}
          onPress={this.resetKey.bind(this)}
          title="Reset"
          color="#f44336"
          accessibilityLabel="Reset"
        />

        <Text style={styles.instructions}>
          Stored key is = {this.state.myKey}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  formInput: {
    paddingLeft: 5,
    height: 50,
    borderWidth: 1,
    borderColor: '#555555',
  },
  formButton: {
    borderWidth: 1,
    borderColor: '#555555',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    marginTop: 5,
  },
});
