
let position = ["u", "r", "b", "l"];
let basePos = "b";
let centerPos = [0, 1, 2, 3, 4, 5, 6, 7, 8];

function rotateCenter() {

    let base = centerPos.slice();

    centerPos[0] = base[2];
    centerPos[1] = base[5];
    centerPos[2] = base[8];
    centerPos[3] = base[1];
    centerPos[4] = base[4];
    centerPos[5] = base[7];
    centerPos[6] = base[0];
    centerPos[7] = base[3];
    centerPos[8] = base[6];
}

function getTransformRule(target) {
    var length = position.length;
    var baseIndex = position.indexOf(basePos);
    var targetIndex = position.indexOf(target);

    var offset = targetIndex - baseIndex;
    var result = {};

    for (var i = 0; i < position.length; i++) {

        var index = i + offset;

        if (index < 0) {
            index += length;
        } else if (index >= length) {
            index -= length;
        }

        result[position[i]] = position[index];
    }

    var rotateCount = offset < 0 ? offset + length : offset;

    for (var i = 0; i < rotateCount; i++) {
        rotateCenter();
    }

    result["c"] = centerPos;

    return result;
}

function transformRule(target) {

    let rules = getTransformRule(target);

    let frames = metaInfo.pieceFrames;

    for (let i = 0; i < frames.length; i++) {
        let serverId = frames[i].serverId;

        if (serverId[0] === "c") {
            serverId[1] = rules["c"][serverId[1]];
        } else {
            serverId[0] = rules[serverId[0]];
        }
    }

}

