/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Aimar Fernandez
// Created on: Apr 2025
// This is the splash scene

class SplashScene extends Phaser.Scene {
  constructor() {
    super({key: 'splashScene'})
  }
  init(data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }
  preload () {
    console.log('Splash Scene')
  }
  create (data) {
  }
  update (time, delta) {
    this.scene.switch('titleScene')
  }
}

export default SplashScene
