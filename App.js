/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import WithInput from './src/screens/WithInput';
import WithoutInput from './src/screens/WithoutInput';
import Main from './src/screens/Main';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={Main}
            options={{title: 'Main'}}
          />
          <Stack.Screen
            name="WithInput"
            component={WithInput}
            options={{title: 'With input'}}
          />
          <Stack.Screen
            name="WithoutInput"
            component={WithoutInput}
            options={{title: 'Without input'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  safeArea: {marginHorizontal: 12, marginVertical: 16, flex: 1},
});
