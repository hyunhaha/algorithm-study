function rotate90(points) {
    let maxY = 0;
    points.forEach(point => {
        if (point[1] > maxY) maxY = point[1];
    })
    return points.map(point => [maxY - point[1], point[0]])
}

function isSamePoint(point1, point2) {
    return point1[0] === point2[0] && point1[1] === point2[1];
}

function subtractPath(path1, path2) {
    if (path1.length != path2.length) return null;
    const path1Copy = path1.slice();
    const path2Copy = path2.slice();
    while (path2Copy.length) {
        const point2 = path2Copy.pop();
        const pointIndex = path1Copy.findIndex(point1 => isSamePoint(point1, point2));
        if (pointIndex < 0) return null;
        path1Copy.splice(pointIndex, 1);
    }
    return path1Copy;
}

function paintTable(table, i, j, value, points = []) {
    table[i][j] = value;
    points.push([i, j]);
    if (i > 0) {
        if (table[i - 1][j] === 1) paintTable(table, i - 1, j, value, points);
    }
    if (i < table.length - 1) {
        if (table[i + 1][j] === 1) paintTable(table, i + 1, j, value, points);
    }
    if (j > 0) {
        if (table[i][j - 1] === 1) paintTable(table, i, j - 1, value, points);
    }
    if (j < table[0].length - 1) {
        if (table[i][j + 1] === 1) paintTable(table, i, j + 1, value, points);
    }
    return points;
}

function splitTable(table) {
    let tableValue = 2;
    const tableCopy = table.map(row => row.slice());
    const slices = [];
    for (let i = 0; i < table.length; i++) {
        for (let j = 0; j < table[0].length; j++) {
            if (tableCopy[i][j] === 1) {
                const points = paintTable(tableCopy, i, j, tableValue++);
                let minIndexes = [table.length - 1, table[0].length - 1];
                points.forEach(point => {
                    if (point[0] < minIndexes[0]) minIndexes[0] = point[0];
                    if (point[1] < minIndexes[1]) minIndexes[1] = point[1];
                })
                points.forEach(point => {
                    point[0] -= minIndexes[0];
                    point[1] -= minIndexes[1];
                })
                slices.push(points);
            }
        }
    }
    return slices;
}

function solution(game_board, table) {
    var answer = -1;
    const holes = splitTable(game_board.map(row => row.map(value => value ? 0 : 1)));
    const pointCount = holes.reduce((prev, hole) => prev + hole.length, 0);
    const slices = splitTable(table);

    const remainHoles = holes.filter(hole => {
        let targetHole = hole.slice();
        for (let i = 0; i < 4; i++) {
            const sliceIndex = slices.findIndex(slice => {
                const sub = subtractPath(targetHole, slice);
                return sub != null && sub.length == 0;
            })
            if (sliceIndex >= 0) {
                slices.splice(sliceIndex, 1);
                return false;
            }
            if (i < 3) targetHole = rotate90(targetHole);
        }
        return true;
    });

    const remainCount = remainHoles.reduce((prev, hole) => prev + hole.length, 0);



    return pointCount - remainCount;
}