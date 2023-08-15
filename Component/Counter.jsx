import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { counterBoxStyle, button, buttonStyle, valueStyle } from './styles';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counterValue: 0,
    };
  }

  setIncrement = () => {
    this.setState(
      prevState => ({
        counterValue: prevState.counterValue + 1,
      }),
      this.props.Increment
    );
  };

  setDecrement = () => {
    this.setState(
      prevState => ({
        counterValue: prevState.counterValue - 1,
      }),
      this.props.Decrement
    );
  };

  render() {
    const { counterValue } = this.state;
    const { counterName } = this.props;

    return (
        <View style={counterBoxStyle}>
        <Text style={{ marginBottom: 15, fontSize: 16, fontWeight: 'bold' }}>
          {counterName}
        </Text>
        <View style={button}>
          <TouchableOpacity style={buttonStyle} onPress={this.setDecrement}>
            <Text>-</Text>
          </TouchableOpacity>
          <Text style={valueStyle}>{counterValue}</Text>
          <TouchableOpacity style={buttonStyle} onPress={this.setIncrement}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Counter;
