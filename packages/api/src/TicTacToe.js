module.exports = class TicTacToe {
  constructor(fields = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]) {
    this.fields = fields;
    this.lastTurn = this.lastTurn;
  }

  victory() {
    let vic = null;
    this.fields.forEach((arr) => {
      let vicTmpX = true;
      let vicTmpO = true;
      arr.forEach((val) => {
        if (val !== 'X') {
          vicTmpX = false;
        }
        if (val !== '0') {
          vicTmpO = false;
        }
      });
      if (vicTmpX) {
        vic = 'X';
      }
      if (vicTmpO) {
        vic = '0';
      }
    });

    this.fields[0].forEach((v, index) => {
      if (this.fields[0][index] !== null
        && this.fields[0][index] === this.fields[1][index]
        && this.fields[1][index] === this.fields[2][index]) {
        vic = this.fields[0][index];
      }
    });

    if (this.fields[0][0] !== null
      && this.fields[0][0] === this.fields[1][1]
      && this.fields[1][1] === this.fields[2][2]) {
      return this.fields[1][1];
    }

    if (this.fields[0][2] !== null
      && this.fields[0][2] === this.fields[1][1]
      && this.fields[1][1] === this.fields[2][0]) {
      return this.fields[1][1];
    }

    return vic;
  }

tie() {
  let ties = null;
  this.fields.forEach((v, index) => {
    if (this.fields[0][index] !==  null
      && this.fields[1][index] !==  null
      && this.fields[2][index] !==  null)
      {
        ties = "You ended the game with a tie";
      }
  });
  return ties;

}



  makeTurn(x, y, type) {
    if (x < 0 || x > 2 || y < 0 || y > 2) {
      throw Error('not a valid coordinate');
    }

    // eslint-disable-next-line no-restricted-globals
    if (isNaN(x) || isNaN(y)) {
      throw Error('bad input');
    }

    if (parseInt(x, 10) !== x && parseInt(y, 10) !== y) {
      throw Error('bad input number (int only)');
    }

    if (type !== 'X' && type !== 'O') {
      throw Error('bad type');
    }

    if (this.fields[+x][+y] !== null) {
      throw Error('spot already used');
    }

    if(this.lastTurn === type){
      throw Error('HOld the fuck up, its not ur turn nigga');
    }


    this.fields[+x][+y] = type;
    this.lastTurn = type;
  }

  getFields() {
    return this.fields;
  }
};
