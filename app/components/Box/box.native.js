import React from 'react';
import {Text, View ,StyleSheet} from 'react-native';
import { colors } from '../../../assets/variable';
const Box = ({children,flex=1,justify,bgColor,padding})=> {

    const styles = StyleSheet.create({
        daynamicCss: {
            backgroundColor: bgColor ? colors[bgColor]:'#fff',
            justifyContent: justify ? justify :'center',
            padding: padding?padding:5,
            height:50
        }
       
   });
   
    return (
        <View style={styles.daynamicCss}>
           {children}
        </View>
    )
}

export default Box;
