import React, {Component} from 'react'
import {StyleSheet, Text, View, ActivityIndicator, Button} from 'react-native';
import axios from 'axios'
import LoadingScreen from '../../common/LoadingScreen'
import MeetupList from './MeetupList'
import {StackNavigator} from "react-navigation"
import navStyles from '../../common/navStyles'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Welcome To Meetup",
    ...navStyles
  }

  state = {
    loading: false,
    meetupGroups: [],
  }

  async componentDidMount() {
    this.setState({loading: true})
    const data = await axios
      .get('http://10.1.6.50:4000/groups/')
      .then(response => {
        const meetupGroups = response.data
        setTimeout(() => this.setState({loading: false, meetupGroups}), 900)
      })
  }

  render() {
    if (this.state.loading) {
      return <LoadingScreen/>
    }
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text>Home Screen</Text>
        </View>

        <View style={styles.bottomContainer}>
          <MeetupList GroupInfo={this.state.meetupGroups}/>
        </View>
        <Button
          stles={styles.button}
          onPress={() => 'dod thiscode'}
          title="Learn More"
          color="white"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#384259',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#4C99C6'
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'goldenrod',
    width: '100%'
  },
  bottomContainer: {
    flex: 0.8,
    backgroundColor: 'red',
    width: '100%'
  }
});

export default StackNavigator({
  Home: {
    screen: HomeScreen
  }
})