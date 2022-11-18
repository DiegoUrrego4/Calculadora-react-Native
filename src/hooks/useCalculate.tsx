import {useRef, useState} from 'react';

enum Operators {
  add,
  subtract,
  multiply,
  divide,
}

export const useCalculate = () => {
  const [inOperation, setInOperation] = useState('0');
  const [result, setResult] = useState('0');

  const operationToDo = useRef<Operators>();

  const cleanScreen = () => {
    setResult('0');
    setInOperation('0');
  };

  const changeSign = () => {
    if (result.includes('-')) {
      setResult(result.replace('-', ''));
    } else {
      setResult('-' + result);
    }
  };

  const btnDel = () => {
    let negativo = '';
    let temp = result;
    if (result.includes('-')) {
      negativo = '-';
      temp = result.substring(1);
    }
    if (temp.length > 1) {
      setResult(negativo + temp.slice(0, -1));
    } else {
      setResult('0');
    }
  };

  const validateAndAssignNumber = (typedNumber: string) => {
    if (result.includes('.') && typedNumber === '.') {
      return;
    }

    if (result.startsWith('0') || result.startsWith('-0')) {
      if (typedNumber === '.') {
        setResult(result + typedNumber);
      } else if (typedNumber === '0' && result.includes('.')) {
        setResult(result + typedNumber);
      } else if (typedNumber !== '0' && !result.includes('.')) {
        setResult(typedNumber);
      } else if (typedNumber === '0' && !result.includes('.')) {
        setResult('0');
      } else {
        setResult(result + typedNumber);
      }
    } else {
      setResult(result + typedNumber);
    }
  };

  const saveTypedValue = () => {
    if (result.endsWith('.')) {
      setInOperation(result.slice(0, -1));
    } else {
      setInOperation(result);
    }
    setResult('0');
  };

  // Operations buttons funcionality
  const btnDivide = () => {
    saveTypedValue();
    operationToDo.current = Operators.divide;
  };
  const btnMultiply = () => {
    saveTypedValue();
    operationToDo.current = Operators.multiply;
  };
  const btnSubtract = () => {
    saveTypedValue();
    operationToDo.current = Operators.subtract;
  };
  const btnAdd = () => {
    saveTypedValue();
    operationToDo.current = Operators.add;
  };

  const calculateResult = () => {
    const number1 = Number(result);
    const number2 = Number(inOperation);

    switch (operationToDo.current) {
      case Operators.add:
        setResult(`${number1 + number2}`);
        break;
      case Operators.subtract:
        setResult(`${number2 - number1}`);
        break;
      case Operators.multiply:
        setResult(`${number1 * number2}`);
        break;
      case Operators.divide:
        setResult(`${number2 / number1}`);
        break;
    }
    setInOperation('0');
  };

  return {
    numero: result,
    numeroAnterior: inOperation,
    cleanScreen,
    armarNumero: validateAndAssignNumber,
    positivoNegativo: changeSign,
    btnDelete: btnDel,
    btnSumar: btnAdd,
    btnRestar: btnSubtract,
    btnMultiplicar: btnMultiply,
    btnDividir: btnDivide,
    calcular: calculateResult,
  };
};
