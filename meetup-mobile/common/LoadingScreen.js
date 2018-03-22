import React from 'react'
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';



const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator 
      size="large"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#384259',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
export default LoadingScreen;