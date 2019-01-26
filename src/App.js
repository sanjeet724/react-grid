import React, { Component } from 'react';
import Grid from './components/grid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid
          rows={100}
          cols={100}
        />
      </div>
    );
  }
}

export default App;
