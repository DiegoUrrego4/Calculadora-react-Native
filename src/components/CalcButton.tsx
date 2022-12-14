import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
  buttonText: string;
  color?: string;
  longButton?: boolean;
  action: (textNumber: string) => void;
}

export const CalcButton = ({
  buttonText,
  color = '#2D2D2D',
  longButton = false,
  action,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => action(buttonText)}>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          ...styles.button,
          backgroundColor: color,
          width: longButton ? 180 : 80,
        }}>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            ...styles.buttonText,
            color: color === '#9B9B9B' ? 'black' : 'white',
          }}>
          {buttonText}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
