  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n; j++) {

      let temp = Map[i][j];
      Map[i][j] = Map[i + 1][j];
      Map[i + 1][j] = temp;


      garo(Map);
      console.log(max)
      sero(Map);
      console.log(max)

      temp = Map[i][j];
      Map[i][j] = Map[i + 1][j];
      Map[i + 1][j] = temp;
    }
  }