import React, {Component} from 'react'
import {StyleSheet, Text, View, ScrollView} from 'react-native';

const MeetupList = ({GroupInfo}) => {
  // console.clear()

  return (
    <View style={styles.listContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>My MeetUp Groups</Text>
      </View>
      <View style={styles.contentContainer}>
        <ScrollView horizontal>
          {GroupInfo.map((group, i) => (
            <View key={i} style={styles.meetupCard}>

              <View style={styles.meetupCardTopContainer}>
                <Text>{group.name}</Text>
              </View>

              <View style={styles.meetupCardBottomContainer}>
                <Text style={styles.meetupCardName}>
                  {group
                    .meetups
                    .map((meetup, i) => (
                      <Text key={i}>{meetup.title}</Text>
                    ))}

                </Text>
                <Text style={styles.meetupCardDate}>
                  March 2m 6:00pm
                </Text>
              </View>

            </View>

          ))}

        </ScrollView>
      </View>
    </View>
  );
};

export default MeetupList;

const styles = StyleSheet.create({
  listContainer: {},
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {},
  contentContainer: {},
  meetupCard: {
    height: 200,
    width:175,
    marginHorizontal: '1.5%',
    backgroundColor: '#f73859'
  },
 
})