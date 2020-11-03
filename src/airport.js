'use strict';

class Airport{
  constructor() {
    this._hangar = []
  };

  planes() {
    return this._hangar;
  };

  clearForLanding(plane) {
    if(this.isStormy()) {
      throw new Error('cannot land during stormy weather')
    }
    this._hangar.push(plane);
  };

  clearForTakeOff(plane) {
    debugger;
    if(this.isStormy()) {
      throw new Error('cannot takeoff during stormy weather')
    }
    this._hangar = [];
  };

  isStormy() {
    return false;
  }
};