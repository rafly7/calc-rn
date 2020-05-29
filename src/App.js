import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import CustomTextInput from '../src/components/text_input';
import CustomButton from '../src/components/custom_button';

function cekDoubleOperator(arrStr, len, str) { // cek jika double operator maka tidak diinput
  if (arrStr[len - 2] === '+') {
    return arrStr.slice(0, len - 1).join('')
  } else if (arrStr[len - 2] === '-') {
    return arrStr.slice(0, len - 1).join('')
  } else if (arrStr[len - 2] === '*') {
    return arrStr.slice(0, len - 1).join('')
  } else if (arrStr[len - 2] === '/') {
    return arrStr.slice(0, len - 1).join('')
  } else {
    return str
  }
}

function allSameOperator(arrs, operator) {
  let num = 0
  let num1 = 1
  console.log(arrs)
  for (let arr of arrs) {
    if (operator === '+') {
      num += parseInt(arr)
    } else if (operator === '-') {
      num -= parseInt(arr)
      // console.log(num)
    } else if (operator === '*') {
      num1 *= parseInt(arr)
    } else if (operator === '/') {
      num /= parseInt(arr)
    } 
  }
  console.log(num1)
}

function computeEqual(equal) {
  let arrStr = equal.split('')
  console.log(equal.split('+'))
  return 'benar'
}

function compute(operator) {
  let checks = operator.split('')
  let len = checks.length
  if (checks[0] === '0' || checks[0] === '00') {// cek angka 0
    if (checks[1] === '.') {// cek . untuk melanjutkan desimal
      return operator
    } else {
      if ( // cek jika input angka pertama 0 lalu angka kedua yaitu 1-9 angka akan diganti menjadi angka 1-9
        checks[1] === '1' ||
        checks[1] === '2' ||
        checks[1] === '3' ||
        checks[1] === '4' ||
        checks[1] === '5' ||
        checks[1] === '6' ||
        checks[1] === '7' ||
        checks[1] === '8' ||
        checks[1] === '9') {
          return checks[1]
      } else { // cek jika input angka pertama 0 lalu input kedua dan seterusnya adalah 0 maka angka tetap 0
        return '0'
      }
    }
  } else if ( // cek jika angka pertama adalah angka 1-9 maka angka adalah angka yg di input tersebut
    checks[0] === '1' ||
    checks[0] === '2' ||
    checks[0] === '3' ||
    checks[0] === '4' ||
    checks[0] === '5' ||
    checks[0] === '6' ||
    checks[0] === '7' ||
    checks[0] === '8' ||
    checks[0] === '9') {
      if (checks.includes('±')) { // cek jika min plus diaktifkan
        checks[1] = checks[0]
        checks[0] = '-'
        return checks.join('')
      } else { // cek jika min plus tidak diaktifkan
        // console.log(checks)
        if (checks.includes('=')) { // cek jika berisi sama dengan
          return operator
        } else {
          // cekDoubleOperator(arrStr, len, str)
          if (checks[len - 1] === '+') { // cek double operator
            return cekDoubleOperator(checks, len, operator)
          } else if (checks[len - 1] === '-') {
            return cekDoubleOperator(checks, len, operator)
          } else if (checks[len - 1] === '*') {
            return cekDoubleOperator(checks, len, operator)
          } else if (checks[len - 1] === '/') {
            return cekDoubleOperator(checks, len, operator)
          } else { // cek jika bukan operator maka lanjut
            return operator
          }
        }
      }
  } else { // cek jika bukan angka maka hasilnya string kosong
    return ''
  }
}

class MyApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numberInput: '0',
      equal: '0'
    }
    this.handleButtonPress = this.handleButtonPress.bind(this)
  }

  handleButtonPress(button) {
    let { numberInput } = this.state;
    switch (button) {
      case '00':
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '+':
      case '-':
      case '*':
      case '/':
      case '±':
      case '.':
        this.setState({
          numberInput: compute(numberInput += button)//numberInput += button
        })
        // console.log(this)
        break;
      case '=':
        this.setState({
          equal: computeEqual(this.state.numberInput)
        })
        //computeEqual(this.state.numberInput)
        break;
      case 'C':
        this.setState({
          numberInput: '0'
        })
        break;
      case '<':
        let num
        if (numberInput.split('').slice(0, numberInput.split('').length - 1).join('') == '') {
          num = "0"
        } else {
          num = numberInput.split('').slice(0, numberInput.split('').length - 1).join('')
        }
        this.setState({
          numberInput: num
        })
    }
  }
  
  render() {
    const { numberInput, equal } = this.state
    // console.log(equal+'++++++')
    compute(numberInput)
    // console.log(this.state.numberInput)
    return (
      <View style={styles.container}>
        <LinearGradient
          start={{x: 1.5, y: 0.9}}
          end={{x: 0.5, y: 1.3}}
          // locations={[0,0.2,0.6]}
          locations={[0.1, 0.7]}
          // colors={['#7bed9f','#70a1ff']}
          colors={['#70a1ff', '#7bed9f']}
          style={styles.linearGradient}>
          <CustomTextInput numberInput={numberInput} equal={equal}/>
          <View style={styles.buttonContainer}>
            <CustomButton number="C" color="transparent" handleButtonPress={this.handleButtonPress}/>
            <CustomButton number="±" color="transparent" handleButtonPress={this.handleButtonPress}/>
            <CustomButton number="=" color="transparent" handleButtonPress={this.handleButtonPress}/>
            <CustomButton number="<" color="transparent" handleButtonPress={this.handleButtonPress}/>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton number="1" color="transparent" handleButtonPress={this.handleButtonPress}/>
            <CustomButton number="2" color="transparent" handleButtonPress={this.handleButtonPress}/>
            <CustomButton number="3" color="transparent" handleButtonPress={this.handleButtonPress}/>
            <CustomButton number="+" color="transparent" handleButtonPress={this.handleButtonPress}/>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton number="4" color="transparent" handleButtonPress={this.handleButtonPress}/>
            <CustomButton number="5" color="transparent" handleButtonPress={this.handleButtonPress}/>
            <CustomButton number="6" color="transparent" handleButtonPress={this.handleButtonPress}/>
            <CustomButton number="-" color="transparent" handleButtonPress={this.handleButtonPress}/>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton number="7" color="transparent" handleButtonPress={this.handleButtonPress}/>
            <CustomButton number="8" color="transparent" handleButtonPress={this.handleButtonPress}/>
            <CustomButton number="9" color="transparent" handleButtonPress={this.handleButtonPress}/>
            <CustomButton number="*" color="transparent" handleButtonPress={this.handleButtonPress}/>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton number="0" color="transparent" handleButtonPress={this.handleButtonPress}/>
            <CustomButton number="00" color="transparent" handleButtonPress={this.handleButtonPress}/>
            <CustomButton number="." color="transparent1" handleButtonPress={this.handleButtonPress}/>
            <CustomButton number="/" color="transparent" handleButtonPress={this.handleButtonPress}/>
          </View>
        </LinearGradient>
      </View>
    );
  }
}
const widthScreen = Math.round(Dimensions.get('screen').width)
const heightScreen = Math.round(Dimensions.get('screen').height)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 100,
    //backgroundColor: 'red',
  },
  button: {},
});

export default MyApp;
