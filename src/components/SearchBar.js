import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state= { value: ''}
  }
  onInputChange(value) {
    this.setState({value});
    this.props.onValueChange(value);
  }
  render () {
    return (
      <div className="search">
        <input onChange={event => this.onInputChange(event.target.value)}/>
      </div>
    )
  }
}

export default SearchBar;