import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

const CustomText = (props) => {
    return(
        <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 40, color: '#343635'}}>{props.number}</Text>
        </View>
    )
}

class CustomButton extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        number: this.props.number
    }
    render() {
        const {handleButtonPress} = this.props
        return (
        <View style={{flex: 1}}>
            <TouchableOpacity
                onPress={() => handleButtonPress(this.state.number)}
                activeOpacity={0.2}
                style={{
                    backgroundColor: `${this.props.color}`,
                    flex: 1,
                    alignItems: 'center', justifyContent: 'center'
                }}>
            <CustomText number={this.props.number}/>
            </TouchableOpacity>
        </View>
        );
    }
}


const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 100,
    //backgroundColor: 'red',
  },
});

export default CustomButton;
