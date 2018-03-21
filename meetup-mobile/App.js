import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';

import axios from 'axios'
export default class App extends React.Component {
 
  state = {
    loading: false,
    meetups: []
  }


  async componentDidMount() {
    const data = await axios.get('http://10.1.6.50:4000/meetup/')
    .then(response => {
      const meetups = response.data
      this.setState({meetups})
      console.log('the state is  ',this.state);
    } )

  }

  render() {

    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large"/>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <Text>MeetUp Me !</Text>
        {this.state.meetups.map((meetup, i)=>{
          return <Text key={i}>{meetup.title} {meetup.description}</Text>
        
        
        })}</View>
    );
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
