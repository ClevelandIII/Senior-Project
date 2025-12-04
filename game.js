var _0x4562f4 = _0x3481;
(function (_0x111137, _0x3acdc7) {
    var _0x326c0e = _0x3481,
        _0x4efb63 = _0x111137();
    while (!![]) {
        try {
            var _0x6467b1 =
                (parseInt(_0x326c0e(0x18a)) / 0x1) *
                    (-parseInt(_0x326c0e(0x17c)) / 0x2) +
                parseInt(_0x326c0e(0x188)) / 0x3 +
                parseInt(_0x326c0e(0x18c)) / 0x4 +
                (parseInt(_0x326c0e(0x182)) / 0x5) *
                    (parseInt(_0x326c0e(0x174)) / 0x6) +
                -parseInt(_0x326c0e(0x199)) / 0x7 +
                -parseInt(_0x326c0e(0x189)) / 0x8 +
                parseInt(_0x326c0e(0x191)) / 0x9;
            if (_0x6467b1 === _0x3acdc7) break;
            else _0x4efb63["push"](_0x4efb63["shift"]());
        } catch (_0x3b3776) {
            _0x4efb63["push"](_0x4efb63["shift"]());
        }
    }
})(_0x3b31, 0x21dc5),
    _0x4562f4(0x181);
let character,
    background,
    border,
    selectedCharacter = localStorage["getItem"]("character");
