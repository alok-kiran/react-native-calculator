import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import Button from './components/Button';

const initalState = {
  currentValue: '0',
  operator: null,
  previousValue: null,
};

function App(): JSX.Element {
  const [state, setState] = useState(initalState);

  const handleOperator = (operator: any) => {
    setState({
      ...state,
      operator,
      previousValue: state.currentValue,
      currentValue: '0',
    });
  };

  const handleNumber = (number: any) => {
    let {currentValue} = state;

    if (currentValue === '0') {
      currentValue = number;
    } else {
      currentValue += number;
    }
    setState({...state, currentValue});
  };

  const handleEqual = () => {
    const {currentValue, previousValue, operator} = state || {};
    const current = currentValue && parseFloat(currentValue);
    const previous = previousValue && parseFloat(previousValue);
    const resetState = {
      operator: null,
      previousValue: null,
    };

    if (!operator || !current || !previous) {
      return;
    }

    switch (operator) {
      case '÷':
        setState({
          currentValue: String(previous / current),
          ...resetState,
        });
        return;
      case 'x':
        setState({
          currentValue: String(previous * current),
          ...resetState,
        });
        return;
      case '+':
        setState({
          currentValue: String(previous + current),
          ...resetState,
        });
        return;
      case '-':
        setState({
          currentValue: String(previous - current),
          ...resetState,
        });
        return;
      default:
        return;
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <Text style={styles.text}>{state.currentValue}</Text>
      </ScrollView>
      <View style={styles.calculator}>
        <View>
          <View style={styles.row}>
            <Button
              onPress={() => handleOperator('AC')}
              title="AC"
              backgroundColor={'#D4D4D2'}
              textColor={'#1C1C1C'}
            />
            <Button
              onPress={() => {
                setState({
                  currentValue: `${parseFloat(state.currentValue) * -1}`,
                  operator: null,
                  previousValue: null,
                });
              }}
              title="+/-"
              backgroundColor={'#D4D4D2'}
              textColor={'#1C1C1C'}
            />
            <Button
              onPress={() => {
                setState({
                  currentValue: `${parseFloat(state.currentValue) * 0.01}`,
                  operator: null,
                  previousValue: null,
                });
              }}
              title="%"
              backgroundColor={'#D4D4D2'}
              textColor={'#1C1C1C'}
            />
            <Button
              onPress={() => handleOperator('÷')}
              title="÷"
              backgroundColor={'#FF9500'}
            />
          </View>
          <View style={styles.row}>
            <Button onPress={() => handleNumber('7')} title="7" />
            <Button onPress={() => handleNumber('8')} title="8" />
            <Button onPress={() => handleNumber('9')} title="9" />
            <Button
              onPress={() => handleOperator('x')}
              title="x"
              backgroundColor={'#FF9500'}
            />
          </View>
          <View style={styles.row}>
            <Button onPress={() => handleNumber('4')} title="4" />
            <Button onPress={() => handleNumber('5')} title="5" />
            <Button onPress={() => handleNumber('6')} title="6" />
            <Button
              onPress={() => handleOperator('-')}
              title="-"
              backgroundColor={'#FF9500'}
            />
          </View>
          <View style={styles.row}>
            <Button onPress={() => handleNumber('1')} title="1" />
            <Button onPress={() => handleNumber('2')} title="2" />
            <Button onPress={() => handleNumber('3')} title="3" />
            <Button
              onPress={() => handleOperator('+')}
              title="+"
              backgroundColor={'#FF9500'}
            />
          </View>
          <View style={styles.row}>
            <Button onPress={() => handleNumber('0')} title="0" />
            <Button onPress={() => handleNumber('.')} title="." />
            <Button
              onPress={() => handleEqual()}
              title="="
              backgroundColor={'#FF9500'}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    paddingHorizontal: 16,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 48,
    fontWeight: '300',
    color: 'white',
  },
  calculator: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default App;
