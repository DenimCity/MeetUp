import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
// import {fetchMeetups} from './constants/api.js'
import axios from 'axios'
export default class App extends React.Component {
 
  state = {
      // loading: false,
      meetups:[]
    }
  
    getMeetups = async () => {
     await axios('http://192.168.1.76:4000/meetup/')
      .then(response => {
        const meetups = response.data
        // console.log('meetup data',meetups);
        this.setState({ meetups})
      })
    }
   


    async componentDidMount() {
     await this.getMeetups()
    }

 
  render() {
   const meetups = this.state.meetups.map((meetup, i)=>{
     
   })
    console.log('state', this.state)
    return (
      <View style={styles.container}>
        <Text>MeetUp Me !</Text>
        {this.state.meetups.map((meetup, i)=>{
          <Text key={i}>{meetup.title}</Text>
        })}
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
