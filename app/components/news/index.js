import React, {Fragment, Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';



class NewsComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>hello news</Text>
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
export default NewsComponent;