function startGame() {
    var _0xe16dcf = _0x4562f4;
    OneShot[_0xe16dcf(0x19b)](),
        selectedCharacter == null || selectedCharacter == "Niko"
            ? (console["log"](selectedCharacter),
              (character = new component(
                  0x28,
                  0x38,
                  _0xe16dcf(0x19d),
                  0xdc,
                  0x78,
                  "image"
              )))
            : (character = new component(
                  0x22,
                  0x38,
                  "images/game/" + selectedCharacter + _0xe16dcf(0x19a),
                  0xdc,
                  0x78,
                  _0xe16dcf(0x195)
              )),
        (background = new component(
            0x10f0,
            0x6ae,
            "images/game/Refuge_Map_large.png",
            -0x107,
            -0x1bc,
            _0xe16dcf(0x195)
        )),
        (border = new component(
            0x10f0,
            0x6ae,
            _0xe16dcf(0x177),
            -0x107,
            -0x1bc,
            _0xe16dcf(0x195)
        ));
}
var OneShot = {
    canvas: document[_0x4562f4(0x17b)](_0x4562f4(0x173)),
    start: function () {
        var _0x3d0597 = _0x4562f4;
        (this[_0x3d0597(0x18b)]["width"] = 0x1e0),
            (this[_0x3d0597(0x18b)][_0x3d0597(0x17e)] = 0x10e),
            (this[_0x3d0597(0x19c)] =
                this[_0x3d0597(0x18b)][_0x3d0597(0x193)]("2d")),
            (this[_0x3d0597(0x183)] = setInterval(updateGameArea, 0x14)),
            window["addEventListener"](_0x3d0597(0x176), function (_0x1e5dc5) {
                var _0x275f08 = _0x3d0597;
                OneShot[_0x275f08(0x185)] = _0x1e5dc5["keyCode"];
            }),
            window[_0x3d0597(0x17d)](_0x3d0597(0x175), function (_0x3b3c60) {
                var _0x497f1b = _0x3d0597;
                OneShot[_0x497f1b(0x185)] = ![];
            });
    },
    clear: function () {
        var _0x845fd9 = _0x4562f4;
        this[_0x845fd9(0x19c)][_0x845fd9(0x179)](
            0x0,
            0x0,
            this[_0x845fd9(0x18b)][_0x845fd9(0x178)],
            this["canvas"]["height"]
        );
    },
    stop: function () {
        clearInterval(this["interval"]);
    },
};
function _0x3b31() {
    var _0x209a70 = [
        "src",
        "541029GepqZv",
        "1517672GDRJfK",
        "11oZFKxw",
        "canvas",
        "43800EXLQYw",
        "images/game/Niko_Right.png",
        "speedY",
        "_Back.png",
        "newPos",
        "2075139IxiZYh",
        "clear",
        "getContext",
        "images/game/",
        "image",
        "_Left.png",
        "update",
        "images/game/Niko_Back.png",
        "205772eRfcgu",
        "_Front.png",
        "start",
        "context",
        "images/game/Niko_Front.png",
        "fillRect",
        "canvas_game",
        "6QhllnU",
        "keyup",
        "keydown",
        "images/game/black.png",
        "width",
        "clearRect",
        "crashWith",
        "getElementById",
        "42986JEYThL",
        "addEventListener",
        "height",
        "which",
        "images/game/Niko_Left.png",
        "use\x20strict",
        "861785HvjuEC",
        "interval",
        "fillStyle",
        "key",
        "speedX",
    ];
    _0x3b31 = function () {
        return _0x209a70;
    };
    return _0x3b31();
}
function _0x3481(_0x4a09c8, _0xb8f025) {
    var _0x3b3131 = _0x3b31();
    return (
        (_0x3481 = function (_0x34814d, _0x28cdc9) {
            _0x34814d = _0x34814d - 0x172;
            var _0x1ffd4a = _0x3b3131[_0x34814d];
            return _0x1ffd4a;
        }),
        _0x3481(_0x4a09c8, _0xb8f025)
    );
}
function component(
    _0x361696,
    _0x16a50f,
    _0x4b3fcb,
    _0x297ece,
    _0x131969,
    _0x34a4f1
) {
    var _0x36e9bf = _0x4562f4;
    (this["type"] = _0x34a4f1),
        _0x34a4f1 == "image" &&
            ((this[_0x36e9bf(0x195)] = new Image()),
            (this[_0x36e9bf(0x195)][_0x36e9bf(0x187)] = _0x4b3fcb)),
        (this["width"] = _0x361696),
        (this["height"] = _0x16a50f),
        (this[_0x36e9bf(0x186)] = 0x0),
        (this[_0x36e9bf(0x18e)] = 0x0),
        (this["x"] = _0x297ece),
        (this["y"] = _0x131969),
        (this[_0x36e9bf(0x197)] = function () {
            var _0x540e92 = _0x36e9bf;
            (ctx = OneShot[_0x540e92(0x19c)]),
                _0x34a4f1 == _0x540e92(0x195)
                    ? ctx["drawImage"](
                          this[_0x540e92(0x195)],
                          this["x"],
                          this["y"],
                          this[_0x540e92(0x178)],
                          this["height"]
                      )
                    : ((ctx[_0x540e92(0x184)] = _0x4b3fcb),
                      ctx[_0x540e92(0x172)](
                          this["x"],
                          this["y"],
                          this["width"],
                          this["height"]
                      ));
        }),
        (this["newPos"] = function () {
            var _0x38b95c = _0x36e9bf;
            (this["x"] += this["speedX"]),
                (this["y"] += this[_0x38b95c(0x18e)]);
        }),
        (this[_0x36e9bf(0x17a)] = function (_0x56a836) {
            var _0x180e65 = _0x36e9bf,
                _0x302c77 = this["x"],
                _0xb33dc7 = this["x"] + this[_0x180e65(0x178)],
                _0x438dae = this["y"],
                _0x1b9df6 = this["y"] + this[_0x180e65(0x17e)],
                _0x2bb7e4 = _0x56a836["x"],
                _0x49f096 = _0x56a836["x"] + _0x56a836["width"],
                _0x228bb4 = _0x56a836["y"],
                _0x5adac4 = _0x56a836["y"] + _0x56a836["height"],
                _0x2c82f6 = !![];
            return (
                (_0x1b9df6 < _0x228bb4 ||
                    _0x438dae > _0x5adac4 ||
                    _0xb33dc7 < _0x2bb7e4 ||
                    _0x302c77 > _0x49f096) &&
                    (_0x2c82f6 = ![]),
                _0x2c82f6
            );
        });
}
function updateGameArea() {
    var _0x18e43a = _0x4562f4;
    window[_0x18e43a(0x17d)](_0x18e43a(0x176), function (_0x4d5888) {
        var _0x59e64e = _0x18e43a;
        (_0x4d5888[_0x59e64e(0x17f)] == 0x26 ||
            _0x4d5888[_0x59e64e(0x17f)] == 0x27 ||
            _0x4d5888[_0x59e64e(0x17f)] == 0x28 ||
            _0x4d5888["which"] == 0x25) &&
            _0x4d5888["preventDefault"]();
    }),
        window["addEventListener"](_0x18e43a(0x175), function (_0x47f2e2) {
            stopMove();
        }),
        OneShot[_0x18e43a(0x192)](),
        (character[_0x18e43a(0x186)] = 0x0),
        (character["speedY"] = 0x0),
        selectedCharacter == null
            ? character["x"] > 0x50 &&
              character["x"] < 0x168 &&
              character["y"] > 0x28 &&
              character["y"] < 0xaa
                ? (OneShot[_0x18e43a(0x185)] &&
                      OneShot[_0x18e43a(0x185)] == 0x25 &&
                      ((character[_0x18e43a(0x186)] = -0x1),
                      (character["image"]["src"] = _0x18e43a(0x180))),
                  OneShot["key"] &&
                      OneShot["key"] == 0x27 &&
                      ((character[_0x18e43a(0x186)] = 0x1),
                      (character[_0x18e43a(0x195)]["src"] = _0x18e43a(0x18d))),
                  OneShot["key"] &&
                      OneShot[_0x18e43a(0x185)] == 0x26 &&
                      ((character[_0x18e43a(0x18e)] = -0x1),
                      (character["image"][_0x18e43a(0x187)] =
                          _0x18e43a(0x198))),
                  OneShot[_0x18e43a(0x185)] &&
                      OneShot[_0x18e43a(0x185)] == 0x28 &&
                      ((character[_0x18e43a(0x18e)] = 0x1),
                      (character[_0x18e43a(0x195)][_0x18e43a(0x187)] =
                          _0x18e43a(0x19d))))
                : (character["x"] == 0x50 && (character["x"] = 0x51),
                  character["x"] == 0x168 && (character["x"] = 0x167),
                  character["y"] == 0x28 && (character["y"] = 0x29),
                  character["y"] == 0xaa && (character["y"] = 0xa9))
            : character["x"] > 0x50 &&
              character["x"] < 0x168 &&
              character["y"] > 0x28 &&
              character["y"] < 0xaa
            ? (OneShot[_0x18e43a(0x185)] &&
                  OneShot["key"] == 0x25 &&
                  ((character["speedX"] = -0x1),
                  (character[_0x18e43a(0x195)]["src"] =
                      _0x18e43a(0x194) + selectedCharacter + _0x18e43a(0x196))),
              OneShot[_0x18e43a(0x185)] &&
                  OneShot["key"] == 0x27 &&
                  ((character["speedX"] = 0x1),
                  (character[_0x18e43a(0x195)][_0x18e43a(0x187)] =
                      _0x18e43a(0x194) + selectedCharacter + "_Right.png")),
              OneShot[_0x18e43a(0x185)] &&
                  OneShot[_0x18e43a(0x185)] == 0x26 &&
                  ((character["speedY"] = -0x1),
                  (character[_0x18e43a(0x195)][_0x18e43a(0x187)] =
                      _0x18e43a(0x194) + selectedCharacter + _0x18e43a(0x18f))),
              OneShot[_0x18e43a(0x185)] &&
                  OneShot[_0x18e43a(0x185)] == 0x28 &&
                  ((character[_0x18e43a(0x18e)] = 0x1),
                  (character["image"][_0x18e43a(0x187)] =
                      "images/game/" + selectedCharacter + _0x18e43a(0x19a))))
            : (character["x"] == 0x50 && (character["x"] = 0x51),
              character["x"] == 0x168 && (character["x"] = 0x167),
              character["y"] == 0x28 && (character["y"] = 0x29),
              character["y"] == 0xaa && (character["y"] = 0xa9)),
        console["log"](background["x"] + ",\x20" + background["y"]),
        background["x"] < 0x0 &&
        background["x"] > -0x10f0 &&
        background["y"] < 0x0 &&
        background["y"] > -0x6ae
            ? (OneShot[_0x18e43a(0x185)] &&
                  OneShot[_0x18e43a(0x185)] == 0x25 &&
                  (background[_0x18e43a(0x186)] = 0x1),
              OneShot[_0x18e43a(0x185)] &&
                  OneShot[_0x18e43a(0x185)] == 0x27 &&
                  (background[_0x18e43a(0x186)] = -0x1),
              OneShot[_0x18e43a(0x185)] &&
                  OneShot[_0x18e43a(0x185)] == 0x26 &&
                  (background[_0x18e43a(0x18e)] = 0x1),
              OneShot[_0x18e43a(0x185)] &&
                  OneShot[_0x18e43a(0x185)] == 0x28 &&
                  (background[_0x18e43a(0x18e)] = -0x1))
            : (background["x"] == 0x0 && (background["x"] = -0x1),
              background["x"] == -0x10f0 && (background["x"] = -0x10f1),
              background["y"] == 0x0 && (background["y"] = -0x1),
              background["y"] == -0x6ae && (background["y"] = -0x6af)),
        background[_0x18e43a(0x190)](),
        background[_0x18e43a(0x197)](),
        character[_0x18e43a(0x190)](),
        character[_0x18e43a(0x197)]();
}
function stopMove() {
    var _0x3006ab = _0x4562f4;
    (background[_0x3006ab(0x186)] = 0x0),
        (background[_0x3006ab(0x18e)] = 0x0),
        (character[_0x3006ab(0x186)] = 0x0),
        (character[_0x3006ab(0x18e)] = 0x0);
}
