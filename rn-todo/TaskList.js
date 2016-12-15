import React from 'react';

import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
    },
});

class TaskList extends React.Component {
  render() {
      return (
        <View style={styles.container}>
          <Text>Hi, this is the TaskList </Text>
        </View>
    );
  }
}

export default TaskList;
