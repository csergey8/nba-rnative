import React, {Fragment, Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';



class GameArticleComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>hello GAME article</Text>
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
export default GameArticleComponent;
 