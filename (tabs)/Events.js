import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const EventsScreen = ({ token }) => {
  return (
    <View style={styles.container}>
      <Calendar
          style={{height:550, width: 380, 
            borderRadius: 50,
            marginBottom: 40,

        }}
          theme={{
            backgroundColor: 'white',
            calendarBackground: 'white',
            selectedDayBackgroundColor: 'red',
            backgroundColor: "red",
            selectedDayTextColor: '#545F71',
            todayTextColor: 'blue',
            dayTextColor: 'black',
            arrowColor: 'blue',

          }}
          markedDates={{
            '2023-09-15': {
              marked: true,
              customStyles: {
                container: {
                  backgroundColor: 'blue',
                  borderRadius: 5,
                },
                text: {
                  color: 'white',
                },
              },
              renderCustomText: (event) => {
                return 'Événement spécial';
              },
            },
          }}
          renderHeader={(date) => {
            return (
              <View>
                <Text style={{ fontSize: 20 }}>{date.toString('MMMM yyyy')}</Text>
              </View>
            );
          }}
          renderArrow={(direction) => {
            return (
              <View>
                <Text style={{ fontSize: 20 }}>{direction === 'left' ? '<' : '>'}</Text>
              </View>
            );
          }}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EventsScreen;
