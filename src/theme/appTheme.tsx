import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  backgroundCalculator: {
    flex: 1,
    backgroundColor: 'black',
  },
  calculatorContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  operations: {
    color: '#9F9F9F',
    fontSize: 30,
    textAlign: 'right',
  },
  result: {
    color: '#349838',
    fontSize: 60,
    textAlign: 'right',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  button: {
    height: 80,
    width: 80,
    borderRadius: 30,
    backgroundColor: '#2D2D2D',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
});
