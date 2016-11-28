import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  handleValueChange(value) {
    console.log("value ", value);
  }
  render() {
    return (
      <div>
        <SearchBar onValueChange={this.handleValueChange}/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));

