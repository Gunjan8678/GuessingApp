import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Inputs = props => {
  return <TextInput {...props} style={{...styles.input, ...props.style}} />;
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10,
    textDecorationLine: 'none',
  },
});

export default Inputs;
