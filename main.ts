namespace SpriteKind {
    export const Camera = SpriteKind.create()
    export const Player2 = SpriteKind.create()
    export const Boss = SpriteKind.create()
    export const projectile2 = SpriteKind.create()
}
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    projectile22 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 2 2 2 . . . 
        . . . . . . . 2 2 1 1 1 1 2 . . 
        . . . . 2 2 3 3 1 1 1 1 1 1 . . 
        . . 3 3 3 3 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 3 3 2 2 3 1 1 1 1 1 1 1 . . 
        . . . . . . 2 2 3 1 1 1 1 2 . . 
        . . . . . . . . . 2 2 2 2 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, P2, 50, 0)
    projectile22.setKind(SpriteKind.projectile2)
})
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
sprites.onOverlap(SpriteKind.Player2, SpriteKind.Boss, function (sprite, otherSprite) {
    info.player2.changeLifeBy(-1)
    pause(700)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    info.player1.setLife(0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Boss, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    statusbar.value += -1
})
sprites.onOverlap(SpriteKind.projectile2, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    sprites.destroy(BigSkeleton, effects.coolRadial, 1000)
})
sprites.onOverlap(SpriteKind.projectile2, SpriteKind.Boss, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    statusbar.value += -1
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
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    P2.setImage(img`
        . . . . . . . . . . . . . 
        . . . f f f f f f . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f f . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f f . 
        f f e 4 e 1 f 4 4 f f . . 
        . f f f e 4 4 4 4 f . . . 
        . 4 4 4 e e e e f f . . . 
        . e 4 4 e 7 7 7 7 f . . . 
        . f e e f 6 6 6 6 f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `)
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    P2.setImage(img`
        . . . . . . . . . . . . . 
        . . . . f f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . f f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . f f f e e f b f e e f f 
        . . f f 4 4 f 1 e 4 e f f 
        . . . f 4 4 4 4 e f f f . 
        . . . f f e e e e 4 4 4 . 
        . . . f 7 7 7 7 e 4 4 e . 
        . . f f 6 6 6 6 f e e f . 
        . . f f f f f f f f f f . 
        . . . f f f . . . f f . . 
        `)
})
sprites.onOverlap(SpriteKind.Player2, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.player2.changeLifeBy(-1)
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    P1.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `)
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
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 2 2 2 . . . 
        . . . . . . . 2 2 1 1 1 1 2 . . 
        . . . . 2 2 3 3 1 1 1 1 1 1 . . 
        . . 3 3 3 3 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 3 3 2 2 3 1 1 1 1 1 1 1 . . 
        . . . . . . 2 2 3 1 1 1 1 2 . . 
        . . . . . . . . . 2 2 2 2 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, P1, 50, 0)
})
function FollowPlayer (DistanceP1: number, DistanceP2: number) {
    if (DistanceP1 < DistanceP2) {
        Bat.follow(P1, 100)
        Skeleton.follow(P1, 60)
        BigSkeleton.follow(P1, 30)
    } else {
        Bat.follow(P2, 100)
        Skeleton.follow(P2, 60)
        BigSkeleton.follow(P2, 30)
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
})
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    P1.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.player1.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Boss, function (sprite, otherSprite) {
    info.player1.changeLifeBy(-1)
    pause(700)
})
let DistanceP2 = 0
let DistanceP1 = 0
let statusbar: StatusBarSprite = null
let Camera3: Sprite = null
let BigSkeleton: Sprite = null
let Skeleton: Sprite = null
let Bat: Sprite = null
let projectile22: Sprite = null
let Jump2 = 0
let projectile: Sprite = null
let P1: Sprite = null
let P2: Sprite = null
let jump = 0
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
let Camera2 = sprites.create(img`
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
scene.cameraFollowSprite(Camera2)
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
Bat = sprites.create(img`
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
Skeleton = sprites.create(img`
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
BigSkeleton = sprites.create(img`
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
scene.cameraFollowSprite(Camera3)
list = [Bat, Skeleton, BigSkeleton]
Bat = sprites.create(img`
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
Skeleton = sprites.create(img`
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
BigSkeleton = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f a 1 1 a f f . . . . 
    . . . f a a a 1 1 a a a f . . . 
    . . . f a a 1 1 1 1 a a f . . . 
    . . f a a 1 1 1 1 1 1 a a f . . 
    . . f d 1 1 1 1 1 1 1 1 d f . . 
    . . f d d d 1 1 1 1 d d d f . . 
    . . f a d a f d d f a d a f . . 
    . . f c d c f 1 1 f c d c f . . 
    . . . f a 1 1 1 1 1 1 a f . . . 
    . . f f f c d a 1 a d f f f f f 
    f c 1 1 1 c a f a f c 1 1 1 c f 
    f 1 a 1 a 1 f f f f 1 a 1 a 1 f 
    f a f a f f f f f f a f a f a f 
    . . . . . f f f f f f . . . . . 
    `, SpriteKind.Boss)
statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
statusbar.setColor(6, 6, 2)
statusbar.attachToSprite(BigSkeleton)
statusbar.value = 5
game.onUpdate(function () {
    Camera2.setPosition((P1.x + P2.x) / 2, (P1.y + P2.y) / 2)
})
game.onUpdateInterval(5000, function () {
    Bat = sprites.create(img`
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
    Skeleton = sprites.create(img`
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
    BigSkeleton = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f a 1 1 a f f . . . . 
        . . . f a a a 1 1 a a a f . . . 
        . . . f a a 1 1 1 1 a a f . . . 
        . . f a a 1 1 1 1 1 1 a a f . . 
        . . f d 1 1 1 1 1 1 1 1 d f . . 
        . . f d d d 1 1 1 1 d d d f . . 
        . . f a d a f d d f a d a f . . 
        . . f c d c f 1 1 f c d c f . . 
        . . . f a 1 1 1 1 1 1 a f . . . 
        . . f f f c d a 1 a d f f f f f 
        f c 1 1 1 c a f a f c 1 1 1 c f 
        f 1 a 1 a 1 f f f f 1 a 1 a 1 f 
        f a f a f f f f f f a f a f a f 
        . . . . . f f f f f f . . . . . 
        `, SpriteKind.Boss)
    statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    statusbar.setColor(6, 6, 2)
    statusbar.attachToSprite(BigSkeleton)
    statusbar.value = 5
})
game.onUpdateInterval(1000, function () {
    info.player2.changeScoreBy(1)
    info.player1.changeScoreBy(1)
})
forever(function () {
    if (!(info.player1.hasLife()) && !(info.player2.hasLife())) {
        game.gameOver(false)
        game.splash(game.runtime())
        game.setGameOverScoringType(game.ScoringType.HighScore)
    }
})
forever(function () {
    if (!(info.player1.hasLife()) && !(info.player2.hasLife())) {
        game.gameOver(false)
    }
})
game.onUpdateInterval(100, function () {
    DistanceP1 = (P1.x + P1.y) / 2
    DistanceP2 = (P2.x + P2.y) / 2
})
game.onUpdateInterval(100, function () {
    if (!(info.player1.hasLife()) && info.player2.hasLife()) {
        Bat.follow(P2, 100)
        Skeleton.follow(P2, 60)
        BigSkeleton.follow(P2, 30)
    } else if (!(info.player2.hasLife()) && info.player1.hasLife()) {
        Bat.follow(P1, 100)
        Skeleton.follow(P1, 60)
        BigSkeleton.follow(P1, 30)
    } else {
        FollowPlayer(DistanceP1, DistanceP2)
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
