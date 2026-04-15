function make_fisk () {
    fisk = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c c . . . . . . . 
        . . . c d d d d d c . . . . . . 
        . . . c d c c c c c . . . . . . 
        . . . c c d 4 4 4 4 c . . . . . 
        . . . c 1 4 4 4 4 4 d c . . . . 
        . . c 1 4 4 4 4 4 1 4 4 c . . . 
        c c c 1 4 4 4 4 1 4 4 4 4 c . . 
        c 4 4 1 4 4 c c 1 4 4 4 4 4 c . 
        f 4 f 1 4 f 4 4 1 4 4 4 4 4 c . 
        f 4 f d 4 f 4 c 1 4 f 4 4 4 4 f 
        f 4 f f 4 f f 4 1 4 4 4 4 4 4 f 
        f f c b c 4 4 4 4 1 4 4 4 4 f . 
        . . c d d c 4 4 4 4 d f f f . . 
        . . . c c c f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnRandomTile(fisk, assets.tile`myTile1`)
    scene.cameraFollowSprite(fisk)
    controller.moveSprite(fisk)
}
info.onCountdownEnd(function () {
    game.gameOver(true)
})
function make_haj () {
    haj = sprites.create(img`
        ..............fffcc.............
        ..............fbbddc............
        ...............fbbddc...........
        ccc............fcbbccf..........
        cbbcc.........ffccccccffffff....
        .cbbdc.....fffcbbbbbbbbbbbbbff..
        .fbbddc..ffcccbbbbcbcbbbbbbbbbff
        ..fbbdfffcccccbbbcbcbbffbbbbbcbf
        ..fcbbbcccccccbbbcbcb1ff1111bbbf
        ..fccbcccccccccbbbbbb11111111bf.
        .fcbbfffccccccccbbbb11cc33cccf..
        .fbbf...cbdbcccccbbb111c131cf...
        fbbf.....ccdddddfbbbc111c33f....
        fff........ccddfbbdbf1111ff.....
        .............cfbbdbfccccc.......
        ..............fffff.............
        `, SpriteKind.Enemy)
    haj.follow(fisk, randint(50, 80))
    tiles.placeOnRandomTile(haj, sprites.builtin.coral1)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(false)
})
let haj: Sprite = null
let fisk: Sprite = null
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level1`)
info.startCountdown(60)
make_fisk()
make_haj()
make_haj()
make_haj()
make_haj()
make_haj()
make_haj()
make_haj()
make_haj()
make_haj()
make_haj()
make_haj()
make_haj()
make_haj()
make_haj()
make_haj()
make_haj()
