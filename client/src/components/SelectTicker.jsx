import React, { Component } from 'react'
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

class SelectTicker extends React.Component {
  constructor(){
    super();
      state = {
        selectedOption: null,
      };
}

  handleChange(selectedOption){
    this.setState({
      selectedOption
    });
    console.log(`Option selected:`, selectedOption);
  };

  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}

export default SelectTicker;