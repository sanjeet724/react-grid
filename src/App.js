import React, { Component } from 'react';
import Grid from './components/grid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid
          rows={10}
          cols={10}
        />
      </div>
    );
  }
}

export default App;
