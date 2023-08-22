controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -200
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    mySprite.startEffect(effects.bubbles)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.gameOver(false)
})
let projectile: Sprite = null
let mySprite: Sprite = null
game.splash("shiba jump")
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    bbbb........bbbb.................
    cddbb......bbddb.................
    cdddbb....bbdddc.................
    cdbddbccccbddbdc.................
    cdbbddbccbddbbdc.................
    cd3bddddddddb3dc.................
    cd33dddddddd33dc.................
    cdd3dddddddd3ddc.................
    cddddddd11dddddc.................
    cdddffd111dffddc........bbbbbb...
    cdddffd1111ffddc.......cddddddbb.
    cdddd1111111dddc......cddddddddb.
    cddd1111fff11ddc.....cddd111ddddb
    cdddc11fff11ddbc.....cdd11111dddb
    cdddcc111111cdbc.....cd11dd111ddb
    cdddddbb33ccddbcc....cbddbbd11ddc
    cddddddb33cdddddbbccccbbdbbb11ddc
    cdddddddbbddddddddddddddddbb1dddc
    cdddd1111dddddddddddddddddddbdddc
    cddd111111dddddddddddddddddddddc.
    cddd1111111dddddddddddddddddddcc.
    cdd11111111dddddddddddddddddddc..
    cdd111111111ddddddddddddddddddc..
    cbd111111111ddddddddddddddddddc..
    .fd111111111ddddddddddddddddddc..
    .ff111111111ddddddddddddddddddc..
    ..fb11111111ddddddddddddddddddc..
    ...fb111111ddddddd111111ddddddc..
    ...fbbb1111dddddd11111111dddddc..
    ....fbbfffbddddccccccccccbddddc..
    ....fbbf..fdddc.....fbbf.cddddc..
    ....fbbf..fdddc.....fbbf.ccddddc.
    ....fbbf..fddc.......fbf..ccdddc.
    ....fbbf..fddc.......fbbf..ccddc.
    ....fbbf..fddc.......fbbf...cddc.
    ....fbbf..fddc......fbbbf...cddc.
    ...fbbbf..fddc......ffff....cbdc.
    ...fbbf..fdddc.............cdddc.
    ...ffff..fddcc.............cdddc.
    .........fffc..............cccc..
    `, SpriteKind.Player)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . 
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . . . 
    c b d d f f d d b c . . . . 
    c 3 b d d b d b 3 c . . . . 
    f b 3 d d d d 3 b f . . . . 
    e d d d d d d d d e . . . . 
    e d f d d d d f d e . b f b 
    f d d d d d d d d f . f d f 
    f b d d b b d d 2 b f f d f 
    . f 2 2 2 2 2 2 d b b d b f 
    . f d d d d d d d f f f f . 
    . . f d b d f d f . . . . . 
    . . . f f f f f f . . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 5))
tiles.placeOnTile(mySprite2, tiles.getTileLocation(9, 5))
mySprite.ay = 500
game.onUpdateInterval(1500, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 4 . . . . . 
        . . . . 2 . . . . 4 4 . . . . . 
        . . . . 2 4 . . 4 5 4 . . . . . 
        . . . . . 2 4 d 5 5 4 . . . . . 
        . . . . . 2 5 5 5 5 4 . . . . . 
        . . . . . . 2 5 5 5 5 4 . . . . 
        . . . . . . 2 5 4 2 4 4 . . . . 
        . . . . . . 4 4 . . 2 4 4 . . . 
        . . . . . 4 4 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite2, randint(-140, -100), 0)
})