var metaInfo = {

    pieceFrames: [{
        id: 0,
        serverId: ["u", 0],
        left: 413,
        top: 20
    }, {
        id: 1,
        serverId: ["u", 1],
        left: 453,
        top: 20,
        isHeadquarters: true
    }, {
        id: 2,
        serverId: ["u", 2],
        left: 492,
        top: 20
    }, {
        id: 3,
        serverId: ["u", 3],
        left: 532,
        top: 20,
        isHeadquarters: true
    }, {
        id: 4,
        serverId: ["u", 4],
        left: 572,
        top: 20
    }, {
        id: 5,
        serverId: ["u", 5],
        left: 413,
        top: 60
    }, {
        id: 6,
        serverId: ["u", 6],
        left: 453,
        top: 60
    }, {
        id: 7,
        serverId: ["u", 7],
        left: 492,
        top: 60
    }, {
        id: 8,
        serverId: ["u", 8],
        left: 532,
        top: 60
    }, {
        id: 9,
        serverId: ["u", 9],
        left: 572,
        top: 60
    }, {
        id: 10,
        serverId: ["u", 10],
        left: 413,
        top: 98
    }, {
        id: 11,
        serverId: ["u", 11],
        left: 453,
        top: 98,
        isRefuge: true
    }, {
        id: 12,
        serverId: ["u", 12],
        left: 492,
        top: 98
    }, {
        id: 13,
        serverId: ["u", 13],
        left: 532,
        top: 98,
        isRefuge: true
    }, {
        id: 14,
        serverId: ["u", 14],
        left: 572,
        top: 98
    }, {
        id: 15,
        serverId: ["u", 15],
        left: 413,
        top: 137
    }, {
        id: 16,
        serverId: ["u", 16],
        left: 453,
        top: 137
    }, {
        id: 17,
        serverId: ["u", 17],
        left: 492,
        top: 137,
        isRefuge: true
    }, {
        id: 18,
        serverId: ["u", 18],
        left: 532,
        top: 137
    }, {
        id: 19,
        serverId: ["u", 19],
        left: 572,
        top: 137
    }, {
        id: 20,
        serverId: ["u", 20],
        left: 413,
        top: 177
    }, {
        id: 21,
        serverId: ["u", 21],
        left: 453,
        top: 177,
        isRefuge: true
    }, {
        id: 22,
        serverId: ["u", 22],
        left: 492,
        top: 177
    }, {
        id: 23,
        serverId: ["u", 23],
        left: 532,
        top: 177,
        isRefuge: true
    }, {
        id: 24,
        serverId: ["u", 24],
        left: 572,
        top: 177
    }, {
        id: 25,
        serverId: ["u", 25],
        left: 413,
        top: 216
    }, {
        id: 26,
        serverId: ["u", 26],
        left: 453,
        top: 216
    }, {
        id: 27,
        serverId: ["u", 27],
        left: 492,
        top: 216
    }, {
        id: 28,
        serverId: ["u", 28],
        left: 532,
        top: 216
    }, {
        id: 29,
        serverId: ["u", 29],
        left: 572,
        top: 216
    }, {
        id: 30,
        serverId: ["c", 0],
        left: 413,
        top: 254
    }, {
        id: 31,
        serverId: ["c", 1],
        left: 492,
        top: 254
    }, {
        id: 32,
        serverId: ["c", 2],
        left: 572,
        top: 254
    }, {
        id: 33,
        serverId: ["c", 3],
        left: 413,
        top: 332
    }, {
        id: 34,
        serverId: ["c", 4],
        left: 492,
        top: 332
    }, {
        id: 35,
        serverId: ["c", 5],
        left: 572,
        top: 332
    }, {
        id: 36,
        serverId: ["c", 6],
        left: 413,
        top: 409
    }, {
        id: 37,
        serverId: ["c", 7],
        left: 492,
        top: 409
    }, {
        id: 38,
        serverId: ["c", 8],
        left: 572,
        top: 409
    }, {
        id: 39,
        serverId: ["b", 29],
        left: 413,
        top: 448
    }, {
        id: 40,
        serverId: ["b", 28],
        left: 453,
        top: 448
    }, {
        id: 41,
        serverId: ["b", 27],
        left: 492,
        top: 448
    }, {
        id: 42,
        serverId: ["b", 26],
        left: 532,
        top: 448
    }, {
        id: 43,
        serverId: ["b", 25],
        left: 572,
        top: 448
    }, {
        id: 44,
        serverId: ["b", 24],
        left: 413,
        top: 487
    }, {
        id: 45,
        serverId: ["b", 23],
        left: 453,
        top: 487,
        isRefuge: true
    }, {
        id: 46,
        serverId: ["b", 22],
        left: 492,
        top: 487
    }, {
        id: 47,
        serverId: ["b", 21],
        left: 532,
        top: 487,
        isRefuge: true
    }, {
        id: 48,
        serverId: ["b", 20],
        left: 572,
        top: 487
    }, {
        id: 49,
        serverId: ["b", 19],
        left: 413,
        top: 527
    }, {
        id: 50,
        serverId: ["b", 18],
        left: 453,
        top: 527
    }, {
        id: 51,
        serverId: ["b", 17],
        left: 492,
        top: 527,
        isRefuge: true
    }, {
        id: 52,
        serverId: ["b", 16],
        left: 532,
        top: 527
    }, {
        id: 53,
        serverId: ["b", 15],
        left: 572,
        top: 527
    }, {
        id: 54,
        serverId: ["b", 14],
        left: 413,
        top: 566
    }, {
        id: 55,
        serverId: ["b", 13],
        left: 453,
        top: 566,
        isRefuge: true
    }, {
        id: 56,
        serverId: ["b", 12],
        left: 492,
        top: 566
    }, {
        id: 57,
        serverId: ["b", 11],
        left: 532,
        top: 566,
        isRefuge: true
    }, {
        id: 58,
        serverId: ["b", 10],
        left: 572,
        top: 566
    }, {
        id: 59,
        serverId: ["b", 9],
        left: 413,
        top: 604
    }, {
        id: 60,
        serverId: ["b", 8],
        left: 453,
        top: 604
    }, {
        id: 61,
        serverId: ["b", 7],
        left: 492,
        top: 604
    }, {
        id: 62,
        serverId: ["b", 6],
        left: 532,
        top: 604
    }, {
        id: 63,
        serverId: ["b", 5],
        left: 572,
        top: 604
    }, {
        id: 64,
        serverId: ["b", 4],
        left: 413,
        top: 643
    }, {
        id: 65,
        serverId: ["b", 3],
        left: 453,
        top: 643,
        isHeadquarters: true
    }, {
        id: 66,
        serverId: ["b", 2],
        left: 492,
        top: 643
    }, {
        id: 67,
        serverId: ["b", 1],
        left: 532,
        top: 643,
        isHeadquarters: true
    }, {
        id: 68,
        serverId: ["b", 0],
        left: 572,
        top: 643
    }, {
        id: 69,
        serverId: ["l", 4],
        left: 181,
        top: 253,
        horizontalType: "left"
    }, {
        id: 70,
        serverId: ["l", 9],
        left: 220,
        top: 253,
        horizontalType: "left"
    }, {
        id: 71,
        serverId: ["l", 14],
        left: 260,
        top: 253,
        horizontalType: "left"
    }, {
        id: 72,
        serverId: ["l", 19],
        left: 298,
        top: 253,
        horizontalType: "left"
    }, {
        id: 73,
        serverId: ["l", 24],
        left: 337,
        top: 253,
        horizontalType: "left"
    }, {
        id: 74,
        serverId: ["l", 29],
        left: 376,
        top: 253,
        horizontalType: "left"
    }, {
        id: 75,
        serverId: ["l", 3],
        left: 181,
        top: 293,
        horizontalType: "left",
        isHeadquarters: true
    }, {
        id: 76,
        serverId: ["l", 8],
        left: 220,
        top: 293,
        horizontalType: "left"
    }, {
        id: 77,
        serverId: ["l", 13],
        left: 260,
        top: 293,
        horizontalType: "left",
        isRefuge: true
    }, {
        id: 78,
        serverId: ["l", 18],
        left: 298,
        top: 293,
        horizontalType: "left"
    }, {
        id: 79,
        serverId: ["l", 23],
        left: 337,
        top: 293,
        horizontalType: "left",
        isRefuge: true
    }, {
        id: 80,
        serverId: ["l", 28],
        left: 376,
        top: 293,
        horizontalType: "left"
    }, {
        id: 81,
        serverId: ["l", 2],
        left: 181,
        top: 332,
        horizontalType: "left"
    }, {
        id: 82,
        serverId: ["l", 7],
        left: 220,
        top: 332,
        horizontalType: "left"
    }, {
        id: 83,
        serverId: ["l", 12],
        left: 260,
        top: 332,
        horizontalType: "left"
    }, {
        id: 84,
        serverId: ["l", 17],
        left: 298,
        top: 332,
        horizontalType: "left",
        isRefuge: true
    }, {
        id: 85,
        serverId: ["l", 22],
        left: 337,
        top: 332,
        horizontalType: "left"
    }, {
        id: 86,
        serverId: ["l", 27],
        left: 376,
        top: 332,
        horizontalType: "left"
    }, {
        id: 87,
        serverId: ["l", 1],
        left: 181,
        top: 371,
        horizontalType: "left",
        isHeadquarters: true
    }, {
        id: 88,
        serverId: ["l", 6],
        left: 220,
        top: 371,
        horizontalType: "left"
    }, {
        id: 89,
        serverId: ["l", 11],
        left: 260,
        top: 371,
        horizontalType: "left",
        isRefuge: true
    }, {
        id: 90,
        serverId: ["l", 16],
        left: 298,
        top: 371,
        horizontalType: "left"
    }, {
        id: 91,
        serverId: ["l", 21],
        left: 337,
        top: 371,
        horizontalType: "left",
        isRefuge: true
    }, {
        id: 92,
        serverId: ["l", 26],
        left: 376,
        top: 371,
        horizontalType: "left"
    }, {
        id: 93,
        serverId: ["l", 0],
        left: 181,
        top: 410,
        horizontalType: "left"
    }, {
        id: 94,
        serverId: ["l", 5],
        left: 220,
        top: 410,
        horizontalType: "left"
    }, {
        id: 95,
        serverId: ["l", 10],
        left: 260,
        top: 410,
        horizontalType: "left"
    }, {
        id: 96,
        serverId: ["l", 15],
        left: 298,
        top: 410,
        horizontalType: "left"
    }, {
        id: 97,
        serverId: ["l", 20],
        left: 337,
        top: 410,
        horizontalType: "left"
    }, {
        id: 98,
        serverId: ["l", 25],
        left: 376,
        top: 410,
        horizontalType: "left"
    }, {
        id: 99,
        serverId: ["r", 25],
        left: 610,
        top: 253,
        horizontalType: "right"
    }, {
        id: 100,
        serverId: ["r", 20],
        left: 648,
        top: 253,
        horizontalType: "right"
    }, {
        id: 101,
        serverId: ["r", 15],
        left: 686,
        top: 253,
        horizontalType: "right"
    }, {
        id: 102,
        serverId: ["r", 10],
        left: 725,
        top: 253,
        horizontalType: "right"
    }, {
        id: 103,
        serverId: ["r", 5],
        left: 766,
        top: 253,
        horizontalType: "right"
    }, {
        id: 104,
        serverId: ["r", 0],
        left: 804,
        top: 253,
        horizontalType: "right"
    }, {
        id: 105,
        serverId: ["r", 26],
        left: 610,
        top: 293,
        horizontalType: "right"
    }, {
        id: 106,
        serverId: ["r", 21],
        left: 648,
        top: 293,
        horizontalType: "right",
        isRefuge: true
    }, {
        id: 107,
        serverId: ["r", 16],
        left: 686,
        top: 293,
        horizontalType: "right"
    }, {
        id: 108,
        serverId: ["r", 11],
        left: 725,
        top: 293,
        horizontalType: "right",
        isRefuge: true
    }, {
        id: 109,
        serverId: ["r", 6],
        left: 766,
        top: 293,
        horizontalType: "right"
    }, {
        id: 110,
        serverId: ["r", 1],
        left: 804,
        top: 293,
        horizontalType: "right",
        isHeadquarters: true
    }, {
        id: 111,
        serverId: ["r", 27],
        left: 610,
        top: 332,
        horizontalType: "right"
    }, {
        id: 112,
        serverId: ["r", 22],
        left: 648,
        top: 332,
        horizontalType: "right"
    }, {
        id: 113,
        serverId: ["r", 17],
        left: 686,
        top: 332,
        horizontalType: "right",
        isRefuge: true
    }, {
        id: 114,
        serverId: ["r", 12],
        left: 725,
        top: 332,
        horizontalType: "right"
    }, {
        id: 115,
        serverId: ["r", 7],
        left: 766,
        top: 332,
        horizontalType: "right"
    }, {
        id: 116,
        serverId: ["r", 2],
        left: 804,
        top: 332,
        horizontalType: "right"
    }, {
        id: 117,
        serverId: ["r", 28],
        left: 610,
        top: 371,
        horizontalType: "right"
    }, {
        id: 118,
        serverId: ["r", 23],
        left: 648,
        top: 371,
        horizontalType: "right",
        isRefuge: true
    }, {
        id: 119,
        serverId: ["r", 18],
        left: 686,
        top: 371,
        horizontalType: "right"
    }, {
        id: 120,
        serverId: ["r", 13],
        left: 725,
        top: 371,
        horizontalType: "right",
        isRefuge: true
    }, {
        id: 121,
        serverId: ["r", 8],
        left: 766,
        top: 371,
        horizontalType: "right"
    }, {
        id: 122,
        left: 804,
        top: 371,
        horizontalType: "right",
        serverId: ["r", 3],
        isHeadquarters: true
    }, {
        id: 123,
        serverId: ["r", 29],
        left: 610,
        top: 410,
        horizontalType: "right"
    }, {
        id: 124,
        serverId: ["r", 24],
        left: 648,
        top: 410,
        horizontalType: "right"
    }, {
        id: 125,
        serverId: ["r", 19],
        left: 686,
        top: 410,
        horizontalType: "right"
    }, {
        id: 126,
        serverId: ["r", 14],
        left: 725,
        top: 410,
        horizontalType: "right"
    }, {
        id: 127,
        serverId: ["r", 9],
        left: 766,
        top: 410,
        horizontalType: "right"
    }, {
        id: 128,
        serverId: ["r", 4],
        left: 804,
        top: 410,
        horizontalType: "right"
    }]
};

transformRule("r");

export default metaInfo;