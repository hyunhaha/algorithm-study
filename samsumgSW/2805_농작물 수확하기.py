T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    answer = 0
    n = int(input())
    arr = [list(map(int, input().strip())) for _ in range(n)]
    mid = n // 2

    end = n//2

    for i in range(n):
        for j in range(abs(mid - i), abs(n - end)):
            answer += arr[i][j]

        if i < mid:
            end = end-1
        else:
            end = end+1

    print('#' + str(test_case), answer)
