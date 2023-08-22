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
game.splash("the dog")
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    bbbb........bbbb.................
    c99bb......bb99b.................
    c999bb....bb999c.................
    c9b99bccccb99b9c.................
    c9bb99bccb99bb9c.................
    c93bddddddddb39c.................
    c933dddddddd339c.................
    c9d3dddddddd399c.................
    cdddddd91199999c.................
    cdddff91119ff99c........bbbbbb...
    cdddff91111ff99c.......c999999bb.
    cddd91111111999c......c99999999b.
    cddd1111fff1199c.....c9991119999b
    cdddc11fff1199bc.....c9911111999b
    cdddcc111111c9bc.....c911dd11199b
    cddd99bb33cc99bcc....cbddbbd1199c
    cddd999b33cdddddbbccccbbdbbb1199c
    cddd9999bbddddddddddddddddbb1999c
    cddd911119ddddddddddddddddddb999c
    cddd111111dddddddddddddddddddd9c.
    cddd1111111dddddddddddddddddddcc.
    c9911111111dddddddddddddddddddc..
    c99111111111ddddddddddddddddddc..
    cb9111111111ddddddddddddddddddc..
    .f9111111111ddddddddddddddddddc..
    .ff111111111ddddddddddddddddddc..
    ..fb11111111ddddddddddddddddddc..
    ...fb111111ddddddd111111ddddddc..
    ...fbbb1111dddddd11111111dddddc..
    ....fbbfffbddddccccccccccbddddc..
    ....fbbf..fdddc.....fbbf.cddddc..
    ....fbbf..fdddc.....fbbf.ccddd9c.
    ....fbbf..f99c.......fbf..cc999c.
    ....fbbf..f99c.......fbbf..cc99c.
    ....fbbf..f99c.......fbbf...c99c.
    ....fbbf..f99c......fbbbf...c99c.
    ...fbbbf..f99c......ffff....cb9c.
    ...fbbf..f999c.............c999c.
    ...ffff..f99cc.............c999c.
    .........fffc..............cccc..
    `, SpriteKind.Player)
let mySprite2 = sprites.create(img`
    ........................
    ....ffffff..............
    ..ffeeeef2f.............
    .ffeeeef222f............
    .feeeffeeeef...cc.......
    .ffffee2222ef.cdc.......
    .fe222ffffe2fcddc.......
    fffffffeeeffcddc........
    ffe44ebf44ecddc.........
    fee4d41fddecdc..........
    .feee4dddedccc..........
    ..ffee44e4dde...........
    ...f222244ee............
    ...f2222e2f.............
    ...f444455f.............
    ....ffffff..............
    .....fff................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 5))
tiles.placeOnTile(mySprite2, tiles.getTileLocation(9, 5))
mySprite.ay = 500
game.onUpdateInterval(1500, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 5 d f . . 
        . . . . b 5 5 1 f f 5 d 4 c . . 
        . . . . b 5 5 d f b d d 4 4 . . 
        . b b b d 5 5 5 5 5 4 4 4 4 4 b 
        b d d d b b d 5 5 4 4 4 4 4 b . 
        b b d 5 5 5 b 5 5 5 5 5 5 b . . 
        c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
        c b d c d 5 5 b 5 5 5 5 5 5 b . 
        . c d d c c b d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite2, randint(-140, -100), 0)
})