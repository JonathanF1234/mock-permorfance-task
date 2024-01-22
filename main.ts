controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (jump < 2) {
        jump += 1
        P1.vy = -150
    }
    if (P1.isHittingTile(CollisionDirection.Bottom)) {
        jump = 0
    }
    if (P1.isHittingTile(CollisionDirection.Top)) {
        jump = 2
    }
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    info.player1.setLife(0)
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (jump < 2) {
        jump += 1
        P2.vy = -150
    }
    if (P2.isHittingTile(CollisionDirection.Bottom)) {
        jump = 0
    }
    if (P2.isHittingTile(CollisionDirection.Top)) {
        jump = 2
    }
})
function spawn (num: number, mySprite: Sprite) {
	
}
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    info.player2.setLife(0)
})
info.player1.onLifeZero(function () {
    sprites.destroy(P1)
    scene.cameraFollowSprite(P2)
})
info.player2.onLifeZero(function () {
    sprites.destroy(P2)
    scene.cameraFollowSprite(P1)
})
let jump = 0
let P2: Sprite = null
let P1: Sprite = null
tiles.setCurrentTilemap(tilemap`level`)
P1 = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
P1.setPosition(30, 120)
controller.moveSprite(P1, 100, 0)
P1.ay = 300
P1.setStayInScreen(true)
info.player1.setLife(3)
info.player1.setScore(0)
P2 = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
P2.setPosition(30, 120)
controller.player2.moveSprite(P2, 100, 0)
P2.ay = 300
P2.setStayInScreen(true)
info.player2.setLife(3)
info.player2.setScore(0)
jump = 0
let Camera = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(Camera)
if (info.player1.life() == false && info.player2.life() == false) {
    game.gameOver(false)
}
game.onUpdate(function () {
    Camera.setPosition((P1.x + P2.x) / 2, (P1.y + P2.y) / 2)
})
