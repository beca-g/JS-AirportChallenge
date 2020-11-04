'use strict';

class Weather {
  constructor() {
    this._CHANCE_OF_STORMY = 0.5;
  }

  isStormy() {
    debugger;
    return (Math.random() > this._CHANCE_OF_STORMY);
  }
}