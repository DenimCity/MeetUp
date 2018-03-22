import React, {Component} from 'react'
import {StyleSheet, Text, View, ActivityIndicator, Button} from 'react-native';
import axios from 'axios'
import LoadingScreen from '../../common/LoadingScreen'

export default class HomeScreen extends React.Component {

  state = {
    loading: false,
    groups: [],
    meetups: []
  }

  async componentDidMount() {
    this.setState({loading: true})
    const data = await axios
      .get('http://10.1.6.50:4000/groups/')
      .then(response => {
        const groups = response.data
        console.log(groups);
        setTimeout(() => this.setState({loading: false, groups}), 2000)
      })
  }

  render() {
    if (this.state.loading) {
      return <LoadingScreen/>
    }
    return (
      <View style={styles.container}>
        <Text>
          hi from jean
        </Text>
        <Button
          // onPress={'wait'}
          title="Learn More"
          color="white"
          />

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
    backgroundColor: 'green'
  }
});
