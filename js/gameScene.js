/* global Phaser */

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Aimar Fernandez
// Created on: Mar 2025
// This is the game scene

class GameScene extends Phaser.Scene {
  constructor () {
    super({ key: 'gameScene' })
    this.background = null
    this.ship = null
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log('Game Scene')
    this.load.image('starBackground', './assets/starBackground.png')
    this.load.image('ship', './assets/spaceShip.png')
  }

  create (data) {
    this.background = this.add.image(0, 0, 'starBackground').setScale(2.0)
    this.background.setOrigin(0, 0)
    this.ship = this
  }

  update (time, delta) {
  }
}

export default GameScene
