# hand_made
def cal():
    target = int(input())
    for num in range(0, target):
        each_sum = [int(a) for a in list(str(num))]
        aim = num + sum(each_sum)
        if aim == target:
            return num
    return 0


# 사람들이 왜 숫자 54가 붙었는지 이해가 안됨..
def cal2():
    n = int(input())
    x = max(n - 54, 1)
    for i in range(max(n - 54, 1), n):
        if n == i + sum(map(int, str(i))):
            return i
    return 0


if __name__ == '__main__':
    print(cal())
