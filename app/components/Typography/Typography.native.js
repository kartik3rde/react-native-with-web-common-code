import React from 'react';
import {  Text, StyleSheet } from 'react-native';
import { colors, fontSize } from '../../../assets/variable'
const Typography = ({ text, type, textColor, size }) => {
    const styles = StyleSheet.create({
        textCss: {
            fontSize: size ? size : fontSize[type],
            color: textColor ? colors[textColor] : colors.dark,
        }
    });
    return (

        <Text style={styles.textCss}>{text}</Text>
    )
}

export default Typography;
