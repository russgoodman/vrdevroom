const World = {}

World.BOARD_POS = new THREE.Vector2(0, -2.5)
World.USER_HEIGHT = 1.6

World.Keys = {
  Pointer: 'pointer'
}

const Sync = {}

Sync.TICK_INTERVAL = 1000
Sync.FORCE_UPDATE_INTERVAL = 5000
Sync.LOG_MESSAGES = true

export {
  World,
  Sync
}