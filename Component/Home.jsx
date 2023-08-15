import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Counter from './Counter';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
    };
  }

  updateTotal = (changeAmount) => {
    this.setState(prevState => ({
      total: prevState.total + changeAmount,
    }));
  };

  render() {
    const { total } = this.state;

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Counter counterName="Counter 1" Decrement={() => this.updateTotal(-1)} 
          Increment={() => this.updateTotal(1)}
        />
        <Counter counterName="Counter 2" Decrement={() => this.updateTotal(-1)}
          Increment={() => this.updateTotal(1)}
        />
        <Counter counterName="Counter 3" Decrement={() => this.updateTotal(-1)}
          Increment={() => this.updateTotal(1)}
        />
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
            Total: {total}
          </Text>
        </View>
      </View>
    );
  }
}

export default Home;
