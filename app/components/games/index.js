import React, {Fragment, Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';



class GamesComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>hello games</Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
});

//  
export default GamesComponent;
