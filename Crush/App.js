import React from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';
import Matches from './component/Matches';



export default class App extends React.Component {
  constructor(props){
    super(props);
   
  }
  render() {
    return (
      <View style={styles.container}>
          <Matches/>
          
          
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
