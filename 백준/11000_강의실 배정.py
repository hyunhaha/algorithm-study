import sys
import heapq

input = sys.stdin.readline
n = int(input())
arr = []
heap = []
for i in range(n):
    start, end = map(int, input().split())
    arr.append([start, end])

arr.sort()
heapq.heappush(heap, arr[0][1]) 

for i in range(1, n):
    if heap[0] > arr[i][0]:
        heapq.heappush(heap, arr[i][1])
    else:
        heapq.heappop(heap)
        heapq.heappush(heap, arr[i][1])
print(len(heap))
