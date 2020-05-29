import React, {useState, Component} from 'react';
import {Text, View, Dimensions} from 'react-native';

const CustomTextInput = (props) => {
  const screenWidth = Math.round(Dimensions.get('screen').width);
  const { numberInput, equal } = props 
  return (
    <View
      style={{
        backgroundColor: '#86eaf0',
        flex: 2,
        width: screenWidth,
        flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center'
      }}>
      {/* <TextInput
                style={{flex: 1, fontSize: 30, justifyContent: 'center'}}
                placeholder='Input Number'
                onChangeText={text => setText(text)}
                defaultValue={text}
            /> */}
      <View style={{width: screenWidth, flex: 2, backgroundColor: '#a6ecff', flexDirection: 'column-reverse', alignItems: 'flex-end', justifyContent: 'center', paddingRight: 10}}>
        <Text style={{fontSize: 70}}>{equal}</Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end', paddingRight: 10}}>
        <Text style={{fontSize: 30}}>{numberInput}</Text>
      </View>
    </View>
  );
};
export default CustomTextInput;
