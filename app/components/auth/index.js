import React, {Fragment, Component} from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';



class AuthComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>hello auth</Text>
        
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
export default AuthComponent;
