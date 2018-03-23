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
              <View></View>

              <View style={styles.meetupCardBottomContainer}>
                <Text>
                  {group.name}
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
  listContainer: {
   
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    
    
  },
  contentContainer: {},
  meetupCard: {}
})