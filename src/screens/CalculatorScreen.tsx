import React from 'react';
import {Text, View} from 'react-native';
import {CalcButton} from '../components/CalcButton';
import {styles} from '../theme/appTheme';
import {useCalculate} from '../hooks/useCalculate';

export const CalculatorScreen = () => {
  const {
    armarNumero,
    btnDelete,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
    cleanScreen,
    numero,
    numeroAnterior,
    positivoNegativo,
  } = useCalculate();
  return (
    <View style={styles.calculatorContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.operations}>{numeroAnterior}</Text>
      )}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>

      <View style={styles.row}>
        <CalcButton buttonText="C" color="#9F9F9F" action={cleanScreen} />
        <CalcButton
          buttonText="+/-"
          color="#9F9F9F"
          action={positivoNegativo}
        />
        <CalcButton buttonText="del" color="#9F9F9F" action={btnDelete} />
        <CalcButton buttonText="/" color="#349838" action={btnDividir} />
      </View>

      <View style={styles.row}>
        <CalcButton buttonText="7" action={armarNumero} />
        <CalcButton buttonText="8" action={armarNumero} />
        <CalcButton buttonText="9" action={armarNumero} />
        <CalcButton buttonText="X" color="#349838" action={btnMultiplicar} />
      </View>

      <View style={styles.row}>
        <CalcButton buttonText="4" action={armarNumero} />
        <CalcButton buttonText="5" action={armarNumero} />
        <CalcButton buttonText="6" action={armarNumero} />
        <CalcButton buttonText="-" color="#349838" action={btnRestar} />
      </View>

      <View style={styles.row}>
        <CalcButton buttonText="1" action={armarNumero} />
        <CalcButton buttonText="2" action={armarNumero} />
        <CalcButton buttonText="3" action={armarNumero} />
        <CalcButton buttonText="+" color="#349838" action={btnSumar} />
      </View>

      <View style={styles.row}>
        <CalcButton buttonText="0" action={armarNumero} longButton />
        <CalcButton buttonText="." action={armarNumero} />
        <CalcButton buttonText="=" color="#349838" action={calcular} />
      </View>
    </View>
  );
};
