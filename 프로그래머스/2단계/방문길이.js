const solution = (dirs) => {
  const pathSet = new Set();
  const cur = { x: 0, y: 0 };
  const direction = {
    'U': (pos) => pos.y < 5 ? pos.y += 1 : pos.y = 5,
    'D': (pos) => pos.y > -5 ? pos.y -= 1 : pos.y = -5,
    'R': (pos) => pos.x < 5 ? pos.x += 1 : pos.x = 5,
    'L': (pos) => pos.x > -5 ? pos.x -= 1 : pos.x = -5
  };

  [...dirs].forEach(dir => {
    const pre = { ...cur };
    direction[dir](cur);

    const path = [`${pre.x}${pre.y}`, `${cur.x}${cur.y}`].sort();
    pathSet.add(path.join(':'));
  });

  return [...pathSet].map(e => e.split(':')).filter(e => e[0] !== e[1]).length;
}