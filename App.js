
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const App = () => {
  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <View>
        <Text style={styles.headingStyle}>GAMEON</Text>
      </View>
      <TouchableOpacity>
        <Text>Let's Begin</Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color="#000"/>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headingStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#20315f'
  },
  normalText: {
    fontSize: 18,
    color: '#fff',
  },
  buttonStyle: {
    backgroundColor: '#AD40AF',
    padding: 20,
    width: '90%',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

