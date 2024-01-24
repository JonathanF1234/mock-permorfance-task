namespace SpriteKind {
    export const Camera = SpriteKind.create()
    export const Player2 = SpriteKind.create()
}
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (jump < 2) {
        jump += 1
        P1.vy = -170
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
        P2.vy = -170
    }
    if (P2.isHittingTile(CollisionDirection.Bottom)) {
        jump = 0
    }
    if (P2.isHittingTile(CollisionDirection.Top)) {
        jump = 2
    }
})
sprites.onOverlap(SpriteKind.Player2, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.player2.changeLifeBy(-1)
})
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.player1.changeLifeBy(-1)
})
let DistanceP2 = 0
let DistanceP1 = 0
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
    `, SpriteKind.Player2)
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
    `, SpriteKind.Camera)
scene.cameraFollowSprite(Camera)
let list = [sprites.create(img`
    . . f f f . . . . . . . . f f f 
    . f f c c . . . . . . f c b b c 
    f f c c . . . . . . f c b b c . 
    f c f c . . . . . . f b c c c . 
    f f f c c . c c . f c b b c c . 
    f f c 3 c c 3 c c f b c b b c . 
    f f b 3 b c 3 b c f b c c b c . 
    . c 1 b b b 1 b c b b c c c . . 
    . c 1 b b b 1 b b c c c c . . . 
    c b b b b b b b b b c c . . . . 
    c b 1 f f 1 c b b b b f . . . . 
    f f 1 f f 1 f b b b b f c . . . 
    f f 2 2 2 2 f b b b b f c c . . 
    . f 2 2 2 2 b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `, SpriteKind.Enemy), sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy), sprites.create(img`
    .........ffffff.........
    .........ffffff.........
    ......fff111111fff......
    ....ffa1111111111aff....
    ....ffa1111111111aff....
    ....ff111a1a1a1111ff....
    ...fdd111a1a1a1111ddf...
    ...fdd111a1a1a1111ddf...
    ...fdd111a1a1a1111ddf...
    ...fddddd111111dddddf...
    ...fddddd111111dddddf...
    ...faadaafddddfaadaaf...
    ...fccdccf1111fccdccf...
    ...fccdccf1111fccdccf...
    ....ffb1111111111bff....
    ...ffffccdbb11bddffffff.
    ...ffffccdbb11bddffffff.
    fcc1111ccbffbbfcc1111ccf
    f11a11a11ffffff11a11a11f
    f11a11a11ffffff11a11a11f
    faafaafffffffffaafaafaaf
    .......ffffffffff.......
    .......ffffffffff.......
    ..........fffff.........
    `, SpriteKind.Enemy)]
let Bat = sprites.create(img`
    . . f f f . . . . . . . . f f f 
    . f f c c . . . . . . f c b b c 
    f f c c . . . . . . f c b b c . 
    f c f c . . . . . . f b c c c . 
    f f f c c . c c . f c b b c c . 
    f f c 3 c c 3 c c f b c b b c . 
    f f b 3 b c 3 b c f b c c b c . 
    . c 1 b b b 1 b c b b c c c . . 
    . c 1 b b b 1 b b c c c c . . . 
    c b b b b b b b b b c c . . . . 
    c b 1 f f 1 c b b b b f . . . . 
    f f 1 f f 1 f b b b b f c . . . 
    f f 2 2 2 2 f b b b b f c c . . 
    . f 2 2 2 2 b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `, SpriteKind.Enemy)
let Skeleton = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
let BigSkeleton = sprites.create(img`
    .........ffffff.........
    .........ffffff.........
    ......fff111111fff......
    ....ffa1111111111aff....
    ....ffa1111111111aff....
    ....ff111a1a1a1111ff....
    ...fdd111a1a1a1111ddf...
    ...fdd111a1a1a1111ddf...
    ...fdd111a1a1a1111ddf...
    ...fddddd111111dddddf...
    ...fddddd111111dddddf...
    ...faadaafddddfaadaaf...
    ...fccdccf1111fccdccf...
    ...fccdccf1111fccdccf...
    ....ffb1111111111bff....
    ...ffffccdbb11bddffffff.
    ...ffffccdbb11bddffffff.
    fcc1111ccbffbbfcc1111ccf
    f11a11a11ffffff11a11a11f
    f11a11a11ffffff11a11a11f
    faafaafffffffffaafaafaaf
    .......ffffffffff.......
    .......ffffffffff.......
    ..........fffff.........
    `, SpriteKind.Enemy)
game.onUpdate(function () {
    Camera.setPosition((P1.x + P2.x) / 2, (P1.y + P2.y) / 2)
})
forever(function () {
    if (!(info.player1.hasLife()) && !(info.player2.hasLife())) {
        game.gameOver(false)
    }
})
game.onUpdateInterval(200, function () {
    DistanceP1 = (P1.x + P1.y) / 2
    DistanceP2 = (P2.x + P2.y) / 2
    if (DistanceP1 < DistanceP2) {
        Bat.follow(P1, 100)
        Skeleton.follow(P1, 60)
        BigSkeleton.follow(P1, 30)
    } else {
        Bat.follow(P2, 100)
        Skeleton.follow(P2, 60)
        BigSkeleton.follow(P2, 30)
    }
})
