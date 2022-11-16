import React from 'react';
import {Text, View} from 'react-native';
import {CalcButton} from '../components/CalcButton';
import {styles} from '../theme/appTheme';

export const CalculadoraScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.resultView}>0</Text>
      <Text style={styles.result}>0</Text>

      <View style={styles.row}>
        <CalcButton buttonText="C" color="#9B9B9B" />
        <CalcButton buttonText="+/-" color="#9B9B9B" />
        <CalcButton buttonText="del" color="#9B9B9B" />
        <CalcButton buttonText="/" color="#FF9427" />
      </View>

      <View style={styles.row}>
        <CalcButton buttonText="7" />
        <CalcButton buttonText="8" />
        <CalcButton buttonText="9" />
        <CalcButton buttonText="X" color="#FF9427" />
      </View>

      <View style={styles.row}>
        <CalcButton buttonText="4" />
        <CalcButton buttonText="5" />
        <CalcButton buttonText="6" />
        <CalcButton buttonText="-" color="#FF9427" />
      </View>

      <View style={styles.row}>
        <CalcButton buttonText="1" />
        <CalcButton buttonText="2" />
        <CalcButton buttonText="3" />
        <CalcButton buttonText="+" color="#FF9427" />
      </View>

      <View style={styles.row}>
        <CalcButton buttonText="0" longButton />
        <CalcButton buttonText="." />
        <CalcButton buttonText="=" color="#FF9427" />
      </View>
    </View>
  );
};
