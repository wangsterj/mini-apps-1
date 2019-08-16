import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      board: [],
      // player true = player 1, false = 2
      player: true,
      win: false
    }
  }

  onClick(event) {
    if (this.state.win) {
      return;
    }
    var id = event.target.id;
    var col = id%10;
    var player = '';
    var marker = 0;

    // checks which player's turn
    if (this.state.player) {
      player = 'playerUno';
      marker = 1;
    } else {
      player = 'playerDos';
      marker = -1;
    }

    // adds player's piece to the board
    for (var role = 5; role >=0;role --) {
      if (this.state.board[role][col] === 0) {
        this.state.board[role][col] = marker;
        document.getElementById(role.toString()+col.toString()).classList.add(player);
        break;
      }
    }

    // Check if winning move
    if (this.checkWin(role,col)) {
      document.getElementById('win').innerHTML=player+ " wins!";
      this.state.win = true;
      this.post();
    }

    this.state.player = !this.state.player;
  }

  post() {
    axios.post('http://localhost:3000/post', this.state.board)
    .then(function (response) {
      console.log("Posted board!");
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  get() {
    axios.get('http://localhost:3000/get', {
      params: {
        ID: 123,
      }
    })
    .then(function (response) {
      var board = JSON.parse(response.data[0].board);
      this.state.board = board;
      console.log(JSON.parse(response.data[0].board));
    })
    .catch(function (error) {
      console.log(error);
    });
  }
 
  checkWin(Row,Col) {
    var result = false;

    // check for horizontal win
    for (var col = 0; col < 4; col++) {
      var sum = this.state.board[Row][col] + this.state.board[Row][col+1] + this.state.board[Row][col+2] + this.state.board[Row][col+3];
      if (sum === 4 || sum === -4) {
        result = true;
      }
    }

    // Check for vertical win
    for (var row = 0; row < 3; row++) {
      var sum = this.state.board[row][Col] + this.state.board[row+1][Col] + this.state.board[row+2][Col] + this.state.board[row+3][Col];
      if (sum === 4 || sum === -4) {
        result = true;
      }
    }

    // Check for major
    var startRow = 0;
    var startCol = Col - Row;
    for (var iRow = startRow; iRow < 3; iRow++) {
      var jCol = startCol + iRow;
      if (jCol >=0 && jCol <= 6) {
        var board = this.state.board;
        var sum = board[iRow][jCol]+board[iRow+1][jCol+1]+board[iRow+2][jCol+2]+board[iRow+3][jCol+3];
        if (sum === 4 || sum === -4) {
          result = true;
        }
      }
    }

    // Check for minor
    var startRow = 0;
    var startCol = Col - Row;
    for (var iRow = startRow; iRow < 3; iRow++) {
      var jCol = startCol + iRow;
      if (jCol >=0 && jCol <= 6) {
        var board = this.state.board;
        var sum = board[iRow][jCol]+board[iRow+1][jCol-1]+board[iRow+2][jCol-2]+board[iRow+3][jCol-3];
        if (sum === 4 || sum === -4) {
          result = true;
        }
      }
    }
    return result;
  }

  makeBoard() {
    var DOMboard = [];
    var cell = [];
    for (var row = 0; row < 6; row++) {
      this.state.board[row] = [];
      var cell = [];
      for (var col = 0; col < 7; col++) {
        this.state.board[row][col] = 0;
        var id = row.toString() + col.toString();
        cell.push(<td key = {id} id = {id} onClick={(event) => this.onClick.bind(this)(event)}></td>)
      }
      DOMboard.push(<tr key ={id} id = {row}>{cell}</tr>);
    }
    return DOMboard;
  }

  componentDidMount() {
    // this.get();
  }

  rerender() {

  }

  reset() {
    var DOMboard = [];
    var cell = [];
    for (var row = 0; row < 6; row++) {
      this.state.board[row] = [];
      var cell = [];
      for (var col = 0; col < 7; col++) {
        this.state.board[row][col] = 0;
        var id = row.toString() + col.toString();
        cell.push(<td key = {id} id = {id} onClick={(event) => this.onClick.bind(this)(event)}></td>)
      }
      DOMboard.push(<tr key ={id} id = {row}>{cell}</tr>);
    }
    return DOMboard;
  }

  render() {
    return (
      <div>
        <table id = 'table'>
          {this.makeBoard.bind(this)()}
        </table>
          <button onClick = {this.post.bind(this)}>POST</button>
          <button onClick = {this.get.bind(this)}>GET</button>
          <button onClick = {this.reset.bind(this)}>RESET</button>
      </div>
    );
  }
}

function Board(props) {
  var board = props.board;
  var DOMboard = [];
  var cell = [];
  for (var row = 0; row < 6; row++) {
    var cell = [];
    for (var col = 0; col < 7; col++) {
      this.state.board[row][col] = 0;
      var id = row.toString() + col.toString();
      cell.push(<td key = {id} id = {id} onClick={(event) => this.onClick.bind(this)(event)}></td>)
    }
    DOMboard.push(<tr key ={id} id = {row}>{cell}</tr>);
  }
  return (
      <div>
        {DOMboard}
      </div>
    );
};


export default App;