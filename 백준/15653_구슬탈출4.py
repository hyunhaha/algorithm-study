import sys
from collections import deque
input = sys.stdin.readline

dx = [0,1,0,-1]
dy = [1,0,-1,0]

def bfs():
  count=1
  while(q):
    for _ in range(len(q)):
      rx,ry,bx,by=q.popleft()
      for i in range(4):
        nrx,nry,nbx,nby=rx, ry, bx, by
        while(True):
          nrx+=dx[i]
          nry+=dy[i]
          if arr[nrx][nry]=='O':
            break
          if arr[nrx][nry]=='#':
            nrx-=dx[i]
            nry-=dy[i]
            break

        while(True):
          nbx+=dx[i]
          nby+=dy[i]
          if arr[nbx][nby]=='O':
            break
          if arr[nbx][nby]=='#':
            nbx-=dx[i]
            nby-=dy[i]
            break

        if arr[nbx][nby]=='O':
            continue
        if arr[nrx][nry]=='O':
            print(count)
            return
        if nrx==nbx and nry==nby:
          if abs(nrx-rx)+abs(nry-ry)> abs(nbx-bx)+abs(nby-by):
              nrx-=dx[i]
              nry-=dy[i]
          else:
              nbx-=dx[i]
              nby-=dy[i]
        if not visited[nrx][nry][nbx][nby]:
          visited[nrx][nry][nbx][nby]=1
          q.append([nrx, nry, nbx, nby])
    count+=1
  print(-1)
  return

n,m=map(int,input().split())
arr=[]
for i in range(n):  
  arr.append(list(input().strip()))
  for j in range(m):
    if arr[i][j]=='R':
      rx,ry=i,j
    elif arr[i][j]=='B':
      bx,by=i,j
q=deque()
visited = [[[[0 for _ in range(m)] for _ in range(n)] for _ in range(m)] for _ in range(n)]
q.append([rx,ry,bx,by])
visited[rx][ry][bx][by]=1
bfs()
