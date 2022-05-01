import { makeAutoObservable } from "mobx";

class Timer {
  secondsPassed = 0;

  constructor() {
    this.increaseTimer = this.increaseTimer.bind(this);
    makeAutoObservable(this)
  }

  increaseTimer() {
    this.secondsPassed += 1;
  }
}

export const timer = new Timer();