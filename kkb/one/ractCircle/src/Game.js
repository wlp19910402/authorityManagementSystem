import { Application } from 'pixi.js'
//初始化game
const game = new Application({
  width: 750,
  height: 1080
})
document.body.append(game.view)

export function getRootContainer () {
  return game.stage
}

