def perm(lst, n):
    ret = []
    if n > len(lst):
        return ret

    if n == 1:
        for i in lst:
            ret.append([i])
    elif n > 1:
        for idx in range(len(lst)):
            temp = [i for i in lst]
            temp.remove(lst[idx])
            for p in perm(temp, n-1):
                ret.append([lst[idx]]+p)

    return ret


tc = int(input())
for i in range(tc):
    n = int(input())
    inputarr = list(str(input()))
    inputItem = [int(it) for it in inputarr]
    inputList = [i+1 for i in range(n)]
    permResult = perm(inputList, n)
    count = 1
    for index in range(len(permResult)):
        if permResult[index] == inputItem:
            print('Yes')
            break
        elif len(permResult) == index+1:
            if permResult[index] != inputItem:
                print('No')
            else:
                print('Yes')
