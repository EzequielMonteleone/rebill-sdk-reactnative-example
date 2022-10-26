import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

const Main = ({navigation}) => {
  const handlePressWithInput = () => navigation.navigate('WithInput');
  const handlePressWithouInput = () => navigation.navigate('WithoutInput');
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePressWithInput} style={styles.withInput}>
        <Text style={styles.text}>With Input</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePressWithouInput}>
        <Text style={styles.text}>Without Input</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {marginHorizontal: 12, marginVertical: 16},
  withInput: {marginBottom: 10},
  text: {color: 'blue'},
});
