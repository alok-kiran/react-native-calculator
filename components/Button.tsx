import React from 'react';
import {TouchableOpacity, Text, Dimensions, StyleSheet} from 'react-native';

interface ButtonProps {
  onPress: () => void;
  title: string;
  backgroundColor?: string;
  textColor?: string;
}

const Button = ({onPress, title, backgroundColor, textColor}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        title === '0' && styles.buttonDouble,
        {
          backgroundColor: backgroundColor ?? '#333333',
        },
      ]}>
      <Text style={[styles.text, {color: textColor ?? 'white'}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontWeight: '500',
    fontSize: 36,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    margin: 5,
    height: Dimensions.get('window').width / 4 - 10,
  },
  buttonDouble: {
    width: (Dimensions.get('window').width / 4) * 2 - 10,
    flex: 0,
    alignItems: 'flex-start',
    paddingLeft: 32,
  },
});

export default Button;
