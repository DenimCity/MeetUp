import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet'
import HomeScreen from './src/screens/HomeScreen'
export default class App extends React.Component {
 
 




  render() {

return(
  <HomeScreen />
)
    // if (this.state.loading) {
    //   return (
    //     <View style={styles.container}>
    //       <ActivityIndicator size="large"/>
    //     </View>
    //   )
    // }
    // return (
    //   <View style={styles.container}>
    //     <Text>MeetUp Me !</Text>
    //     {this.state.groups.map((group, i)=>{
    //       return <Text key={i}>{group.title} {group.description}</Text>
        
        
    //     })}
    //     </View>
    // );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
