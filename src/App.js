import React, { PureComponent } from 'react';
import Grid from './components/grid';
import InputArea from './components/inputArea';

class App extends PureComponent {
  // initial state
  state = {
    totalRows: 100,
    totalCols: 100
  }

  handleEnter = (rows, cols) => {
    this.setState({ totalRows: rows });
    this.setState({ totalCols: cols });
  }

  render() {
    const { totalRows, totalCols } = this.state;
    return (
      <div className="App">
        <h2>React Grid</h2>
        <InputArea
          initialRows={totalRows}
          initialCols={totalCols}
          handleEnter={this.handleEnter} />
        <Grid
          totalRows={totalRows}
          totalCols={totalCols}
        />
      </div>
    );
  }
}

export default App;
