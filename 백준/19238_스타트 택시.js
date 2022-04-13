const input = [];

const solution = input => {
  let [n, m, f] = input[0].split(" ").map(Number);
  const map = [];
  for (let i = 1; i <= n; i++) {
    map.push(input[i].split(" ").map(Number));
  }
  let taxi = input[n + 1].split(" ").map(Number);
  const passenger = [];
  const arrive = [];

  for (let i = n + 2; i < input.length; i++) {
    const [p1, p2, a1, a2] = input[i].split(" ").map(Number);
    passenger.push([p1, p2]);
    arrive.push([a1, a2]);
  }
  const d = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  const dfs = () => {
    const [ty, tx] = taxi.map(e => e - 1);
    const distanceMap = new Array(n).fill(0).map(e => new Array(n).fill(-1));
    const visited = new Array(n).fill(0).map(e => new Array(n).fill(false));

    const q = [];
    distanceMap[ty][tx] = 0;
    q.push([ty, tx]);
    visited[ty][tx] = true;
    while (q.length > 0) {
      const [y, x] = q.shift();
      for (let i = 0; i < 4; i++) {
        const ny = y + d[i][1];
        const nx = x + d[i][0];
        if (nx < n && nx >= 0 && ny < n && ny >= 0) {
          if (!visited[ny][nx]) {
            visited[ny][nx] = true;
            if (map[ny][nx] !== 1) {
              distanceMap[ny][nx] = distanceMap[y][x] + 1;
              q.push([ny, nx]);
            }
          }
        }
      }
    }
    return distanceMap;
  };
  const complete = new Array(passenger.length).fill(false);

  const getNearestPassenger = () => {
    const resultMap = dfs();
    const arr = [];
    for (let i = 0; i < passenger.length; i++) {
      if (!complete[i]) {
        const [posY, posX] = passenger[i].map(e => e - 1);
        const distance = resultMap[posY][posX];
        if (distance === -1) return -1;
        if (f - distance >= 0) {
          arr.push([distance, posY, posX, i]);
        }
      }
    }
    if (arr.length === 0) return -1;
    arr.sort((a, b) => {
      let c = a[0] - b[0];
      if (c === 0) {
        c = a[1] - b[1];
        if (c === 0) {
          c = a[2] - b[2];
        }
      }
      return c;
    });
    const [dis, y, x, index] = arr[0];
    f -= dis;
    complete[index] = true;
    return index;
  };

  const goToDestination = index => {
    const distanceMap = dfs();
    const [posY, posX] = arrive[index].map(e => e - 1);
    const distance = distanceMap[posY][posX];
    if (distance === -1) return -1;
    if (f - distance >= 0) {
      return distance;
    } else {
      return -1;
    }
  };
  let count = m;
  let transportAll = true;
  for (let i = 0; i < m; i++) {
    const passengerIndex = getNearestPassenger();
    if (passengerIndex === -1) {
      transportAll = false;
      break;
    }
    taxi = [...passenger[passengerIndex]];
    const distance = goToDestination(passengerIndex);
    if (distance === -1) {
      transportAll = false;
      break;
    }
    taxi = [...arrive[passengerIndex]];
    f += distance;
  }

  if (transportAll) {
    console.log(f);
  } else {
    console.log(-1);
  }
};

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    solution(input);
  });
